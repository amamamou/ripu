"use client"

import Link from "next/link"
import { useState } from "react"
import { AuthClientGate } from "@/components/auth/auth-client-gate"
import { AuthShell } from "@/components/auth/auth-shell"
import {
  AuthFieldLabel,
  AuthSubmitButton,
  AuthSwitchLink,
  AuthTextInput,
} from "@/components/auth/auth-ui"
import { useAuth } from "@/contexts/auth-context"
import { getAuthErrorMessage } from "@/lib/auth-errors"

export function MotDePasseOubliePageContent() {
  const { requestPasswordReset } = useAuth()
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setSubmitting(true)
    try {
      await requestPasswordReset(email)
      setSuccess(true)
    } catch (err) {
      setError(getAuthErrorMessage(err, "Impossible d'envoyer l'e-mail de réinitialisation."))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthShell
      eyebrow="Mot de passe"
      heading="Mot de passe oublié"
      description="Indiquez votre adresse e-mail. Nous vous enverrons un lien pour choisir un nouveau mot de passe."
    >
      <AuthClientGate>
        {error ? (
          <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        {success ? (
          <div className="space-y-6">
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Si un compte existe pour <span className="font-semibold">{email.trim()}</span>, un e-mail
              de réinitialisation vient d&apos;être envoyé. Vérifiez votre boîte de réception et vos
              spams.
            </p>
            <AuthSwitchLink prompt="Retour à la" href="/connexion" label="connexion" />
          </div>
        ) : (
          <>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <AuthFieldLabel htmlFor="reset-email" required>
                  E-mail
                </AuthFieldLabel>
                <AuthTextInput
                  id="reset-email"
                  type="email"
                  placeholder="vous@universite.edu"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={setEmail}
                  disabled={submitting}
                />
              </div>

              <AuthSubmitButton disabled={submitting}>
                {submitting ? "Envoi…" : "Envoyer le lien"}
              </AuthSubmitButton>
            </form>

            <div className="mt-8">
              <AuthSwitchLink prompt="Vous vous en souvenez ?" href="/connexion" label="Se connecter" />
            </div>
          </>
        )}
      </AuthClientGate>
    </AuthShell>
  )
}
