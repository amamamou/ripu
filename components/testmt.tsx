import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSectione() {
  const testimonials = [
    {
      name: "Maher Abdelli",
      role: "ISET Kairouan",
      image: "/maher.png",
      quote: "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions étaient soigneusement organisées et ont offert des approches pratiques que j'ai immédiatement appliquées à mon enseignement.",
      rating: 5
    },
    {
      name: "Rym Mallouli",
      role: "Université de Sousse",
      image: "/rym.png",
      quote: "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l'IA éthique dans l'évaluation. Une expérience enrichissante et utile.",
      rating: 5
    },
    {
      name: "Fattouma Mzali",
      role: "ISET Rades",
      image: "/fattouma.png",
      quote: "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies concrètes pour la pratique pédagogique dans un environnement professionnel et stimulant.",
      rating: 5
    },
    {
      name: "Syrine Bousetta",
      role: "ISLM Monastir",
      image: "/syrine.png",
      quote: "Une expérience marquante qui a permis de découvrir de nouvelles approches pédagogiques, d'échanger avec des collègues inspirants et de réfléchir à l'avenir de l'enseignement supérieur.",
      rating: 5
    },
  ]

  return (
    <section className="bg-white px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="label-text mb-6 md:mb-8">
            TÉMOIGNAGES
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black">
            Ce qu'ils retiennent de RIPU25
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50/80 to-white rounded-2xl p-7 md:p-8 border border-gray-200/50 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col h-full group"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 md:mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#F4C542"
                    color="#F4C542"
                    className="drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-5xl leading-none text-gray-300/40 font-serif select-none pointer-events-none">
                "
              </div>

              {/* Quote Text */}
              <p className="text-sm md:text-base text-gray-700 leading-8 flex-1 mb-6 md:mb-8 relative z-10">
                {item.quote}
              </p>

              {/* Person Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-gray-200/50">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-xl object-cover flex-shrink-0"
                />

                <div className="min-w-0">
                  <h4 className="font-semibold text-black text-sm leading-tight">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-600 truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

