"use client"

import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Check,
  Download,
  FileCode2,
  FileText,
  Mail,
  Send,
} from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import {
  SUBMISSION_AXES,
  SUBMISSION_DEADLINE_LABEL,
  SUBMISSION_EMAIL,
  buildSubmissionMailto,
} from "@/lib/submission"

const steps = [
  {
    num: "01",
    title: "Préparer votre communication",
    description:
      "Rédigez un texte de 2 à 4 pages (Springer LNCS), en français ou en anglais. Le PDF joint ne doit contenir aucun nom d'auteur ni affiliation.",
  },
  {
    num: "02",
    title: "Rédiger votre e-mail",
    description:
      "Indiquez le titre, l'axe choisi et les coordonnées des auteurs dans le corps du message. Ces informations ne figurent pas dans le PDF anonyme.",
  },
  {
    num: "03",
    title: "Envoyer avant la date limite",
    description: `Transmettez le tout à ${SUBMISSION_EMAIL} au plus tard le ${SUBMISSION_DEADLINE_LABEL}. Vous recevrez une confirmation de réception.`,
  },
] as const

const checklist = [
  "PDF anonyme (sans noms ni affiliations)",
  "Modèle Springer LNCS (Word ou LaTeX)",
  "2 à 4 pages, figures et références incluses",
  "Axe thématique indiqué dans l'e-mail",
  "Auteur correspondant clairement identifié",
] as const

export function SoumissionPageContent() {
  const mailtoHref = buildSubmissionMailto()

  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      <section className="section-block pb-6 md:pb-10">
        <div className="container-main">
          <div className="max-w-2xl">
            <Reveal>
              <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">Soumission</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="t-section mt-4 text-[var(--black)]">Déposer votre communication</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                Soumission manuelle par e-mail · Double aveugle · Springer LNCS
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 t-body text-[var(--grey-600)]">
                RIPU26 ne passe pas par une plateforme en ligne. Envoyez votre communication directement
                par e-mail à notre comité scientifique — simple, clair et sans compte à créer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-block section-white !pt-0">
        <div className="container-main">
          <Reveal delay={0.08}>
            <div className="floating-panel overflow-hidden">
              <div className="border-b border-[var(--border)] px-7 py-7 md:px-10 md:py-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                      Date limite
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                      {SUBMISSION_DEADLINE_LABEL}
                    </p>
                    <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-[var(--grey-600)]">
                      <CalendarDays className="h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
                      Soumission des communications
                    </p>
                  </div>
                  <a href={mailtoHref} className="btn-lime w-full justify-center sm:w-auto">
                    Envoyer ma soumission
                    <span className="btn-lime-icon">
                      <Send className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid lg:grid-cols-[minmax(280px,360px)_1fr]">
                <aside className="border-b border-[var(--border)] bg-[var(--grey-50)] p-7 md:p-9 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                    Adresse de dépôt
                  </p>
                  <a
                    href={mailtoHref}
                    className="mt-4 inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-[var(--black)] transition-colors hover:text-[var(--brand)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[var(--brand)]">
                      <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    {SUBMISSION_EMAIL}
                  </a>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--grey-600)]">
                    Joignez votre PDF anonyme. Précisez titre, axe et auteurs dans le corps du message.
                  </p>

                  <div className="mt-8 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]">
                      Axes acceptés
                    </p>
                    <ul className="space-y-2">
                      {SUBMISSION_AXES.map((axe) => (
                        <li key={axe} className="text-sm leading-snug text-[var(--grey-600)]">
                          {axe}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>

                <div className="p-7 md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                    Comment procéder
                  </p>
                  <ol className="mt-6 space-y-6">
                    {steps.map((step) => (
                      <li key={step.num} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-xs font-bold text-[var(--brand)]">
                          {step.num}
                        </span>
                        <div>
                          <p className="font-semibold tracking-tight text-[var(--black)]">{step.title}</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-[var(--grey-600)]">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-8 border-t border-[var(--border)] pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]">
                      Avant d&apos;envoyer
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {checklist.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-[var(--grey-600)]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" strokeWidth={2} aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <StaggerChildren className="section-inner grid gap-4 sm:grid-cols-3">
            <StaggerItem>
              <a
                href="/paper/MSWord.zip"
                download
                className="group flex h-full items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] p-5 transition-colors hover:border-[var(--brand)]/25 hover:bg-[var(--brand-soft)]/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--grey-50)] text-[var(--brand)]">
                  <FileText className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--black)]">Template Word</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--brand)]">
                    Télécharger
                    <Download className="h-3 w-3" aria-hidden />
                  </p>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href="/paper/LaTeX2e.zip"
                download
                className="group flex h-full items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] p-5 transition-colors hover:border-[var(--brand)]/25 hover:bg-[var(--brand-soft)]/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--grey-50)] text-[var(--brand)]">
                  <FileCode2 className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--black)]">Template LaTeX</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--brand)]">
                    Télécharger
                    <Download className="h-3 w-3" aria-hidden />
                  </p>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/authors"
                className="group flex h-full items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] p-5 transition-colors hover:border-[var(--brand)]/25 hover:bg-[var(--brand-soft)]/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--grey-50)] text-[var(--brand)]">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--black)]">Guide complet</p>
                  <p className="mt-0.5 text-xs text-[var(--grey-600)]">Appel, évaluation, présentation</p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>
    </main>
  )
}
