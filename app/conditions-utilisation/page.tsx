import { SiteHeader } from "@/components/landing/site-header"
import { ConditionsUtilisationPageContent } from "@/components/legal/conditions-utilisation-page-content"

export const metadata = {
  title: "Conditions d'utilisation — RIPU26",
  description: "Conditions d'utilisation du site et de l'espace auteur RIPU26.",
}

export default function ConditionsUtilisationPage() {
  return (
    <>
      <SiteHeader solid />
      <ConditionsUtilisationPageContent />
    </>
  )
}
