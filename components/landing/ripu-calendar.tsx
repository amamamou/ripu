"use client"

import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"

const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
] as const

export const RIPU_MILESTONE_DEFS = [
  {
    date: new Date(2026, 6, 25),
    label: "25 Juillet 2026",
    event: "Soumission des communications",
    hint: "Date limite pour le dépôt des communications.",
  },
  {
    date: new Date(2026, 7, 25),
    label: "25 Août 2026",
    event: "Notification d'acceptation",
    hint: "Décision du comité scientifique après relecture par les pairs.",
  },
  {
    date: new Date(2026, 8, 1),
    label: "01 Septembre 2026",
    event: "Ouverture des inscriptions",
    hint: "Ouverture des inscriptions au colloque.",
  },
  {
    date: new Date(2026, 9, 30),
    label: "30 Octobre 2026",
    event: "Ouverture de RIPU26",
    hint: "Début du colloque · Sousse, Tunisie.",
  },
  {
    date: new Date(2026, 9, 31),
    label: "31 Octobre 2026",
    event: "Clôture de RIPU26",
    hint: "Fin de l'événement et dernières sessions.",
  },
] as const

type MilestoneStatus = "done" | "current" | "upcoming"

function formatDateParts(date: Date) {
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: MONTHS[date.getMonth()],
  }
}

export function useRipuTimeline() {
  const today = new Date()
  const end = RIPU_MILESTONE_DEFS[RIPU_MILESTONE_DEFS.length - 1].date

  const rawItems = RIPU_MILESTONE_DEFS.map((m, idx) => {
    const prev = RIPU_MILESTONE_DEFS[idx - 1]
    let status: MilestoneStatus
    if (today > m.date) status = "done"
    else if (!prev || today > prev.date) status = "current"
    else status = "upcoming"
    return { ...m, status }
  })

  let currentFound = false
  const items = rawItems.map((item) => {
    if (item.status === "current") {
      if (currentFound) return { ...item, status: "upcoming" as const }
      currentFound = true
    }
    return item
  })

  const activeIndex = items.findIndex((i) => i.status === "current")
  const active = activeIndex !== -1 ? items[activeIndex] : null
  const msPerDay = 1000 * 60 * 60 * 24
  const daysRemaining = active
    ? Math.max(Math.ceil((active.date.getTime() - today.getTime()) / msPerDay), 0)
    : null
  const allDone = !active && today > end

  return { items, active, daysRemaining, allDone }
}

function TimelineMilestone({
  month,
  day,
  title,
  hint,
  status,
  isLast,
}: {
  month: string
  day: string
  title: string
  hint: string
  status: MilestoneStatus
  isLast: boolean
}) {
  return (
    <li className="relative flex gap-5 pb-11 last:pb-0 md:gap-6">
      {!isLast && (
        <span
          className="absolute left-[5px] top-3 h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-[var(--brand)]/30 via-[var(--brand)]/10 to-transparent"
          aria-hidden
        />
      )}
      <div className="relative mt-0.5 shrink-0">
        {status === "current" && (
          <span
            className="absolute -inset-2 rounded-full bg-[var(--brand)]/15 motion-safe:animate-pulse"
            aria-hidden
          />
        )}
        <span
          className={cn(
            "relative block h-2.5 w-2.5 rounded-full",
            status === "done" && "bg-[var(--brand)]",
            status === "current" && "bg-[var(--brand)] ring-4 ring-[var(--brand-soft)]",
            status === "upcoming" && "border-2 border-[var(--grey-400)]/40 bg-white"
          )}
          aria-hidden
        />
      </div>
      <div
        className={cn(
          "min-w-0 flex-1 rounded-[var(--radius-xl)] transition-colors md:flex md:items-start md:gap-8",
          status === "current" && "bg-[var(--brand-soft)]/60 px-4 py-4 md:px-5 md:py-5"
        )}
      >
        <div className="shrink-0 sm:w-[4.5rem]">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--grey-400)]">
            {month}
          </p>
          <p
            className={cn(
              "mt-0.5 text-[1.625rem] font-bold tabular-nums leading-none tracking-tight md:text-[1.75rem]",
              status === "current" ? "text-[var(--brand)]" : "text-[var(--black)]"
            )}
          >
            {day}
          </p>
        </div>
        <div className="mt-3 min-w-0 md:mt-0">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-[var(--black)]">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--grey-600)]">{hint}</p>
        </div>
      </div>
    </li>
  )
}

export function RipuCalendarPanel({
  footerLink,
}: {
  footerLink: { href: string; label: string }
}) {
  const { items, active, daysRemaining, allDone } = useRipuTimeline()

  return (
    <div className="floating-panel overflow-hidden">
      {active && !allDone && daysRemaining !== null && (
        <div className="flex flex-col gap-6 border-b border-[var(--border)] bg-[var(--grey-50)] px-7 py-7 sm:flex-row sm:items-end sm:justify-between md:px-10 md:py-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
              Prochaine échéance
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
              {active.event}
            </p>
            <p className="mt-1.5 text-sm text-[var(--grey-600)]">{active.label}</p>
          </div>
          <div className="sm:text-right">
            <p className="t-stat text-[var(--brand)]">{daysRemaining}</p>
            <p className="mt-1 text-xs font-medium text-[var(--grey-400)]">
              {daysRemaining === 1 ? "jour restant" : "jours restants"}
            </p>
          </div>
        </div>
      )}

      <div className="px-7 py-8 md:px-10 md:py-10">
        <ol className="list-none p-0">
          {items.map((item, idx) => {
            const { day, month } = formatDateParts(item.date)
            return (
              <TimelineMilestone
                key={item.label}
                month={month}
                day={day}
                title={item.event}
                hint={item.hint}
                status={item.status}
                isLast={idx === items.length - 1}
              />
            )
          })}
        </ol>
      </div>

      <div className="flex flex-col gap-4 border-t border-[var(--border)] bg-[var(--grey-50)]/80 px-7 py-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--grey-600)]">
          <CalendarDays className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
          Sousse · 30–31 octobre 2026
          {allDone && <span className="text-[var(--grey-400)]">· Colloque clôturé</span>}
        </p>
        <Link href={footerLink.href} className="link-arrow text-sm font-semibold">
          {footerLink.label}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  )
}
