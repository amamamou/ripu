"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { User, Session, Provider } from "@supabase/supabase-js"
import { createClient } from "@/lib/supabase/client"
import type { AuthProviderId } from "@/lib/auth-providers"
import { getAuthProviderById } from "@/lib/auth-providers"
import type { StoredSubmission } from "@/lib/submission-record"
import { toStoredSubmission } from "@/lib/submission-record"

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (params: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) => Promise<{ needsEmailConfirmation: boolean }>
  signInWithProvider: (providerId: AuthProviderId, redirectTo?: string) => Promise<void>
  requestPasswordReset: (email: string) => Promise<void>
  updatePassword: (password: string) => Promise<void>
  signOut: () => Promise<void>
  hasSubmitted: boolean
  submission: StoredSubmission | null
  refreshSubmissionStatus: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function buildCallbackUrl(redirectTo: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const safeRedirect = redirectTo.startsWith("/") ? redirectTo : "/soumission"
  return `${origin}/auth/callback?next=${encodeURIComponent(safeRedirect)}`
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [submission, setSubmission] = useState<StoredSubmission | null>(null)
  const supabase = useMemo(() => createClient(), [])

  const refreshSubmissionStatus = useCallback(async () => {
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser()

    if (!currentUser) {
      setSubmission(null)
      return
    }

    try {
      const { data, error } = await supabase
        .from("submissions")
        .select("reference, draft, status, created_at")
        .eq("user_id", currentUser.id)
        .maybeSingle()

      if (error) throw error

      setSubmission(data ? toStoredSubmission(data) : null)
    } catch (error) {
      console.error("Erreur vérification soumission:", error)
      setSubmission(null)
    }
  }, [supabase])

  useEffect(() => {
    const init = async () => {
      const {
        data: { session: initialSession },
      } = await supabase.auth.getSession()
      setSession(initialSession)
      setUser(initialSession?.user ?? null)

      if (initialSession?.user) {
        await refreshSubmissionStatus()
      }
      setLoading(false)
    }

    void init()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      setSession(nextSession)
      setUser(nextSession?.user ?? null)
      if (nextSession?.user) {
        await refreshSubmissionStatus()
      } else {
        setSubmission(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase, refreshSubmissionStatus])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const signUp = async ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`.trim(),
        },
        emailRedirectTo: buildCallbackUrl("/auth/email-confirme"),
      },
    })
    if (error) throw error
    return { needsEmailConfirmation: !data.session }
  }

  const signInWithProvider = async (providerId: AuthProviderId, redirectTo = "/soumission") => {
    const providerConfig = getAuthProviderById(providerId)
    const supabaseProvider = providerConfig?.supabaseProvider as Provider | undefined
    if (!supabaseProvider) {
      throw new Error("Ce fournisseur de connexion n'est pas encore disponible.")
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: supabaseProvider,
      options: {
        redirectTo: buildCallbackUrl(redirectTo),
      },
    })
    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    setSubmission(null)
  }

  const requestPasswordReset = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: buildCallbackUrl("/auth/nouveau-mot-de-passe"),
    })
    if (error) throw error
  }

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) throw error
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signInWithProvider,
        requestPasswordReset,
        updatePassword,
        signOut,
        hasSubmitted: submission !== null,
        submission,
        refreshSubmissionStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
