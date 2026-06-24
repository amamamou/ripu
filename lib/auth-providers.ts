export type AuthProviderId = "google" | "orcid"

export type SupabaseOAuthProvider = "google"

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
