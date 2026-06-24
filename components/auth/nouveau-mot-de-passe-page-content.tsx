"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { AuthClientGate } from "@/components/auth/auth-client-gate"
import { AuthShell } from "@/components/auth/auth-shell"
import {
  AuthFieldLabel,
  AuthPasswordInput,
  AuthSubmitButton,
  AuthSwitchLink,
  PasswordStrength,
} from "@/components/auth/auth-ui"
import { useAuth } from "@/contexts/auth-context"
import { getAuthErrorMessage } from "@/lib/auth-errors"

function passwordStrengthLevel(password: string): 0 | 1 | 2 | 3 | 4 {
  if (!password) return 0
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return Math.min(score, 4) as 0 | 1 | 2 | 3 | 4
}

export function NouveauMotDePassePageContent() {
  const router = useRouter()
  const { user, loading, updatePassword } = useAuth()
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const strength = useMemo(() => passwordStrengthLevel(password), [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    setSubmitting(true)
    try {
      await updatePassword(password)
      router.push("/soumission")
      router.refresh()
    } catch (err) {
      setError(getAuthErrorMessage(err, "Impossible de mettre à jour le mot de passe."))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthShell
      eyebrow="Mot de passe"
      heading="Nouveau mot de passe"
      description="Choisissez un mot de passe sécurisé pour votre compte auteur RIPU26."
    >
      <AuthClientGate>
        {loading ? (
          <div className="h-48 animate-pulse rounded-xl bg-[var(--grey-50)]" />
        ) : !user ? (
          <div className="space-y-5">
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Ce lien est invalide ou a expiré. Demandez un nouveau lien de réinitialisation.
            </p>
            <Link
              href="/mot-de-passe-oublie"
              className="btn-lime inline-flex w-full justify-center"
            >
              Demander un nouveau lien
            </Link>
            <AuthSwitchLink prompt="Ou retourner à la" href="/connexion" label="connexion" />
          </div>
        ) : (
          <>
            {error ? (
              <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <AuthFieldLabel htmlFor="new-password" required>
                  Nouveau mot de passe
                </AuthFieldLabel>
                <AuthPasswordInput
                  id="new-password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={setPassword}
                  disabled={submitting}
                />
                <PasswordStrength level={strength} />
              </div>

              <div>
                <AuthFieldLabel htmlFor="new-password-confirm" required>
                  Confirmer
                </AuthFieldLabel>
                <AuthPasswordInput
                  id="new-password-confirm"
                  autoComplete="new-password"
                  required
                  value={confirm}
                  onChange={setConfirm}
                  disabled={submitting}
                />
              </div>

              <AuthSubmitButton disabled={submitting}>
                {submitting ? "Enregistrement…" : "Enregistrer le mot de passe"}
              </AuthSubmitButton>
            </form>
          </>
        )}
      </AuthClientGate>
    </AuthShell>
  )
}
