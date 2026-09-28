import { Brackets } from "./Brackets.jsx";

export function Portrait() {
  return (
    <section
      className="frame frame-portrait"
      data-frame="portrait"
      aria-label="Portrait"
    >
      <div className="plate plate-portrait">
        <div className="leak leak-cyan leak-soft" aria-hidden="true" />
        <Brackets tone="amber" />
        <div className="portrait-ring">
          <img
            src="/profile.webp"
            alt="Illustrated portrait of Kit"
            width="800"
            height="800"
          />
          <div className="portrait-scan" aria-hidden="true" />
        </div>
        <div className="kv">
          <span>ID: kit</span>
          <span className="amber">ENCRYPTED</span>
        </div>
      </div>
    </section>
  );
}
