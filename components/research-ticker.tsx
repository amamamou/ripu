"use client"

import { Reveal } from "@/components/landing/reveal"

const items = [
  "Intelligence Artificielle",
  "Approche par Compétences",
  "Revue par les pairs",
  "Pédagogie Universitaire",
  "Sousse · 30–31 Oct. 2026",
  "Enseignement Supérieur",
  "Innovation Pédagogique",
]

export function ResearchTicker() {
  const loop = [...items, ...items]

  return (
    <Reveal direction="none" duration={0.5}>
      <div className="relative z-10 overflow-hidden bg-white py-3 sm:py-4" aria-hidden>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="ticker-track flex w-max gap-12">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-12 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--grey-400)]"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]/25" />
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
