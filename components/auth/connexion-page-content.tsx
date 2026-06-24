"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { AuthClientGate } from "@/components/auth/auth-client-gate"
import { AuthShell } from "@/components/auth/auth-shell"
import {
  AuthDivider,
  AuthFieldLabel,
  AuthPasswordInput,
  AuthSubmitButton,
  AuthSwitchLink,
  AuthTextInput,
  SocialAuthButtons,
} from "@/components/auth/auth-ui"
import { useAuth } from "@/contexts/auth-context"
import { getAuthErrorMessage } from "@/lib/auth-errors"
import type { AuthProvider } from "@/lib/auth-providers"

export function ConnexionPageContent({ providers }: { providers: readonly AuthProvider[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") ?? "/soumission"
  const authError = searchParams.get("error")

  const { signIn, signInWithProvider } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(
    authError === "auth" ? "La connexion a échoué. Veuillez réessayer." : null
  )
  const [submitting, setSubmitting] = useState(false)
  const [loadingProvider, setLoadingProvider] = useState<AuthProvider["id"] | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      await signIn(email.trim(), password)
      router.push(redirectTo.startsWith("/") ? redirectTo : "/soumission")
      router.refresh()
    } catch (err) {
      setError(getAuthErrorMessage(err, "Connexion impossible."))
    } finally {
      setSubmitting(false)
    }
  }

  const handleProviderClick = async (providerId: AuthProvider["id"]) => {
    setError(null)
    setLoadingProvider(providerId)
    try {
      await signInWithProvider(providerId, redirectTo.startsWith("/") ? redirectTo : "/soumission")
    } catch (err) {
      setError(getAuthErrorMessage(err, "Connexion impossible."))
      setLoadingProvider(null)
    }
  }

  return (
    <AuthShell
      eyebrow="Connexion"
      heading="Bon retour"
      description="Accédez à votre espace auteur pour gérer vos soumissions RIPU26."
    >
      <AuthClientGate>
      {error ? (
        <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <SocialAuthButtons
        providers={providers}
        onProviderClick={handleProviderClick}
        loadingProvider={loadingProvider}
        disabled={submitting}
      />

      <div className="my-6">
        <AuthDivider />
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <AuthFieldLabel htmlFor="login-email" required>
            E-mail
          </AuthFieldLabel>
          <AuthTextInput
            id="login-email"
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
          <div className="mb-2 flex items-center justify-between gap-3">
            <AuthFieldLabel htmlFor="login-password" required>
              Mot de passe
            </AuthFieldLabel>
            <Link
              href="/mot-de-passe-oublie"
              className="text-xs font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
            >
              Oublié ?
            </Link>
          </div>
          <AuthPasswordInput
            id="login-password"
            autoComplete="current-password"
            required
            value={password}
            onChange={setPassword}
            disabled={submitting || Boolean(loadingProvider)}
          />
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--grey-600)]">
          <input type="checkbox" className="h-4 w-4 rounded accent-[var(--brand)]" />
          Se souvenir de moi
        </label>

        <AuthSubmitButton disabled={submitting || Boolean(loadingProvider)}>
          {submitting ? "Connexion…" : "Se connecter"}
        </AuthSubmitButton>
      </form>

      <div className="mt-8">
        <AuthSwitchLink
          prompt="Pas encore de compte ?"
          href={`/inscription${redirectTo !== "/soumission" ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
          label="Créer un compte"
        />
      </div>
      </AuthClientGate>
    </AuthShell>
  )
}
