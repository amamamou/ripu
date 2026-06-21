import { SiteHeader } from "@/components/landing/site-header"
import Hero from "@/components/hero"
import { StatsStrip } from "@/components/stats-strip"
import { ResearchTicker } from "@/components/research-ticker"
import { AboutSection } from "@/components/about-section"
import { PhilosophySection } from "@/components/theme"
import { ImportantDatesSection } from "@/components/important-dates-section"
import { RIPU25SyncSections } from "@/components/ripu25-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <Hero />
        <StatsStrip />
        <ResearchTicker />
        <AboutSection />
        <PhilosophySection />
        <ImportantDatesSection />
        <RIPU25SyncSections />
      </main>
    </>
  )
}
