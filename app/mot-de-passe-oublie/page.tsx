import { Suspense } from "react"
import { MotDePasseOubliePageContent } from "@/components/auth/mot-de-passe-oublie-page-content"

export const metadata = {
  title: "Mot de passe oublié — RIPU26",
  description: "Réinitialisez votre mot de passe auteur RIPU26.",
}

export default function MotDePasseOubliePage() {
  return (
    <Suspense fallback={null}>
      <MotDePasseOubliePageContent />
    </Suspense>
  )
}
