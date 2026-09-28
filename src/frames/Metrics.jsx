export function Metrics() {
  return (
    <section
      className="frame frame-metrics"
      data-frame="metrics"
      aria-label="Experience metrics"
    >
      <div className="plate plate-metrics">
        <div className="leak leak-cyan leak-soft" aria-hidden="true" />
        <div className="led-bar">
          <span className="led-kicker">EXPERIENCE_METRICS // UPLINK</span>
          <span className="led-live">
            <i />
            COUNT_ACTIVE
          </span>
        </div>
        <div className="led-grid">
          <div className="led-row">
            <span className="led-cell">1</span>
            <span className="led-cell">2</span>
            <span className="led-suffix">+</span>
          </div>
          <div className="led-row">
            <span className="led-cell">4</span>
            <span className="led-cell">0</span>
            <span className="led-suffix">+</span>
          </div>
          <p className="led-message">
            years shipping quality software that scales
          </p>
          <p className="led-message">Software projects delivered</p>
        </div>
        <p className="led-subline">
          Software Engineering consulting and freelancing
        </p>
      </div>
    </section>
  );
}
