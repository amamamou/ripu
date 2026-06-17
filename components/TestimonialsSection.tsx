'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "Maher Abdelli",
    institution: "ISET Kairouan",
    quote: "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions étaient soigneusement organisées et ont offert des approches pratiques que j'ai immédiatement appliquées à mon enseignement.",
    image: "/maher.png",
    rating: 5,
    color: "from-[#2F0461] to-[#6B3FA0]"
  },
  {
    name: "Rym Mallouli",
    institution: "Université de Sousse",
    quote: "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l'IA éthique dans l'évaluation.",
    image: "/rym.png",
    rating: 5,
    color: "from-[#8B5CF6] to-[#a33ac2]"
  },
  {
    name: "Fattouma Mzali",
    institution: "ISET Rades",
    quote: "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies pour la pratique, dans une atmosphère professionnelle et stimulante.",
    image: "/fattouma.png",
    rating: 5,
    color: "from-[#a33ac2] to-[#c85fc2]"
  },
  {
    name: "Syrine Bousetta",
    institution: "ISLM Monastir",
    quote: "Une expérience enrichissante qui a permis de croiser des perspectives variées sur l'innovation pédagogique et les transformations de l'enseignement supérieur.",
    image: "/syrine.png",
    rating: 5,
    color: "from-[#2F0461] to-[#8B5CF6]"
  },
  {
    name: "Karim Bensaid",
    institution: "Université de Tunis",
    quote: "Une excellente opportunité de networking avec des professionnels de l'éducation et de découvrir les dernières innovations pédagogiques.",
    image: "/maher.png",
    rating: 5,
    color: "from-[#6B3FA0] to-[#a33ac2]"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-[#f5f2ff] py-24 md:py-32">
      <div className="px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <div className="label-text mb-4">TÉMOIGNAGES</div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-6">
            Expériences remarquables
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#666]">
            Découvrez les retours authentiques de nos participants qui ont vécu l'expérience RIPU et transformé leur pratique pédagogique.
          </p>
        </div>

        {/* Testimonials Grid - 5 items with custom layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-gradient-to-br ${testimonial.color}`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'}}></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base leading-relaxed mb-8 flex-1 italic font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 ring-2 ring-white/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/70 truncate">
                      {testimonial.institution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2F0461] via-[#6B3FA0] to-[#a33ac2] p-12 md:p-16 shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'}}></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Rejoignez la communauté RIPU26
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Participez à une expérience transformatrice avec des experts de l'éducation et des innovateurs pédagogiques du monde entier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/authors"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2F0461] font-semibold rounded-xl hover:bg-[#f5f2ff] transition-colors"
                >
                  Soumettre un article
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/registration"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  S'inscrire maintenant
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-4xl font-light text-white mb-3">500+</div>
                <p className="text-white/80 text-sm">Participants attendus</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-4xl font-light text-white mb-3">50+</div>
                <p className="text-white/80 text-sm">Intervenants internationaux</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-4xl font-light text-white mb-3">3</div>
                <p className="text-white/80 text-sm">Axes thématiques</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-4xl font-light text-white mb-3">2</div>
                <p className="text-white/80 text-sm">Jours d'échanges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
