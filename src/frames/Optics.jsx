import { Brackets } from "./Brackets.jsx";

const buildings = [
  { left: "4%", width: "7%", height: "46%", windows: "cyan" },
  { left: "12%", width: "11%", height: "68%", windows: "violet" },
  { left: "24%", width: "8%", height: "52%", windows: "cyan" },
  { left: "33%", width: "14%", height: "82%", windows: "magenta" },
  { left: "48%", width: "9%", height: "58%", windows: "amber" },
  { left: "58%", width: "12%", height: "74%", windows: "cyan" },
  { left: "71%", width: "8%", height: "49%", windows: "violet" },
  { left: "80%", width: "13%", height: "86%", windows: "magenta" },
];

/**
 * @param {{ size?: "tablet" | "mobile" }} props
 */
export function Optics({ size } = {}) {
  const frameName = size ? `optics-${size}` : "optics";
  const sizeClass = size ? ` size-${size}` : "";

  return (
    <section
      className={`frame frame-optics${sizeClass}`}
      data-frame={frameName}
      aria-label="Optics feed"
    >
      <div className="plate plate-optics">
        <div className="leak leak-cyan" aria-hidden="true" />
        <div className="leak leak-magenta leak-high" aria-hidden="true" />
        <div className="city" aria-hidden="true">
          {buildings.map((building) => (
            <span
              key={`${building.left}-${building.height}`}
              className={`building windows-${building.windows}`}
              style={{
                left: building.left,
                width: building.width,
                height: building.height,
              }}
            />
          ))}
        </div>
        <div className="horizon" aria-hidden="true" />
        <div className="street" aria-hidden="true" />
        <div className="rain" aria-hidden="true" />
        <div className="scan" aria-hidden="true" />
        <Brackets tone="magenta" />
        <div className="rec">
          <i />
          REC // CAM_04
        </div>
        <div className="optics-meta">
          <span className="teal">LOC: UNDEFINED</span>
          <span>OPTICS // IN_TRANSIT</span>
        </div>
      </div>
    </section>
  );
}
