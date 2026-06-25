"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Braces,
  CalendarDays,
  Check,
  Download,
  FileCode2,
  FileText,
  Languages,
  Layers3,
  Trophy,
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { cn } from "@/lib/utils"
import { CFP_PDF_DOWNLOAD_NAME, CFP_PDF_HREF } from "@/lib/cfp-document"
import {
  SUBMISSION_CONTRIBUTION_TYPES,
  SUBMISSION_FORMAT_HIGHLIGHTS,
} from "@/lib/submission"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

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

const sectionAnchors = [
  { num: "01", label: "Dates", href: "#dates" },
  { num: "02", label: "Directives", href: "#guidelines" },
  { num: "03", label: "Appel", href: "#call" },
  { num: "04", label: "Évaluation", href: "#review" },
  { num: "05", label: "Distinction", href: "#award" },
  { num: "06", label: "Présentation", href: "#presentation" },
] as const

const AUTHORS_FORMAT_HIGHLIGHTS = SUBMISSION_FORMAT_HIGHLIGHTS.map((item) =>
  item === "Papiers courts (2 à 4 pages)" ? "Communication (2 à 4 pages)" : item
)

const AUTHORS_CONTRIBUTION_TYPES = SUBMISSION_CONTRIBUTION_TYPES.map((item) =>
  item === "Papiers courts (2 à 4 pages)" ? "Communication (2 à 4 pages)" : item
)

const authorHighlights = AUTHORS_FORMAT_HIGHLIGHTS

const milestoneDefs = [
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

const submissionGuidelines = [
  {
    icon: Layers3,
    title: "Type de contribution",
    bullets: AUTHORS_CONTRIBUTION_TYPES,
  },
  {
    icon: FileText,
    title: "Longueur",
    content: "2 à 4 pages, incluant figures, tableaux et références.",
  },
  {
    icon: Languages,
    title: "Langues",
    content: "Les communications peuvent être soumises en français.",
  },
  {
    icon: FileCode2,
    title: "Template",
    content: "Utilisation obligatoire du modèle Springer LNCS (Word ou LaTeX).",
  },
  {
    icon: Braces,
    title: "Choisir un axe",
    content: "Chaque communication doit être rattachée à un axe thématique de RIPU26.",
  },
] as const

const reviewSteps = [
  { num: "01", title: "Soumission", content: "Dépôt de la communication avant la date limite." },
  { num: "02", title: "Expertise", content: "Évaluation en double aveugle par les membres du comité scientifique." },
  { num: "03", title: "Décision", content: "Notification d'acceptation, de révision ou de refus aux auteurs." },
  { num: "04", title: "Présentation", content: "Présentation orale de la communication lors du colloque à Sousse." },
] as const

const reviewPrinciples = [
  "Double aveugle",
  "Originalité",
  "Rigueur scientifique",
  "Pertinence thématique",
  "Qualité rédactionnelle",
] as const

type MilestoneStatus = "done" | "current" | "upcoming"

function useTimeline() {
  const today = new Date()
  const end = milestoneDefs[milestoneDefs.length - 1].date

  const rawItems = milestoneDefs.map((m, idx) => {
    const prev = milestoneDefs[idx - 1]
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

function AuthorsPanel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("floating-panel overflow-hidden", className)}>{children}</div>
  )
}

function PanelFooter({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "border-t border-[var(--border)] bg-[var(--grey-50)]/80 px-7 py-5 md:px-10",
        className
      )}
    >
      {children}
    </div>
  )
}

function PillList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--grey-600)]"
        >
          <Check className="h-3.5 w-3.5 text-[var(--brand)]" strokeWidth={2} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}

function GuidelineItem({
  icon: Icon,
  title,
  content,
  bullets,
}: {
  icon: LucideIcon
  title: string
  content?: string
  bullets?: readonly string[]
}) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-5 md:p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      </span>
      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-[var(--black)]">
        {title}
      </h3>
      {content ? (
        <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">{content}</p>
      ) : null}
      {bullets && bullets.length > 0 && (
        <ul className={cn("flex-1 space-y-2", content ? "mt-4" : "mt-2")}>
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--grey-600)]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand)]" strokeWidth={2} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {!bullets?.length && <div className="flex-1" />}
    </article>
  )
}

function formatDateParts(date: Date) {
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: MONTHS[date.getMonth()],
  }
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

function TemplateLink({
  href,
  icon: Icon,
  title,
}: {
  href: string
  icon: typeof FileText
  title: string
}) {
  return (
    <Link
      href={href}
      download
      className="group flex items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
          Télécharger
        </span>
        <span className="mt-1 block text-sm font-semibold tracking-tight text-[var(--black)]">
          {title}
        </span>
      </span>
      <Download
        className="h-4 w-4 shrink-0 text-[var(--grey-400)] transition-colors group-hover:text-[var(--brand)]"
        strokeWidth={1.75}
        aria-hidden
      />
    </Link>
  )
}

export function AuthorsPageContent() {
  const { items, active, daysRemaining, allDone } = useTimeline()

  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      {/* Hero */}
      <section className="section-block pb-6 md:pb-10">
        <div className="container-main">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(280px,340px)] lg:gap-16 xl:gap-24">
            <div className="max-w-2xl">
              <Reveal>
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">
                  Guide des auteurs
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="t-section mt-4 text-[var(--black)]">Soumettre à RIPU26</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-3 max-w-xl text-balance text-base font-semibold leading-snug tracking-tight text-[var(--black)] sm:text-lg">
                  Préparer, déposer et présenter votre communication.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                  Appel à communications · Springer LNCS · Double aveugle
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 t-body text-[var(--grey-600)]">
                  Toutes les informations pour participer à la 2e édition internationale de la
                  Rencontre Internationale de la Pédagogie Universitaire — du format de rédaction
                  à la session orale à Sousse.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link href="/soumission" className="btn-lime w-full justify-center sm:w-auto">
                    Soumettre une communication
                    <span className="btn-lime-icon">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <Link
                    href={CFP_PDF_HREF}
                    download={CFP_PDF_DOWNLOAD_NAME}
                    className="btn-outline-pill w-full justify-center sm:w-auto"
                  >
                    Télécharger l&apos;appel (PDF)
                    <Download className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <nav
                  className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3"
                  aria-label="Sections du guide auteurs"
                >
                  {sectionAnchors.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--grey-50)] px-4 py-3.5 transition-all hover:border-[var(--brand)]/25 hover:bg-[var(--brand-soft)]/50"
                    >
                      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                        {link.num}
                      </span>
                      <span className="mt-1 block text-sm font-semibold tracking-tight text-[var(--black)] transition-colors group-hover:text-[var(--brand)]">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.12} className="lg:pt-2">
              <div className="floating-panel overflow-hidden">
                {active && !allDone && daysRemaining !== null ? (
                  <div className="border-b border-[var(--border)] bg-[var(--grey-50)] px-6 py-6 md:px-7 md:py-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                      Prochaine échéance
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--black)]">
                      {active.event}
                    </p>
                    <p className="mt-1 text-sm text-[var(--grey-600)]">{active.label}</p>
                    <div className="mt-5 flex items-end justify-between gap-4 border-t border-[var(--border)] pt-5">
                      <div>
                        <p className="t-stat text-[var(--brand)]">{daysRemaining}</p>
                        <p className="mt-1 text-xs font-medium text-[var(--grey-400)]">
                          {daysRemaining === 1 ? "jour restant" : "jours restants"}
                        </p>
                      </div>
                      <Link href="#dates" className="link-arrow shrink-0 text-sm font-semibold">
                        Calendrier
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="border-b border-[var(--border)] bg-[var(--grey-50)] px-6 py-6 md:px-7 md:py-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                      Colloque
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--black)]">
                      30–31 octobre 2026
                    </p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-[var(--grey-600)]">
                      <CalendarDays className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
                      Sousse, Tunisie
                    </p>
                  </div>
                )}

                <div className="px-6 py-6 md:px-7 md:py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
                    Format de soumission
                  </p>
                  <ul className="mt-4 space-y-3">
                    {authorHighlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[var(--grey-600)]"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-[var(--brand)]" strokeWidth={2} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/soumission"
                    className="link-arrow mt-6 inline-flex text-sm font-semibold"
                  >
                    Page de soumission
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dates — unchanged */}
      <section id="dates" className="section-block section-white !pt-0">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Calendrier"
              title="Dates importantes"
              description="De la soumission au colloque — les étapes clés de RIPU26."
            />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
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
                  {allDone && (
                    <span className="text-[var(--grey-400)]">· Colloque clôturé</span>
                  )}
                </p>
                <Link href="/soumission" className="link-arrow text-sm font-semibold">
                  Soumettre une communication
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Directives */}
      <section id="guidelines" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Soumission"
              title="Directives de soumission"
              description="Format, langue et contenu attendus pour chaque communication."
            />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <AuthorsPanel>
              <StaggerChildren className="grid gap-4 p-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:p-10">
                {submissionGuidelines.map((item) => (
                  <StaggerItem key={item.title} className="h-full">
                    <GuidelineItem {...item} />
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <PanelFooter>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
                  Modèles Springer LNCS
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <TemplateLink href="/paper/MSWord.zip" icon={FileText} title="Template Word" />
                  <TemplateLink href="/paper/LaTeX2e.zip" icon={FileCode2} title="Template LaTeX" />
                </div>
              </PanelFooter>
            </AuthorsPanel>
          </Reveal>
        </div>
      </section>

      {/* Appel */}
      <section id="call" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Appel"
              title="Appel à communications"
              description="Thématiques, axes du colloque et document officiel à consulter avant de rédiger."
            />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <AuthorsPanel>
              <div className="grid lg:grid-cols-2">
                <div className="px-7 py-8 md:px-10 md:py-10">
                  <p className="t-body text-[var(--grey-600)]">
                    RIPU26 invite les chercheurs, enseignants, praticiens et responsables
                    académiques à soumettre leurs travaux autour de l&apos;intelligence
                    artificielle, de l&apos;innovation pédagogique et de l&apos;enseignement
                    supérieur.
                  </p>
                  <p className="mt-4 t-body text-[var(--grey-600)]">
                    Les communications doivent être rattachées à l&apos;un des axes thématiques du
                    colloque et respecter les directives de soumission.
                  </p>
                  <Link href="/about#topics" className="link-arrow mt-6 inline-flex text-sm font-semibold">
                    Voir les axes thématiques
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                </div>

                <div className="border-t border-[var(--border)] bg-[var(--grey-50)] px-7 py-8 md:px-10 md:py-10 lg:border-t-0 lg:border-l">
                  <FileText className="h-5 w-5 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
                    Document officiel
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--black)]">
                    Appel à communications RIPU26
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">
                    PDF complet : thématiques, modalités de participation et informations auteurs.
                  </p>
                  <Link
                    href={CFP_PDF_HREF}
                    download={CFP_PDF_DOWNLOAD_NAME}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--black)] transition-all hover:border-[var(--brand)]/30 hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
                  >
                    Télécharger le PDF
                    <Download className="h-4 w-4" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </AuthorsPanel>
          </Reveal>
        </div>
      </section>

      {/* Évaluation */}
      <section id="review" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Évaluation"
              title="Processus d'évaluation"
              description="Relecture par les pairs et critères appliqués par le comité scientifique."
            />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <AuthorsPanel>
              <StaggerChildren className="grid gap-5 p-7 sm:grid-cols-2 md:p-10 lg:grid-cols-4">
                {reviewSteps.map((step) => (
                  <StaggerItem key={step.num} className="h-full">
                    <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-semibold text-[var(--brand)]">
                        {step.num}
                      </span>
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-[var(--black)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--grey-600)]">
                        {step.content}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <PanelFooter>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
                  Principes d&apos;évaluation
                </p>
                <div className="mt-4">
                  <PillList items={reviewPrinciples} />
                </div>
              </PanelFooter>
            </AuthorsPanel>
          </Reveal>
        </div>
      </section>

      {/* Distinction */}
      <section id="award" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead label="Distinction" title="Best Paper Award" />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <AuthorsPanel>
              <Image
                src="/Best Paper.png"
                alt="Best Paper Award — RIPU26"
                width={1600}
                height={960}
                className="block w-full h-auto"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />

              <div className="flex gap-3 border-t border-[var(--border)] px-7 py-6 md:px-10 md:py-7">
                <Trophy
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="max-w-3xl text-sm leading-relaxed text-[var(--grey-600)]">
                  Parmi les communications acceptées, une communication sera distinguée par le Best Paper
                  Award, récompensant l&apos;excellence scientifique, l&apos;originalité de la
                  contribution et sa pertinence pour les thématiques du colloque.
                </p>
              </div>
            </AuthorsPanel>
          </Reveal>
        </div>
      </section>

      {/* Présentation */}
      <section id="presentation" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Présentation"
              title="Session orale"
              description="Modalités de présentation lors du colloque à Sousse."
            />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <AuthorsPanel>
              <div className="px-7 py-8 md:px-10 md:py-10">
                <p className="text-sm font-medium text-[var(--black)]">
                  15 min de présentation
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--grey-600)]">
                  PDF ou PowerPoint · clé USB de secours · équipement AV sur place · slides
                  concises.
                </p>
              </div>

              <PanelFooter className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--grey-600)]">
                  <CalendarDays className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
                  Sousse · 30–31 octobre 2026
                </p>
                <Link href="/soumission" className="link-arrow text-sm font-semibold">
                  Soumettre une communication
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              </PanelFooter>
            </AuthorsPanel>
          </Reveal>
        </div>
      </section>

      <CTASection className="section-white !bg-white !pt-0 !pb-16 md:!pb-24" />
    </main>
  )
}
