import { spawn } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { PNG } from "pngjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "assets");
const frames = ["hero", "portrait", "optics", "metrics", "stack"];
const origin = "http://127.0.0.1:4178/";

/**
 * @param {string} url
 * @returns {Promise<void>}
 */
function waitForServer(url) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          resolve();
          return;
        }
      } catch {
        // Vite is still booting.
      }
      if (Date.now() - started > 20000) {
        reject(new Error(`Timed out waiting for ${url}`));
        return;
      }
      setTimeout(tick, 200);
    };
    tick();
  });
}

/**
 * @param {import("playwright").Page} page
 * @param {string} frame
 */
function waitForFrameImage(page, frame) {
  return page.locator(`[data-frame="${frame}"] img`).evaluate(
    (img, name) =>
      img instanceof HTMLImageElement &&
      (img.complete ? img.naturalWidth > 0 : new Promise((resolve, reject) => {
        img.onload = () => resolve(true);
        img.onerror = () => reject(new Error(`${name} image failed to load`));
      })),
    frame,
  );
}

/**
 * @param {string} file
 */
function assertTransparentCorners(file) {
  const png = PNG.sync.read(readFileSync(file));
  const corners = [
    [0, 0],
    [png.width - 1, 0],
    [0, png.height - 1],
    [png.width - 1, png.height - 1],
  ];
  for (const [x, y] of corners) {
    const index = (png.width * y + x) * 4;
    const alpha = png.data[index + 3];
    if (alpha !== 0) {
      const [red, green, blue] = [
        png.data[index],
        png.data[index + 1],
        png.data[index + 2],
      ];
      throw new Error(
        `${
          path.basename(file)
        } corner ${x},${y} is rgba(${red},${green},${blue},${alpha})`,
      );
    }
  }
  console.log(
    `${path.basename(file)} ${png.width}x${png.height} corners clear`,
  );
}

const vite = spawn(
  "npx",
  ["vite", "--host", "127.0.0.1", "--port", "4178", "--strictPort"],
  {
    cwd: root,
    stdio: "inherit",
  },
);

try {
  await waitForServer(origin);
  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 2,
    viewport: { width: 1440, height: 900 },
  });
  await page.goto(origin, { waitUntil: "networkidle" });
  await page.addStyleTag({
    content:
      "html, body, #root, .stage { background: transparent !important; }",
  });
  const fontsReady = await page.evaluate(async () => {
    await document.fonts.ready;
    return (
      document.fonts.check("800 54px Sora") &&
      document.fonts.check('500 12px "JetBrains Mono"') &&
      document.fonts.check('700 22px "Hanken Grotesk"') &&
      document.fonts.check('18px "Material Symbols Outlined"')
    );
  });
  if (!fontsReady) {
    throw new Error(
      "Sora, JetBrains Mono, Hanken Grotesk, or Material Symbols did not load",
    );
  }
  await waitForFrameImage(page, "hero");
  await waitForFrameImage(page, "portrait");
  mkdirSync(outDir, { recursive: true });
  for (const name of frames) {
    const file = path.join(outDir, `${name}.png`);
    await page.locator(`[data-frame="${name}"]`).screenshot({
      path: file,
      omitBackground: true,
    });
    assertTransparentCorners(file);
  }
  await browser.close();
} finally {
  vite.kill("SIGTERM");
}
