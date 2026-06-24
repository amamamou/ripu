import { Suspense } from "react"
import { ConnexionPageContent } from "@/components/auth/connexion-page-content"
import { getAuthProviderFlags } from "@/lib/auth-providers"

export const metadata = {
  title: "Connexion — RIPU26",
  description: "Connectez-vous à votre espace auteur RIPU26.",
}

export default function ConnexionPage() {
  const providers = getAuthProviderFlags()

  return (
    <Suspense fallback={null}>
      <ConnexionPageContent providers={providers} />
    </Suspense>
  )
}
