import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSectione() {

const testimonials = [
  {
    name: "Maher Abdelli",
    role: "ISET Kairouan",
    image: "/maher.png",
    quote:
      "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions étaient soigneusement organisées et ont offert des approches pratiques que j'ai immédiatement appliquées à mon enseignement.",
  },
  {
    name: "Rym Mallouli",
    role: "Université de Sousse",
    image: "/rym.png",
    quote:
      "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l'IA éthique dans l'évaluation. Une expérience enrichissante et utile.",
  },
  {
    name: "Fattouma Mzali",
    role: "ISET Rades",
    image: "/fattouma.png",
    quote:
      "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies concrètes pour la pratique pédagogique dans un environnement professionnel et stimulant.",
  },
  {
    name: "Syrine Bousetta",
    role: "ISLM Monastir",
    image: "/syrine.png",
    quote:
      "Une expérience marquante qui a permis de découvrir de nouvelles approches pédagogiques, d’échanger avec des collègues inspirants et de réfléchir à l’avenir de l’enseignement supérieur.",
  },
]

  return (
    <section className="bg-white px-12 py-20">
      <div className="max-w-7xl mx-auto">

         {/* Header */}
    <div className="mb-20">
      <div className="label-text mb-4">
        TÉMOIGNAGES
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Ce qu'ils retiennent de RIPU25
      </h2>
    </div>


        <div className="grid md:grid-cols-4 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#f5f5f5] rounded-[24px] p-7 flex flex-col h-full"
            >
              {/* Big quote */}
              <div className="absolute top-4 right-5 text-[90px] leading-none text-black/[0.04] font-serif select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#F4C542"
                    color="#F4C542"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-[#444] leading-7 flex-1">
                {item.quote}
              </p>

              {/* Person */}
              <div className="flex items-center gap-4 mt-8">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={52}
                  height={52}
                  className="rounded-xl object-cover"
                />

                <div>
                  <h4 className="font-semibold text-black text-sm">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#777]">
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

