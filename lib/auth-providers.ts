export type AuthProviderId = "google" | "microsoft" | "orcid"

export type AuthProvider = {
  id: AuthProviderId
  label: string
  description: string
}

/** UI-only provider list for auth screens (no backend wiring). */
export const AUTH_PROVIDERS: readonly AuthProvider[] = [
  {
    id: "google",
    label: "Google",
    description: "Continuer avec votre compte Google",
  },
  {
    id: "microsoft",
    label: "Microsoft",
    description: "Continuer avec Microsoft",
  },
  {
    id: "orcid",
    label: "ORCID",
    description: "Identifiant chercheur international",
  },
] as const

export function getAuthProviderFlags() {
  return AUTH_PROVIDERS
}
