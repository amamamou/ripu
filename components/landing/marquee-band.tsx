const items = [
  "2e Édition Internationale",
  "Revue par les Pairs",
  "Sousse, Tunisie",
  "30–31 Octobre 2026",
  "Intelligence Artificielle",
  "Approche par Compétences",
  "Innovation Pédagogique",
  "Réseau International",
]

export function MarqueeBand({ dark = false }: { dark?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden border-y py-5 ${
        dark
          ? "border-white/10 bg-[var(--bg-dark)]"
          : "border-[var(--border)] bg-[var(--bg-white)]"
      }`}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex shrink-0 items-center gap-6 px-6 type-label ${
              dark ? "text-white/35" : "text-[var(--text-faint)]"
            }`}
          >
            {item}
            <span className={`h-1 w-1 rounded-full ${dark ? "bg-white/25" : "bg-[var(--accent)]/40"}`} />
          </span>
        ))}
      </div>
    </div>
  )
}
