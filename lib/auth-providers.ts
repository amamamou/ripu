export type AuthProviderId = "google" | "microsoft" | "orcid"

export type SupabaseOAuthProvider = "google" | "azure"

export type AuthProvider = {
  id: AuthProviderId
  label: string
  description: string
  /** Supabase OAuth provider slug — omit for providers not yet wired. */
  supabaseProvider?: SupabaseOAuthProvider
}

export const AUTH_PROVIDERS: readonly AuthProvider[] = [
  {
    id: "google",
    label: "Google",
    description: "Continuer avec votre compte Google",
    supabaseProvider: "google",
  },
  {
    id: "microsoft",
    label: "Microsoft",
    description: "Continuer avec Microsoft",
    supabaseProvider: "azure",
  },
  {
    id: "orcid",
    label: "ORCID",
    description: "Identifiant chercheur international",
  },
] as const

export function getAuthProviderFlags() {
  return AUTH_PROVIDERS.filter((p) => p.supabaseProvider !== undefined)
}

export function getAuthProviderById(id: AuthProviderId) {
  return AUTH_PROVIDERS.find((p) => p.id === id)
}
