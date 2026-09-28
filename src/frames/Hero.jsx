/**
 * @param {{ size?: "tablet" | "mobile" }} props
 */
export function Hero({ size } = {}) {
  const frameName = size ? `hero-${size}` : "hero";
  const sizeClass = size ? ` size-${size}` : "";

  return (
    <section
      className={`frame frame-hero${sizeClass}`}
      data-frame={frameName}
      aria-label="Kono Gaijin banner"
    >
      <div className="plate plate-hero">
        <img
          className="hero-media"
          src="/hero.webp"
          alt=""
          aria-hidden="true"
          width="1600"
          height="900"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-stream" aria-hidden="true">
          <span>&gt; NODE_SYNC_COMPLETE</span>
          <span>&gt; BANDWIDTH: OPTIMAL</span>
          <span>&gt; AWAITING_TRANSMISSION...</span>
        </div>
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="chip chip-live">SYSTEM.READY</span>
            <span className="hero-location">
              Location: Neo-Tokyo // Sector 4
            </span>
          </div>
          <h1>
            <ruby>
              Kono<rt>この</rt> Gaijin<rt>外人</rt>
            </ruby>
          </h1>
          <p className="hero-tagline">Tech, travel, and life on the road.</p>
          <p className="hero-alias">
            aka <strong className="hero-alias-name">Kit - João Victor</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
