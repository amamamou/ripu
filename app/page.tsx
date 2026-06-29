import { SiteHeader } from "@/components/landing/site-header"
import { ScrollProgress } from "@/components/landing/scroll-progress"
import Hero from "@/components/hero"
import { StatsStrip } from "@/components/stats-strip"
import { ResearchTicker } from "@/components/research-ticker"
import { AboutSection } from "@/components/about-section"
import { PhilosophySection } from "@/components/theme"
import { ImportantDatesSection } from "@/components/important-dates-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { RIPU25SyncSections } from "@/components/ripu25-section"

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="overflow-x-clip">
        <Hero />
        <StatsStrip />
        <ResearchTicker />
        <AboutSection />
        <PhilosophySection />
        <ImportantDatesSection />
        <PartnersSection />
        <RIPU25SyncSections />
      </main>
    </>
  )
}
