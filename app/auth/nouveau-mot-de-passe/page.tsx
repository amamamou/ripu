import { Suspense } from "react"
import { NouveauMotDePassePageContent } from "@/components/auth/nouveau-mot-de-passe-page-content"

export const metadata = {
  title: "Nouveau mot de passe — RIPU26",
  description: "Définissez un nouveau mot de passe pour votre compte auteur RIPU26.",
}

export default function NouveauMotDePassePage() {
  return (
    <Suspense fallback={null}>
      <NouveauMotDePassePageContent />
    </Suspense>
  )
}
