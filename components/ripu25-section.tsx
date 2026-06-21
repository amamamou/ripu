"use client"

import { Ripu25Section } from "@/components/ripu25/gallery-section"
import { TestimonialsSection } from "@/components/ripu25/testimonials-section"
import { CTASection } from "@/components/cta-section"

export function RIPU25SyncSections() {
  return (
    <>
      <Ripu25Section />
      <TestimonialsSection />
      <CTASection className="!pt-10 md:!pt-14" />
    </>
  )
}

export { Ripu25Section } from "@/components/ripu25/gallery-section"
export { Ripu25Section as Ripu25AfficheBlock } from "@/components/ripu25/gallery-section"
export { TestimonialsSection } from "@/components/ripu25/testimonials-section"
export { TestimonialsSection as TestimonialsBlock } from "@/components/ripu25/testimonials-section"
