import { Hero } from "./frames/Hero.jsx";
import { Metrics } from "./frames/Metrics.jsx";
import { Optics } from "./frames/Optics.jsx";
import { Portrait } from "./frames/Portrait.jsx";
import { Stack } from "./frames/Stack.jsx";

const sizes = /** @type {const} */ ([undefined, "tablet", "mobile"]);

export function App() {
  return (
    <main className="stage">
      <p className="stage-note">
        FRAME_STUDIO // preview stage is outside the capture
      </p>
      {sizes.map((size) => (
        <Hero key={size ?? "desktop"} size={size} />
      ))}
      <Portrait />
      {sizes.map((size) => (
        <Optics key={size ?? "desktop"} size={size} />
      ))}
      {sizes.map((size) => (
        <Metrics key={size ?? "desktop"} size={size} />
      ))}
      {sizes.map((size) => (
        <Stack key={size ?? "desktop"} size={size} />
      ))}
    </main>
  );
}
