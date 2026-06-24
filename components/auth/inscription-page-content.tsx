"use client"

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
import type { AuthProvider } from "@/lib/auth-providers"

export function InscriptionPageContent({ providers }: { providers: readonly AuthProvider[] }) {
  return (
    <AuthShell
      eyebrow="Inscription"
      heading="Créer un compte"
      description="Rejoignez l'espace auteur pour soumettre et suivre vos communications."
    >
      <SocialAuthButtons providers={providers} />

      <div className="my-6">
        <AuthDivider label="ou par e-mail" />
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()} noValidate>
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
          />
        </div>

        <div>
          <AuthFieldLabel htmlFor="signup-password" required>
            Mot de passe
          </AuthFieldLabel>
          <AuthPasswordInput id="signup-password" autoComplete="new-password" required />
          <PasswordStrength />
        </div>

        <div>
          <AuthFieldLabel htmlFor="signup-confirm" required>
            Confirmer
          </AuthFieldLabel>
          <AuthPasswordInput id="signup-confirm" autoComplete="new-password" required />
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-[var(--grey-600)]">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[var(--brand)]"
          />
          J&apos;accepte les conditions d&apos;utilisation de RIPU26.
        </label>

        <AuthSubmitButton>Créer mon compte</AuthSubmitButton>
      </form>

      <div className="mt-8">
        <AuthSwitchLink prompt="Déjà inscrit ?" href="/connexion" label="Se connecter" />
      </div>
    </AuthShell>
  )
}
