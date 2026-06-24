const RATE_LIMIT_PATTERNS = [
  "over_email_send_rate_limit",
  "email rate limit",
  "email rate exceeded",
  "too many emails",
]

export function getAuthErrorMessage(error: unknown, fallback: string): string {
  if (!error || typeof error !== "object") {
    return fallback
  }

  const record = error as { message?: string; code?: string; status?: number }
  const haystack = `${record.code ?? ""} ${record.message ?? ""}`.toLowerCase()

  if (RATE_LIMIT_PATTERNS.some((p) => haystack.includes(p))) {
    return "Limite d'envoi d'e-mails atteinte. Attendez environ une heure, utilisez la connexion Google, ou configurez un SMTP personnalisé dans Supabase."
  }

  if (record.message?.trim()) {
    return record.message
  }

  return fallback
}
