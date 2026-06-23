"use client"

import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { SubmissionWorkspace } from "@/components/soumission/submission-workspace"
import { CFP_PDF_DOWNLOAD_NAME, CFP_PDF_HREF } from "@/lib/cfp-document"

export function SoumissionPageContent() {
  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      <section className="section-block pb-6 md:pb-8">
        <div className="container-main">
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
        </div>
      </section>

      <section className="section-block section-white !pt-0 pb-16 md:pb-24">
        <SubmissionWorkspace />
      </section>
    </main>
  )
}
