export function Brackets({ tone = "teal" }) {
  return (
    <div className={`brackets brackets-${tone}`} aria-hidden="true">
      <span className="bracket bracket-tl" />
      <span className="bracket bracket-tr" />
      <span className="bracket bracket-bl" />
      <span className="bracket bracket-br" />
    </div>
  );
}
