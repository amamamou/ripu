import { SiteHeader } from "@/components/landing/site-header"
import { ConfidentialitePageContent } from "@/components/legal/confidentialite-page-content"

export const metadata = {
  title: "Politique de confidentialité — RIPU26",
  description: "Politique de confidentialité et protection des données personnelles — RIPU26.",
}

export default function ConfidentialitePage() {
  return (
    <>
      <SiteHeader solid />
      <ConfidentialitePageContent />
    </>
  )
}
