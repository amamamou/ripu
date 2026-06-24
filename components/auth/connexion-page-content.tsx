"use client"

import Link from "next/link"
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
import type { AuthProvider } from "@/lib/auth-providers"

export function ConnexionPageContent({ providers }: { providers: readonly AuthProvider[] }) {
  return (
    <AuthShell
      eyebrow="Connexion"
      heading="Bon retour"
      description="Accédez à votre espace auteur pour gérer vos soumissions RIPU26."
    >
      <SocialAuthButtons providers={providers} />

      <div className="my-6">
        <AuthDivider />
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()} noValidate>
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
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <AuthFieldLabel htmlFor="login-password" required>
              Mot de passe
            </AuthFieldLabel>
            <Link
              href="/connexion"
              className="text-xs font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
            >
              Oublié ?
            </Link>
          </div>
          <AuthPasswordInput id="login-password" autoComplete="current-password" required />
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--grey-600)]">
          <input type="checkbox" className="h-4 w-4 rounded accent-[var(--brand)]" />
          Se souvenir de moi
        </label>

        <AuthSubmitButton>Se connecter</AuthSubmitButton>
      </form>

      <div className="mt-8">
        <AuthSwitchLink
          prompt="Pas encore de compte ?"
          href="/inscription"
          label="Créer un compte"
        />
      </div>
    </AuthShell>
  )
}
