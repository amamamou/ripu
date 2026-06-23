"use client"

import Link from "next/link"
import { ArrowRight, Download, FileCode2, FileText } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { SubmissionWorkspace } from "@/components/soumission/submission-workspace"
import { CFP_PDF_DOWNLOAD_NAME, CFP_PDF_HREF } from "@/lib/cfp-document"

const SPRINGER_WORD_TEMPLATE_HREF = "/paper/MSWord.zip"
const SPRINGER_LATEX_TEMPLATE_HREF = "/paper/LaTeX2e.zip"

function SpringerTemplateLink({
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
      className="group flex items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] sm:p-5"
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

export function SoumissionPageContent() {
  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      <section className="section-block pb-6 md:pb-8">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,22rem)] lg:items-start lg:gap-12 xl:gap-16">
            <div className="max-w-3xl">
              <Reveal>
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">Soumission</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="t-section mt-4 text-[var(--black)]">Espace de soumission</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-3 max-w-xl text-balance text-base font-semibold leading-snug tracking-tight text-[var(--black)] sm:text-lg">
                  Préparez et soumettez votre contribution scientifique.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                  Parcours guidé · Sauvegarde automatique · Transmission au comité scientifique
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 t-body text-[var(--grey-600)]">
                  Cet espace vous accompagne de la configuration initiale jusqu&apos;à la transmission
                  de votre communication. Chaque étape est validée avant de poursuivre — votre dossier
                  reste sauvegardé sur cet appareil.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/authors" className="link-arrow inline-flex text-sm font-semibold">
                    Guide des auteurs
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                  <Link
                    href={CFP_PDF_HREF}
                    download={CFP_PDF_DOWNLOAD_NAME}
                    className="link-arrow inline-flex text-sm font-semibold"
                  >
                    Télécharger l&apos;appel (PDF)
                    <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18} className="lg:pt-1">
              <aside className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--grey-50)]/60 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
                  Modèles Springer LNCS
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">
                  Format officiel pour la rédaction de votre communication.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <SpringerTemplateLink
                    href={SPRINGER_WORD_TEMPLATE_HREF}
                    icon={FileText}
                    title="Template Word"
                  />
                  <SpringerTemplateLink
                    href={SPRINGER_LATEX_TEMPLATE_HREF}
                    icon={FileCode2}
                    title="Template LaTeX"
                  />
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-block section-white !pt-0 pb-16 md:pb-24">
        <SubmissionWorkspace />
      </section>
    </main>
  )
}
