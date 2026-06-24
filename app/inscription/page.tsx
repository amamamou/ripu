import { Suspense } from "react"
import { InscriptionPageContent } from "@/components/auth/inscription-page-content"
import { getAuthProviderFlags } from "@/lib/auth-providers"

export const metadata = {
  title: "Inscription — RIPU26",
  description: "Créez votre compte auteur RIPU26 pour soumettre et suivre vos communications.",
}

export default function InscriptionPage() {
  const providers = getAuthProviderFlags()

  return (
    <Suspense fallback={null}>
      <InscriptionPageContent providers={providers} />
    </Suspense>
  )
}
