"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  CalendarDays,
  Check,
  Download,
  EyeOff,
  FileCode2,
  FileText,
  Languages,
  Layers3,
  UploadCloud,
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
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

const sectionAnchors = [
  { label: "Dates", href: "#dates" },
  { label: "Soumission", href: "#guidelines" },
  { label: "Appel", href: "#call" },
  { label: "Évaluation", href: "#review" },
  { label: "Présentation", href: "#presentation" },
] as const

const quickStart = [
  {
    num: "01",
    title: "Consulter l'appel",
    description: "Lisez les thématiques, axes du colloque et modalités de participation.",
    href: "#call",
  },
  {
    num: "02",
    title: "Préparer votre texte",
    description: "Respectez le format Springer LNCS et les directives de soumission.",
    href: "#guidelines",
  },
  {
    num: "03",
    title: "Envoyer par e-mail",
    description: "Transmettez votre PDF anonyme et les métadonnées avant la date limite.",
    href: "/soumission",
  },
] as const

const milestoneDefs = [
  {
    date: new Date(2026, 6, 15),
    label: "15 Juillet 2026",
    event: "Date limite de soumission",
    hint: "Envoi de votre communication par e-mail à submissions@ripu26.org.",
  },
  {
    date: new Date(2026, 7, 10),
    label: "10 Août 2026",
    event: "Notification aux auteurs",
    hint: "Décision du comité scientifique après relecture par les pairs.",
  },
  {
    date: new Date(2026, 8, 1),
    label: "01 Septembre 2026",
    event: "Date limite d'inscription",
    hint: "Confirmation de votre participation au colloque.",
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
  { icon: Layers3, title: "Type de contribution", content: "Retour d'expérience ou Work in Progress aligné avec les axes scientifiques de RIPU26." },
  { icon: FileText, title: "Longueur", content: "2 à 4 pages, incluant figures, tableaux et références." },
  { icon: Languages, title: "Langues", content: "Les communications peuvent être soumises en français ou en anglais." },
  { icon: FileCode2, title: "Template", content: "Utilisation obligatoire du modèle Springer LNCS (Word ou LaTeX)." },
  { icon: EyeOff, title: "Soumission anonyme", content: "La version soumise pour évaluation ne doit contenir aucun nom d'auteur ou affiliation." },
  { icon: BadgeCheck, title: "Version finale", content: "La version acceptée devra inclure les auteurs, affiliations et coordonnées du correspondant." },
  { icon: Braces, title: "Choisir un axe", content: "Chaque communication doit être rattachée à un axe thématique de RIPU26." },
  { icon: UploadCloud, title: "Mode de dépôt", content: "Soumission manuelle par e-mail à submissions@ripu26.org. Joignez le PDF anonyme et indiquez les métadonnées dans le message." },
] as const

const reviewSteps = [
  { num: "01", title: "Soumission", content: "Envoi de la communication par e-mail avant la date limite." },
  { num: "02", title: "Expertise", content: "Évaluation en double aveugle par les membres du comité scientifique." },
  { num: "03", title: "Décision", content: "Notification d'acceptation, de révision ou de refus aux auteurs." },
  { num: "04", title: "Publication", content: "Intégration des versions finales dans les actes et présentation lors du colloque." },
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

function GuidelineCard({
  icon: Icon,
  title,
  content,
}: (typeof submissionGuidelines)[number]) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 md:p-7">
      <Icon className="h-4 w-4 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-[var(--black)]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--grey-600)]">{content}</p>
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

function DownloadCard({
  href,
  icon: Icon,
  title,
  external,
}: {
  href: string
  icon: typeof FileText
  title: string
  external?: boolean
}) {
  const className =
    "group flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] md:p-7"

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <Download
          className="h-4 w-4 text-[var(--grey-400)] transition-colors group-hover:text-[var(--brand)]"
          strokeWidth={1.75}
          aria-hidden
        />
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
        Télécharger
      </p>
      <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--black)]">{title}</p>
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} download className={className}>
      {inner}
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
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(260px,320px)] lg:gap-16 xl:gap-24">
            <div className="max-w-2xl">
              <Reveal>
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">
                  Guide des auteurs
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="t-section mt-4 text-[var(--black)]">Soumettre à RIPU26</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                  Appel à communications · Springer LNCS · Double aveugle
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 t-body text-[var(--grey-600)]">
                  Toutes les informations pour préparer, déposer et présenter votre communication
                  lors de la 2e édition internationale de la Rencontre Internationale de la
                  Pédagogie Universitaire.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <nav
                  className="mt-8 flex flex-wrap gap-2"
                  aria-label="Sections du guide auteurs"
                >
                  {sectionAnchors.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--grey-600)] transition-colors hover:border-[var(--brand)]/30 hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.12}>
              <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                  Actions rapides
                </p>
                <div className="mt-5 space-y-3">
                  <Link href="/soumission" className="btn-lime w-full justify-center">
                    Soumettre par e-mail
                    <span className="btn-lime-icon">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <Link
                    href="/documents/CFP-RIPU26.pdf"
                    target="_blank"
                    className="btn-outline-pill w-full justify-center"
                  >
                    Télécharger l&apos;appel (PDF)
                    <Download className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="link-arrow mt-2 inline-flex text-sm font-semibold">
                    Questions ? Contactez-nous
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="section-block section-white !pt-0">
        <div className="container-main">
          <StaggerChildren className="grid gap-5 md:grid-cols-3">
            {quickStart.map((step) => (
              <StaggerItem key={step.num} className="h-full">
                <a
                  href={step.href}
                  className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 md:p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                    Étape {step.num}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-[var(--black)]">
                    {step.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--grey-600)]">
                    {step.description}
                  </p>
                  <span className="link-arrow mt-4 inline-flex text-sm font-semibold text-[var(--brand)]">
                    {step.num === "03" ? "Commencer" : "Voir"}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Dates */}
      <section id="dates" className="section-block section-white">
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
                  Soumettre par e-mail
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Soumission"
              title="Directives de soumission"
              description="Toutes les informations nécessaires à la préparation et au dépôt de votre communication."
            />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {submissionGuidelines.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <GuidelineCard {...item} />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <StaggerChildren className="mt-5 grid gap-5 md:grid-cols-3">
            <StaggerItem className="h-full">
              <DownloadCard href="/paper/MSWord.zip" icon={FileText} title="Template Word" />
            </StaggerItem>
            <StaggerItem className="h-full">
              <DownloadCard href="/paper/LaTeX2e.zip" icon={FileCode2} title="Template LaTeX" />
            </StaggerItem>
            <StaggerItem className="h-full">
              <Link
                href="/soumission"
                className="group flex h-full flex-col justify-between rounded-[var(--radius-xl)] bg-[var(--brand-dark)] p-6 text-white md:p-7"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12">
                    <ArrowRight className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
                    Soumission
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight">Déposer par e-mail</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Instructions et adresse de dépôt pour votre communication.
                  </p>
                </div>
                <span className="link-arrow mt-6 inline-flex text-sm font-semibold text-white">
                  Page de soumission
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Call for papers */}
      <section id="call" className="section-block section-white">
        <div className="container-main">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-7 md:p-9">
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">
                  Appel à communications
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                  Call for Papers
                </h2>
                <p className="mt-6 t-body text-[var(--grey-600)]">
                  RIPU26 invite les chercheurs, enseignants, praticiens et responsables académiques
                  à soumettre leurs travaux autour de l&apos;intelligence artificielle, de
                  l&apos;innovation pédagogique et de l&apos;enseignement supérieur.
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
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative h-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--brand-dark)] p-7 md:p-9">
                <div className="mesh-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
                <div className="relative">
                  <FileText className="h-5 w-5 text-white/80" strokeWidth={1.5} aria-hidden />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
                    Document officiel
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
                    PDF · Appel à communications RIPU26
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">
                    Consultez les thématiques, les modalités de participation et les informations
                    destinées aux auteurs.
                  </p>
                  <Link
                    href="/documents/CFP-RIPU26.pdf"
                    target="_blank"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand)] transition-transform hover:-translate-y-0.5"
                  >
                    Télécharger le PDF
                    <Download className="h-4 w-4" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Review */}
      <section id="review" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Évaluation"
              title="Processus d'évaluation"
              description="Chaque proposition est examinée par le comité scientifique selon un processus de relecture académique garantissant la qualité et la pertinence des contributions retenues."
            />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviewSteps.map((step) => (
              <StaggerItem key={step.num} className="h-full">
                <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 md:p-7">
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

          <Reveal delay={0.1} className="section-inner">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
              Principes d&apos;évaluation
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {reviewPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--grey-600)]"
                >
                  <Check className="h-3.5 w-3.5 text-[var(--brand)]" strokeWidth={2} aria-hidden />
                  {principle}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Presentation */}
      <section id="presentation" className="section-block section-white">
        <div className="container-main">
          <Reveal className="section-inner max-w-xl">
            <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-7 md:p-9">
              <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">
                Présentation
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                Session orale
              </h2>
              <p className="mt-6 text-sm font-medium text-[var(--black)]">
                25 min + 5 min de discussion
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">
                PDF ou PowerPoint · clé USB de secours · équipement AV sur place · slides concises.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection className="section-white !bg-white !pt-0 !pb-16 md:!pb-24" />
    </main>
  )
}
