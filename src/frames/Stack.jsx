const groups = [
  {
    name: "Frontend",
    tone: "teal",
    icon: "web",
    chips: ["React", "Svelte", "Vue", "Astro", "Angular", "Vanilla"],
  },
  {
    name: "Backend",
    tone: "amber",
    icon: "memory",
    chips: ["Node.js", "Python", "Rust", "Java"],
  },
  {
    name: "Cloud",
    tone: "magenta",
    icon: "cloud",
    chips: ["AWS", "Azure", "Google Cloud", "Oracle Cloud", "Hetzner"],
  },
  {
    name: "Virtualization",
    tone: "teal",
    icon: "deployed_code",
    chips: ["Docker", "Kubernetes", "K3s", "k3d", "EKS"],
  },
  {
    name: "DevOps",
    tone: "amber",
    icon: "build",
    chips: [
      "GitHub Actions",
      "Jenkins",
      "Travis CI",
      "BuildKite",
      "Forgejo",
      "Gitea",
    ],
  },
  {
    name: "AI",
    tone: "magenta",
    icon: "psychology",
    chips: [
      "OpenAI",
      "Claude",
      "Google Gen-AI",
      "OpenRouter",
      "LangChain",
      "RAG",
      "LangGraph",
      "LangSmith",
      "ComfyUI",
      "Custom Harnesses",
    ],
  },
];

export function Stack() {
  return (
    <section
      className="frame frame-stack"
      data-frame="stack"
      aria-label="Stack coverage"
    >
      <div className="plate plate-stack">
        <div className="leak leak-magenta leak-soft" aria-hidden="true" />
        <header className="stack-banner">
          <div>
            <h2 className="stack-title">
              <span className="material-symbols-outlined" aria-hidden="true">
                hub
              </span>
              STACK_COVERAGE
            </h2>
            <p className="stack-meta">TECH_MATRIX // PICK_OR_DELEGATE</p>
          </div>
          <div className="stack-live">
            <i />
            MATRIX_ONLINE
          </div>
        </header>
        <div className="stack-grid">
          {groups.map((group) => (
            <article
              key={group.name}
              className={`stack-card stack-card-${group.tone}`}
            >
              <h3 className="stack-card-label">
                <span className="material-symbols-outlined" aria-hidden="true">
                  {group.icon}
                </span>
                {group.name}
              </h3>
              <div className="chips">
                {group.chips.map((chip) => (
                  <span key={chip} className="chip chip-stack">
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
