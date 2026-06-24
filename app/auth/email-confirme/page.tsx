import { Suspense } from "react"
import { EmailConfirmeePageContent } from "@/components/auth/email-confirmee-page-content"

export const metadata = {
  title: "Compte confirmé — RIPU26",
  description: "Votre adresse e-mail a été confirmée.",
}

export default function EmailConfirmeePage() {
  return (
    <Suspense fallback={null}>
      <EmailConfirmeePageContent />
    </Suspense>
  )
}
