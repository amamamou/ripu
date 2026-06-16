import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* ============================================================ */}
      {/* SECTION 1: Opening – Typography + Editorial Photography */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Hero Photograph */}
          <div className="relative w-full h-64 md:h-96 rounded-sm overflow-hidden shadow-sm mb-16">
            <Image
              src="/images/collaboration.png"
              alt="International academic collaboration"
              fill
              className="object-cover"
            />
            {/* Overlay Typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                RIPU26
              </h1>
              <p className="text-lg text-white/90 mt-2">
                International Conference on University Teaching Innovation
              </p>
            </div>
          </div>

          {/* Introductory Typography */}
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl leading-8 text-secondary font-light mb-8">
              RIPU brings together researchers, educators, and academic leaders to explore contemporary transformations in higher education. This second edition investigates shifts induced by generative artificial intelligence, competency-based approaches, and new learning models in a context of pedagogical innovation and digital transformation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-[#ececec]">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">400+</div>
                <p className="text-secondary text-sm uppercase tracking-wider">Participants</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-secondary text-sm uppercase tracking-wider">Countries</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <p className="text-secondary text-sm uppercase tracking-wider">Universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Three Research Themes – Alternating Layout */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Theme 1: AI & Teaching */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
            <div>
              <div className="accent-bar">
                <h3 className="text-4xl font-bold text-primary mb-6">
                  AI & Teaching
                </h3>
                <p className="text-lg text-secondary leading-8">
                  Exploring generative AI as an educational tool—from intelligent tutoring systems to assessment innovation. Understanding the impact on student learning outcomes and the evolving role of educators in an AI-augmented classroom.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/research-lab.png"
                alt="AI Research"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Theme 2: Pedagogy - Reversed */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
            <div className="relative h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow lg:order-2">
              <Image
                src="/images/pedagogy-classroom.png"
                alt="Pedagogical Innovation"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="lg:order-1">
              <div className="accent-bar">
                <h3 className="text-4xl font-bold text-primary mb-6">
                  Pedagogical Innovation
                </h3>
                <p className="text-lg text-secondary leading-8">
                  Competency-based learning approaches, active learning strategies, and the thoughtful design of educational experiences. How institutions are reshaping curricula and pedagogical methods to prepare students for complex, evolving professional landscapes.
                </p>
              </div>
            </div>
          </div>

          {/* Theme 3: Inclusion */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div>
              <div className="accent-bar">
                <h3 className="text-4xl font-bold text-primary mb-6">
                  Inclusion & Equity
                </h3>
                <p className="text-lg text-secondary leading-8">
                  Addressing gender equity, accessibility, and inclusive practices in higher education. Creating learning environments where all students—regardless of background or ability—can thrive and succeed.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/collaboration.png"
                alt="Inclusive Community"
                fill
                className="object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Call to Authors – Typography Moment */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block mb-6">
              <div className="h-1 w-16 bg-[#2F0461] mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Does Your Research Align with One of These Themes?
            </h2>
          </div>
          
          <p className="text-xl text-secondary leading-8 mb-12 max-w-2xl mx-auto">
            Explore submission guidelines, important dates, and author recommendations before submitting your scientific contribution.
          </p>

          <Link 
            href="/authors#guidelines" 
            className="btn-primary inline-block"
          >
            Review Author Guidelines
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Featured Speakers – Coming Soon */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="label-text mb-4">SPEAKERS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary">
              Featured Speakers
            </h2>
          </div>

          {/* Placeholder Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-gray-100 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-secondary text-sm">Speaker announcement coming</div>
                  </div>
                </div>
                <p className="text-sm text-secondary uppercase tracking-wider">Speaker to be announced</p>
              </div>
            ))}
          </div>

          {/* Announcement */}
          <div className="mt-20 p-12 border border-[#ececec] text-center rounded-sm">
            <p className="text-xl text-secondary leading-8">
              Featured speakers will be announced soon. Check back for updates on keynote presentations and guest lectures from leading international scholars.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
