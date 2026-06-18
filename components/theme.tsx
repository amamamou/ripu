import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function PhilosophySection() {
  const themes = [
    {
      title: "Intelligence Artificielle & Enseignement",
      items: [
        "L'IAG comme tuteur d'apprentissage",
        "L'IAG et le geste enseignant",
        "L'IAG pour la correction des examens",
        "Les effets de l'IAG sur les apprentissages",
        "L'IAG et la vie étudiante"
      ]
    },
    {
      title: "Approches Pédagogiques",
      items: [
        "L'approche par compétences (APC)",
        "Les plans d'études à l'ère de l'IA et de l'APC",
        "La gamification comme levier d'apprentissage"
      ]
    },
    {
      title: "Genre & Éducation",
      items: [
        "La place des femmes dans l'éducation"
      ]
    }
  ]

  return (
    <section className="bg-white px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
          <div>
            <p className="label-text mb-6 md:mb-8">
              THÉMATIQUES
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
              Les axes du colloque
            </h2>

            <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-gray-600 leading-8">
              RIPU26 accueille des contributions portant sur les usages de l'intelligence artificielle en éducation, l'innovation pédagogique et les enjeux contemporains de l'enseignement supérieur.
            </p>
          </div>

          <Link
            href="/authors#call"
            className="group flex items-center gap-2.5 text-sm font-semibold text-[#2F0461] hover:text-[#1B1142] transition-colors flex-shrink-0"
          >
            Appel à communications
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Text Cards */}
          {themes.map((theme, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50/80 to-gray-100/50 rounded-2xl p-7 md:p-8 border border-gray-200/50 hover:border-gray-300 transition-all duration-300 group"
            >
              <h4 className="font-semibold text-lg md:text-xl text-black mb-6 leading-tight">
                {theme.title}
              </h4>

              <div className="space-y-3">
                {theme.items.map((item, idx) => (
                  <p key={idx} className="text-sm md:text-base text-gray-600 leading-6">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Image Card - spans full height on lg */}
          <div className="lg:row-span-1 relative overflow-hidden rounded-2xl h-80 md:h-96 lg:h-auto group">
            <Image
              src="/hi.png"
              alt="Conference theme"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
  )
}
