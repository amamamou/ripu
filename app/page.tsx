import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/hero';
import LandingNavbar from "@/components/LandingNavbar";
import {
  FilePenLine,
  MailCheck,
  BadgeCheck,
  Presentation,
  PartyPopper,
  Brain,
  GraduationCap,
  Users,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <LandingNavbar />
      
      {/* Hero Section - UNCHANGED */}
      <Hero />

      {/* ============================================================ */}
      {/* SECTION 2: About – Typography + Photography Composition */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Left: Typography Block */}
            <div>
              <h2 className="editorial-heading mb-6 text-balance">
                What is RIPU26?
              </h2>
              
              <p className="text-lg text-secondary leading-8 mb-8">
                RIPU26 brings together educators, researchers, and leaders in higher education to explore the intersection of artificial intelligence, innovative pedagogy, and student-centered approaches. A space for rigorous exchange and practical innovation.
              </p>
              
              {/* Inline Metrics */}
              <div className="space-y-3">
                <div className="text-lg font-semibold text-primary">
                  <span className="text-accent">400+</span> Participants
                </div>
                <div className="text-lg font-semibold text-primary">
                  <span className="text-accent">25</span> Countries
                </div>
                <div className="text-lg font-semibold text-primary">
                  <span className="text-accent">8</span> Universities
                </div>
              </div>
            </div>
            
            {/* Right: Photograph */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/academic-setting-1.png"
                  alt="RIPU26 international academic community"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Key Statistics – Typography as Visual Element */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-20 text-center">
            {/* Stat 1 */}
            <div>
              <div className="mb-6 h-1 w-12 bg-[#2F0461] mx-auto"></div>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                20+
              </div>
              <p className="text-secondary text-lg">Countries Represented</p>
            </div>
            
            {/* Stat 2 */}
            <div>
              <div className="mb-6 h-1 w-12 bg-[#2F0461] mx-auto"></div>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                500+
              </div>
              <p className="text-secondary text-lg">Global Participants</p>
            </div>
            
            {/* Stat 3 */}
            <div>
              <div className="mb-6 h-1 w-12 bg-[#2F0461] mx-auto"></div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                Research
              </div>
              <p className="text-secondary text-lg">Innovation Collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Themes/Topics – Alternating Composition */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Topic 1: AI */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
            {/* Text Left */}
            <div>
              <div className="accent-bar">
                <h3 className="text-4xl font-bold text-primary mb-6">
                  AI & Teaching
                </h3>
                <p className="text-lg text-secondary leading-8">
                  Exploring generative AI as an educational tool—from learning companion to assessment innovation. Understanding the impact on student outcomes and the evolving role of educators.
                </p>
              </div>
            </div>
            {/* Image Right */}
            <div className="relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/research-lab.png"
                alt="AI Research and Innovation"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Topic 2: Pedagogy - Reversed */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
            {/* Image Left */}
            <div className="relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow lg:order-2">
              <Image
                src="/images/pedagogy-classroom.png"
                alt="Innovative Pedagogy"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            {/* Text Right */}
            <div className="lg:order-1">
              <div className="accent-bar">
                <h3 className="text-4xl font-bold text-primary mb-6">
                  Pedagogical Innovation
                </h3>
                <p className="text-lg text-secondary leading-8">
                  Competency-based approaches, active learning strategies, and the design of educational experiences that prepare students for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Topic 3: Inclusion */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Text Left */}
            <div>
              <div className="accent-bar">
                <h3 className="text-4xl font-bold text-primary mb-6">
                  Inclusion & Equity
                </h3>
                <p className="text-lg text-secondary leading-8">
                  Addressing gender equity, accessibility, and inclusive practices in higher education. Creating learning environments where all students thrive.
                </p>
              </div>
            </div>
            {/* Image Right */}
            <div className="relative h-96 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/collaboration.png"
                alt="Inclusive Academic Community"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: Important Dates - Elegant Timeline */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="label-text mb-4">CALENDRIER</div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">
              Important Dates
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-secondary leading-8">
              Key deadlines for RIPU26 submissions and registration.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {[
              { date: "July 15, 2026", event: "Paper Submission Deadline", icon: FilePenLine },
              { date: "August 10, 2026", event: "Notification to Authors", icon: MailCheck },
              { date: "September 1, 2026", event: "Registration Deadline", icon: BadgeCheck },
              { date: "October 30, 2026", event: "Conference Opening", icon: Presentation },
              { date: "October 31, 2026", event: "Conference Closing", icon: PartyPopper },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-6 items-start pb-8 border-b border-[#ececec] last:border-0">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#2F0461] flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-secondary mb-2">
                      {item.date}
                    </div>
                    <div className="text-xl font-semibold text-primary">
                      {item.event}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: RIPU25 – Large Photography with Typography Overlay */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Featured Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-sm overflow-hidden shadow-sm mb-12">
            <Image
              src="/images/conference-venue.png"
              alt="RIPU25 Conference"
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Overlay Typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                RIPU 2025
              </h3>
              <p className="text-xl text-white/90">
                A Record Edition in Sousse
              </p>
            </div>
          </div>

          {/* Grid of Supporting Information */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-b md:border-b-0 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-primary mb-3">4</div>
              <p className="text-secondary text-sm uppercase tracking-wider">Guest Speakers</p>
            </div>
            <div className="border-b md:border-b-0 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-primary mb-3">3</div>
              <p className="text-secondary text-sm uppercase tracking-wider">Conferences</p>
            </div>
            <div className="border-b md:border-b-0 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-primary mb-3">3</div>
              <p className="text-secondary text-sm uppercase tracking-wider">Workshops</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-3">2</div>
              <p className="text-secondary text-sm uppercase tracking-wider">Days</p>
            </div>
          </div>

          {/* Archive Link */}
          <div className="mt-12 pt-12 border-t border-[#ececec] flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-secondary">Sousse, Tunisia</p>
              <p className="text-lg font-semibold text-primary mt-2">May 30–31, 2025 • Marriott Resort & Spa</p>
            </div>
            <Link href="/ripu25" className="group flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors">
              Explore RIPU25
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: Testimonials – Horizontal Scroll */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="label-text mb-4">TESTIMONIALS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">
              Voices from RIPU25
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-secondary leading-8">
              Perspectives from educators and researchers who shaped an exceptional edition.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                quote: "RIPU25 brilliantly combined scientific rigor with authentic exchanges. Sessions were thoughtfully organized with practical insights I immediately applied to my teaching.",
                name: "Maher Abdelli",
                institution: "ISET Kairouan",
                image: "/maher.png",
              },
              {
                quote: "A well-conceived program with practical workshops and clear frameworks for ethical AI in assessment. An enriching experience.",
                name: "Rym Mallouli",
                institution: "Université de Sousse",
                image: "/rym.png",
              },
              {
                quote: "Thoughtful pacing, rich ideas. Conversations matured into concrete strategies for practice in a professionally stimulating atmosphere.",
                name: "Fattouma Mzali",
                institution: "ISET Rades",
                image: "/fattouma.png",
              },
              {
                quote: "An enriching experience showcasing diverse perspectives on pedagogical innovation and the future of higher education.",
                name: "Syrine Bousetta",
                institution: "ISLM Monastir",
                image: "/syrine.png",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="accent-bar p-8 bg-white rounded-sm hover:shadow-md transition-shadow">
                <blockquote className="text-base text-secondary leading-7 mb-8 min-h-[180px]">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-6 border-t border-[#ececec] flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-secondary">
                      {testimonial.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
