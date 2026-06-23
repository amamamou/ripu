"use client"

import Link from "next/link"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { SectionHead } from "@/components/landing/section-head"
import { cn } from "@/lib/utils"

const milestones = [
  {
    index: "01",
    day: "15",
    month: "Juillet",
    title: "Soumission des abstracts",
    description: "Soumission des communications avant le 15 juillet 2026.",
    href: "/authors#call",
    label: "Guide des auteurs",
  },
  {
    index: "02",
    day: "10",
    month: "Août",
    title: "Notification aux auteurs",
    description: "Retour après relecture par les pairs, avant le 10 août.",
    href: "/authors#review",
    label: "Processus de relecture",
  },
  {
    index: "03",
    day: "01",
    month: "Septembre",
    title: "Inscription au colloque",
    description: "Confirmez votre participation avant le 1er septembre.",
    href: "/authors#dates",
    label: "Dates & inscription",
  },
  {
    index: "04",
    day: "30–31",
    month: "Octobre",
    title: "Colloque RIPU26 · Sousse",
    description: "Deux jours de conférences, ateliers et échanges en Tunisie.",
    href: "/contact",
    label: "Infos pratiques",
    focus: true,
  },
] as const

export function ImportantDatesSection() {
  return (
    <section id="dates" className="section-block landing-section section-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Calendrier"
            title="Dates importantes"
            description="De la soumission à la conférence — quatre étapes pour vivre RIPU26."
            action={{ label: "Calendrier complet", href: "/authors#dates", variant: "outline" }}
          />
        </Reveal>

        <StaggerChildren
          className="section-inner overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-white"
          stagger={0.06}
          delay={0.04}
          role="list"
        >
          {milestones.map((item, i) => (
            <StaggerItem
              key={item.title}
              role="listitem"
              className={cn(i > 0 && "border-t border-[var(--border)]")}
            >
              <Link
                href={item.href}
                className="group flex flex-col gap-4 px-6 py-6 transition-colors duration-200 hover:bg-[var(--grey-50)]/70 sm:grid sm:grid-cols-[2.25rem_5.25rem_minmax(0,1fr)_auto] sm:items-start sm:gap-x-7 sm:px-8 sm:py-7 lg:grid-cols-[2.5rem_6rem_minmax(0,1fr)_auto] lg:gap-x-9"
              >
                <span
                  className="pt-0.5 text-[0.6875rem] font-medium tabular-nums tracking-[0.08em] text-[var(--grey-300)] sm:col-start-1 sm:row-start-1"
                  aria-hidden
                >
                  {item.index}
                </span>

                <div className="flex shrink-0 flex-col gap-1 sm:col-start-2 sm:row-start-1">
                  <span className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--grey-400)]">
                    {item.month}
                  </span>
                  <span
                    className={cn(
                      "text-[1.625rem] font-semibold leading-none tracking-tight text-[var(--black)] lg:text-[1.75rem]",
                      item.focus && "text-[var(--brand)]"
                    )}
                  >
                    {item.day}
                  </span>
                </div>

                <div className="min-w-0 sm:col-start-3 sm:row-start-1">
                  <span className="block text-[0.9375rem] font-semibold tracking-tight text-[var(--black)] md:text-base">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-[var(--grey-500)]">
                    {item.description}
                  </span>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1.5 self-start text-[var(--grey-400)] transition-colors group-hover:text-[var(--brand)] sm:col-start-4 sm:row-start-1 sm:pt-1">
                  <span className="text-[0.8125rem] font-medium">{item.label}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal
          delay={0.12}
          className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:mt-11"
        >
          <p className="m-0 inline-flex items-center gap-2 text-sm text-[var(--grey-500)]">
            <CalendarDays className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
            Sousse, Tunisie · 30–31 octobre 2026
          </p>
          <Link href="/authors" className="link-arrow text-sm font-semibold">
            Appel à communications
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
