"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"

const milestones = [
  {
    day: "15",
    month: "Juillet",
    title: "Soumission des papiers",
    description: "Envoyez votre communication avant le 15 juillet 2026.",
    href: "/authors#call",
    label: "Guide des auteurs",
  },
  {
    day: "10",
    month: "Août",
    title: "Notification aux auteurs",
    description: "Revue par les pairs et réponse aux auteurs avant le 10 août.",
    href: "/authors#review",
    label: "Processus de revue",
  },
  {
    day: "01",
    month: "Septembre",
    title: "Date limite d'inscription",
    description: "Confirmez votre participation avant le 1er septembre.",
    href: "/authors#dates",
    label: "Dates & inscription",
  },
  {
    day: "30–31",
    month: "Octobre",
    title: "Conférence · Sousse",
    description: "Deux jours de conférences, ateliers et échanges à Sousse, Tunisie.",
    href: "/contact",
    label: "Lieu & contact",
  },
] as const

export function ImportantDatesSection() {
  return (
    <section id="dates" className="section-block landing-section section-muted">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Calendrier"
            title="Dates importantes"
            description="De la soumission à la conférence — quatre jalons pour RIPU26."
            action={{ label: "Appel à communications", href: "/authors", variant: "outline" }}
          />
        </Reveal>

        <Reveal delay={0.06} className="section-inner">
          <div className="overflow-hidden rounded-2xl bg-[var(--white)] shadow-[var(--shadow-panel)] sm:rounded-[1.75rem]">
            <ol className="divide-y divide-black/[0.05]">
              {milestones.map((item, i) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group grid grid-cols-1 gap-4 px-5 py-6 transition-colors hover:bg-[var(--grey-50)] sm:px-7 sm:py-7 md:grid-cols-[minmax(5.5rem,7rem)_1fr_auto] md:items-center md:gap-8 lg:gap-12 lg:px-9 lg:py-8"
                  >
                    <div className="flex items-end gap-3 md:flex-col md:items-start md:gap-0.5">
                      <span className="text-[2rem] font-bold leading-none tracking-tighter text-[var(--brand)] sm:text-[2.25rem] lg:text-[2.5rem]">
                        {item.day}
                      </span>
                      <span className="pb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--grey-400)] sm:text-[11px]">
                        {item.month} 2026
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-tight text-[var(--black)] sm:text-lg lg:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--grey-600)]">{item.description}</p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] md:justify-self-end">
                      <span className="hidden sm:inline">{item.label}</span>
                      <span className="sm:hidden">En savoir plus</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-px group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="section-inner mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--grey-600)]">Sousse, Tunisie · 30–31 octobre 2026</p>
          <Link
            href="/authors#dates"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition-opacity hover:opacity-70"
          >
            Calendrier complet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
