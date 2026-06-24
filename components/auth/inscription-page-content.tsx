"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import {
  AuthDivider,
  AuthFieldLabel,
  AuthPasswordInput,
  AuthSubmitButton,
  AuthSwitchLink,
  AuthTextInput,
  PasswordStrength,
  SocialAuthButtons,
} from "@/components/auth/auth-ui"
import { useAuth } from "@/contexts/auth-context"
import type { AuthProvider } from "@/lib/auth-providers"

function passwordStrengthLevel(password: string): 0 | 1 | 2 | 3 | 4 {
  if (!password) return 0
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return Math.min(score, 4) as 0 | 1 | 2 | 3 | 4
}

export function InscriptionPageContent({ providers }: { providers: readonly AuthProvider[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") ?? "/soumission"

  const { signUp, signInWithProvider } = useAuth()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [loadingProvider, setLoadingProvider] = useState<AuthProvider["id"] | null>(null)

  const strength = useMemo(() => passwordStrengthLevel(password), [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    setSubmitting(true)
    try {
      const { needsEmailConfirmation } = await signUp({
        email: email.trim(),
        password,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      })

      if (needsEmailConfirmation) {
        setSuccess("Compte créé. Vérifiez votre boîte mail pour confirmer votre adresse.")
        return
      }

      router.push(redirectTo.startsWith("/") ? redirectTo : "/soumission")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Inscription impossible.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleProviderClick = async (providerId: AuthProvider["id"]) => {
    setError(null)
    setSuccess(null)
    setLoadingProvider(providerId)
    try {
      await signInWithProvider(providerId, redirectTo.startsWith("/") ? redirectTo : "/soumission")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connexion impossible.")
      setLoadingProvider(null)
    }
  }

  return (
    <AuthShell
      eyebrow="Inscription"
      heading="Créer un compte"
      description="Rejoignez l'espace auteur pour soumettre et suivre vos communications."
    >
      {error ? (
        <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}
      {success ? (
        <p className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {success}
        </p>
      ) : null}

      <SocialAuthButtons
        providers={providers}
        onProviderClick={handleProviderClick}
        loadingProvider={loadingProvider}
        disabled={submitting}
      />

      <div className="my-6">
        <AuthDivider label="ou par e-mail" />
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <AuthFieldLabel htmlFor="signup-firstName" required>
              Prénom
            </AuthFieldLabel>
            <AuthTextInput
              id="signup-firstName"
              placeholder="Prénom"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={setFirstName}
              disabled={submitting || Boolean(loadingProvider)}
            />
          </div>
          <div>
            <AuthFieldLabel htmlFor="signup-lastName" required>
              Nom
            </AuthFieldLabel>
            <AuthTextInput
              id="signup-lastName"
              placeholder="Nom"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={setLastName}
              disabled={submitting || Boolean(loadingProvider)}
            />
          </div>
        </div>

        <div>
          <AuthFieldLabel htmlFor="signup-email" required>
            E-mail
          </AuthFieldLabel>
          <AuthTextInput
            id="signup-email"
            type="email"
            placeholder="vous@universite.edu"
            autoComplete="email"
            required
            value={email}
            onChange={setEmail}
            disabled={submitting || Boolean(loadingProvider)}
          />
        </div>

        <div>
          <AuthFieldLabel htmlFor="signup-password" required>
            Mot de passe
          </AuthFieldLabel>
          <AuthPasswordInput
            id="signup-password"
            autoComplete="new-password"
            required
            value={password}
            onChange={setPassword}
            disabled={submitting || Boolean(loadingProvider)}
          />
          <PasswordStrength level={strength} />
        </div>

        <div>
          <AuthFieldLabel htmlFor="signup-confirm" required>
            Confirmer
          </AuthFieldLabel>
          <AuthPasswordInput
            id="signup-confirm"
            autoComplete="new-password"
            required
            value={confirm}
            onChange={setConfirm}
            disabled={submitting || Boolean(loadingProvider)}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-[var(--grey-600)]">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[var(--brand)]"
          />
          J&apos;accepte les conditions d&apos;utilisation de RIPU26.
        </label>

        <AuthSubmitButton disabled={submitting || Boolean(loadingProvider)}>
          {submitting ? "Création…" : "Créer mon compte"}
        </AuthSubmitButton>
      </form>

      <div className="mt-8">
        <AuthSwitchLink
          prompt="Déjà inscrit ?"
          href={`/connexion${redirectTo !== "/soumission" ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
          label="Se connecter"
        />
      </div>
    </AuthShell>
  )
}
