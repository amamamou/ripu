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
    description: "Envoyez votre proposition avant le 15 juillet 2026.",
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
          className="section-inner m-0 list-none border-t border-[var(--border)] p-0"
          stagger={0.07}
          delay={0.05}
          role="list"
        >
          {milestones.map((item) => (
            <StaggerItem
              key={item.title}
              role="listitem"
              className={cn(
                "border-b border-[var(--border)]",
                item.focus && "bg-gradient-to-r from-[var(--brand-soft)] to-transparent"
              )}
            >
              <Link
                href={item.href}
                className="group flex flex-col gap-3 py-5 transition-opacity duration-200 hover:opacity-70 sm:grid sm:grid-cols-[2.5rem_5.5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-x-6 sm:gap-y-0 sm:py-7 lg:grid-cols-[3rem_6.5rem_minmax(0,1fr)_auto] lg:gap-x-8 lg:py-8"
              >
                <div className="flex items-start justify-between gap-3 sm:contents">
                  <div className="flex min-w-0 items-start gap-3 sm:contents">
                    <span
                      className="shrink-0 pt-1 text-[0.6875rem] font-semibold tabular-nums tracking-[0.1em] text-[var(--grey-400)] sm:col-start-1 sm:row-start-1 sm:pt-0.5"
                      aria-hidden
                    >
                      {item.index}
                    </span>

                    <div className="flex shrink-0 flex-col gap-0.5 sm:col-start-2 sm:row-start-1">
                      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--grey-400)]">
                        {item.month}
                      </span>
                      <span
                        className={cn(
                          "text-[1.75rem] font-bold leading-none tracking-tight text-[var(--black)] sm:text-[clamp(1.5rem,4vw,1.875rem)]",
                          item.focus && "text-[var(--brand)]"
                        )}
                      >
                        {item.day}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 pt-1 text-[var(--brand)] sm:col-start-4 sm:row-start-1 sm:pt-0.5">
                    <span className="hidden text-[0.8125rem] font-semibold sm:inline">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-px group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                </div>

                <div className="min-w-0 sm:col-start-3 sm:row-start-1">
                  <span className="block text-base font-semibold tracking-tight text-[var(--black)] md:text-[1.0625rem]">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-[var(--grey-600)]">
                    {item.description}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] sm:hidden">
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal
          delay={0.15}
          className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-8 lg:mt-11"
        >
          <p className="m-0 inline-flex items-center gap-2 text-sm font-medium text-[var(--grey-600)]">
            <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
            Sousse, Tunisie · 30–31 octobre 2026
          </p>
          <Link href="/authors" className="link-arrow">
            Appel à communications
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
