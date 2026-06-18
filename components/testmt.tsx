import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSectione() {
  const testimonials = [
    {
      name: "Denis Gillet",
      role: "EPFL, Suisse",
      image: "/maher.png",
      quote:
        "RIPU est devenu un rendez-vous incontournable pour réfléchir à l'avenir de l'enseignement supérieur.",
    },
    {
      name: "Sonia Sahli",
      role: "ISET Sousse",
      image: "/rym.png",
      quote:
        "Une expérience riche en échanges, en rencontres et en découvertes autour de l'innovation pédagogique.",
    },
    {
      name: "Thierry Spriet",
      role: "Avignon Université",
      image: "/fattouma.png",
      quote:
        "La qualité des interventions et la diversité des participants ont rendu cette édition particulièrement inspirante.",
    },
    {
      name: "Participant RIPU25",
      role: "Tunisie",
      image: "/syrine.png",
      quote:
        "Un événement remarquable qui favorise le dialogue entre recherche, pédagogie et intelligence artificielle.",
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
              className="relative bg-[#f5f5f5] rounded-[24px] p-7 h-[340px] flex flex-col"
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

