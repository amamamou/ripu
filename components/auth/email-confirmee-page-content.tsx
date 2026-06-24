"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AuthShell } from "@/components/auth/auth-shell"

export function EmailConfirmeePageContent() {
  return (
    <AuthShell
      eyebrow="Compte confirmé"
      heading="Bienvenue sur RIPU26"
      description="Votre adresse e-mail est vérifiée. Vous pouvez accéder à l'espace de soumission."
    >
      <div className="rounded-[var(--radius-xl)] border border-emerald-200 bg-emerald-50 px-5 py-4">
        <div className="flex gap-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
          <p className="text-sm leading-relaxed text-emerald-900">
            Votre compte auteur est actif. Vous pouvez soumettre votre communication ou revenir plus tard
            depuis votre espace.
          </p>
        </div>
      </div>

      <Link href="/soumission" className="btn-lime mt-8 w-full justify-center">
        Accéder à l&apos;espace de soumission
        <span className="btn-lime-icon">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>

      <p className="mt-6 text-center text-sm text-[var(--grey-600)]">
        <Link href="/" className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]">
          Retour à l&apos;accueil
        </Link>
      </p>
    </AuthShell>
  )
}
