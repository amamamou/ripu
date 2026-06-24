import Link from "next/link"
import { ArrowRight, CalendarX, Mail } from "lucide-react"
import {
  SUBMISSION_DEADLINE_LABEL,
  SUBMISSION_EMAIL,
  SUBMISSION_NOTIFICATION_LABEL,
} from "@/lib/submission"

export function SubmissionClosedPanel() {
  return (
    <div className="container-main">
      <div className="floating-panel overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--grey-50)] px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--error-soft)] text-[var(--error)]">
              <CalendarX className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--grey-400)]">
                Soumissions fermées
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                Les dépôts ne sont plus acceptés
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">
                La date limite pour la soumission des communications était fixée au{" "}
                <span className="font-semibold text-[var(--black)]">{SUBMISSION_DEADLINE_LABEL}</span>.
                L&apos;espace de soumission en ligne est désormais fermé.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] md:px-10 md:py-10">
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-[var(--grey-600)]">
              Le comité scientifique procédera à l&apos;évaluation des communications reçues dans les
              délais. Aucune nouvelle soumission, modification ou transmission ne peut être enregistrée
              via cet espace.
            </p>
            <ul className="space-y-3 text-sm text-[var(--grey-600)]">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>
                  <span className="font-semibold text-[var(--black)]">Notifications d&apos;acceptation</span>
                  {" — "}
                  {SUBMISSION_NOTIFICATION_LABEL}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>
                  <span className="font-semibold text-[var(--black)]">Colloque RIPU26</span>
                  {" — "}
                  30–31 octobre 2026 · Sousse, Tunisie
                </span>
              </li>
            </ul>
          </div>

          <aside className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--grey-50)]/80 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
              Besoin d&apos;informations ?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">
              Pour toute question relative à une soumission déjà transmise, contactez le comité
              scientifique.
            </p>
            <a
              href={`mailto:${SUBMISSION_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              {SUBMISSION_EMAIL}
            </a>
            <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-5">
              <Link href="/authors" className="link-arrow inline-flex text-sm font-semibold">
                Guide des auteurs
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
              <Link href="/contact" className="link-arrow inline-flex text-sm font-semibold">
                Page de contact
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
