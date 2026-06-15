import Image from 'next/image';
import Link from 'next/link';
import TopicCard from '@/components/TopicCard';
import Hero from '@/components/hero';
import { AboutSection } from '@/components/about-section';
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
import LandingNavbar from "@/components/LandingNavbar";

const testimonials = [
  {
    quote:
      "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions étaient soigneusement organisées et ont offert des approches pratiques que j’ai immédiatement appliquées à mon enseignement.",
    name: "Maher Abdelli",
    institution: "ISET Kairouan",
    image: "/maher.jpg",
  },
  {
    quote:
      "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l’IA éthique dans l’évaluation.",
    name: "Rym Mallouli",
    institution: "Université de Sousse",
    image: "/rym.jpg",
  },
  {
    quote:
      "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies pour la pratique, dans une atmosphère professionnelle et stimulante.",
    name: "Fattouma Mzali",
    institution: "ISET Rades",
    image: "/fattouma.jpg",
  },
  {
    quote:
      "Une expérience enrichissante qui a permis de croiser des perspectives variées sur l’innovation pédagogique et les transformations de l’enseignement supérieur.",
    name: "Syrine Bousetta",
    institution: "ISLM Monastir",
    image: "/syrine.jpg",
  },
]

export default function HomePage() {
  return (
    <>
    <LandingNavbar/>
      {/* Hero Section */}
  <Hero/>
<AboutSection/>
     


<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">
  <div className="px-8 lg:px-16 ">

    {/* Header */}
    <div className="mb-20">
      <div className="label-text mb-4">
        CALENDRIER
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Dates importantes
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        Les principales échéances du colloque RIPU26.
      </p>
    </div>

    {/* Timeline */}
    <div className="grid md:grid-cols-5 border border-[#ececec]">

{[
  {
    date: "15 Juillet 2026",
    event: "Soumission des papiers",
    icon: FilePenLine,
  },
  {
    date: "10 Août 2026",
    event: "Notification aux auteurs",
    icon: MailCheck,
  },
  {
    date: "01 Septembre 2026",
    event: "Date limite d'inscription",
    icon: BadgeCheck,
  },
  {
    date: "30 Octobre 2026",
    event: "Début de la conférence",
    icon: Presentation,
  },
  {
    date: "31 Octobre 2026",
    event: "Fin de la conférence",
    icon: PartyPopper,
  },
].map((item, idx) => {
        const Icon = item.icon

        return (
          <div
            key={idx}
            className="border-b md:border-b-0 md:border-r last:border-r-0 border-[#ececec] p-6"
          >
            <Icon className="h-4 w-4 text-[#2F0461] mb-6" />

            <div className="text-xs uppercase tracking-[0.15em] text-[#666] mb-3">
              {item.date}
            </div>

            <div className="text-base font-medium text-black leading-snug">
              {item.event}
            </div>
          </div>
        )
      })}
    </div>

  </div>
</section>









{/* Topics Section */}
{/* Topics Section */}
<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">
  <div className="px-8 lg:px-16 ">

    {/* Header */}
<div className="mb-20 md:mb-24">

{/* Header */}
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">

  <div>
    <div className="label-text mb-6">
      THÉMATIQUES
    </div>

    <h2 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tight text-black">
      Trois axes de recherche
    </h2>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
      Explorer les transformations de l’enseignement supérieur à travers
      l’intelligence artificielle, l’innovation pédagogique et les enjeux
      d’équité en éducation.
    </p>
  </div>

<div className="shrink-0">
  <button className="group flex items-center gap-2 text-sm font-medium text-[#2F0461] transition-colors hover:text-[#1B1142]">
    Soumettre une communication

    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </button>
</div>
</div>


</div>

    {/* Topics */}
    <div className="grid gap-6 lg:grid-cols-3">

      {/* Card 1 */}
      <div className="border border-[#ececec] p-8">

        <div className="flex items-center justify-between mb-8">
          <Brain className="h-5 w-5 text-[#2F0461]" />

          <span className="text-xs uppercase tracking-[0.15em] text-[#999]">
            Axe 01
          </span>
        </div>

        <h3 className="text-2xl font-light text-black mb-6">
          Intelligence Artificielle Générative
        </h3>

        <div className="space-y-3 text-[#666]">
          <p>L’IAG comme tuteur d’apprentissage</p>
          <p>L’IAG et le geste enseignant</p>
          <p>L’IAG pour la correction des examens</p>
          <p>Les effets de l’IAG sur les apprentissages</p>
        </div>

        <button className="mt-8 text-sm font-medium text-[#2F0461]">
          En savoir plus →
        </button>
      </div>

      {/* Card 2 */}
      <div className="border border-[#ececec] p-8">

        <div className="flex items-center justify-between mb-8">
          <GraduationCap className="h-5 w-5 text-[#2F0461]" />

          <span className="text-xs uppercase tracking-[0.15em] text-[#999]">
            Axe 02
          </span>
        </div>

        <h3 className="text-2xl font-light text-black mb-6">
          Approches pédagogiques & Compétences
        </h3>

        <div className="space-y-3 text-[#666]">
          <p>L’approche par compétences (APC)</p>
          <p>Les plans d’études à l’ère de l’IA</p>
          <p>La gamification comme levier</p>
          <p>Innovation pédagogique</p>
        </div>

        <button className="mt-8 text-sm font-medium text-[#2F0461]">
          En savoir plus →
        </button>
      </div>

      {/* Card 3 */}
      <div className="border border-[#ececec] p-8">

        <div className="flex items-center justify-between mb-8">
          <Users className="h-5 w-5 text-[#2F0461]" />

          <span className="text-xs uppercase tracking-[0.15em] text-[#999]">
            Axe 03
          </span>
        </div>

        <h3 className="text-2xl font-light text-black mb-6">
          Genre & Équité en Éducation
        </h3>

        <div className="space-y-3 text-[#666]">
          <p>La place des femmes dans l’éducation</p>
          <p>Équité et inclusion pédagogique</p>
          <p>Diversité dans l’enseignement supérieur</p>
        </div>

        <button className="mt-8 text-sm font-medium text-[#2F0461]">
          En savoir plus →
        </button>
      </div>

    </div>

  </div>
</section>






      {/* Previous Edition Section */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="px-8 lg:px-16 ">
          <div className="text-center mb-16">
            <div className="label-text mb-4">ÉDITION PRÉCÉDENTE</div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">RIPU25 - Édition Précédente</h2>
          </div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
  {[
    '/ripu/2.png',
    '/ripu/1.png',
    '/ripu/3.png',
  ].map((img, idx) => (
    <div
      key={idx}
      className="relative w-full h-64 rounded-lg overflow-hidden bg-[#f9f9f9]"
    >
      <Image
        src={img}
        alt={`RIPU25 moment ${idx + 1}`}
        fill
        className={`object-cover hover:opacity-80 transition-smooth ${
          img === "/ripu/1.png" ? "object-top" : "object-center"
        }`}
      />
    </div>
  ))}
</div>

  <div className="border border-[#ececec]">

  <div className="border-b border-[#ececec] p-8 md:p-12">
    <div className="label-text mb-4">
      RIPU25
    </div>

    <h3 className="text-4xl md:text-5xl font-light tracking-tight text-black">
      Une édition marquante
    </h3>

    <p className="mt-4 max-w-2xl text-[#666] leading-8">
      Une communauté internationale réunie autour de la pédagogie,
      de l'innovation et des transformations de l'enseignement supérieur.
    </p>
  </div>

  <div className="grid md:grid-cols-4">

    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#ececec]">
      <div className="text-5xl font-light text-black">
        450+
      </div>

      <div className="mt-3 text-sm uppercase tracking-[0.15em] text-[#666]">
        Participants
      </div>
    </div>

    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#ececec]">
      <div className="text-5xl font-light text-black">
        35
      </div>

      <div className="mt-3 text-sm uppercase tracking-[0.15em] text-[#666]">
        Pays
      </div>
    </div>

    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#ececec]">
      <div className="text-5xl font-light text-black">
        120+
      </div>

      <div className="mt-3 text-sm uppercase tracking-[0.15em] text-[#666]">
        Articles présentés
      </div>
    </div>

    <div className="p-8 md:p-10">
      <div className="text-5xl font-light text-black">
        3
      </div>

      <div className="mt-3 text-sm uppercase tracking-[0.15em] text-[#666]">
        Jours d'échanges
      </div>
    </div>

  </div>

  <div className="border-t border-[#ececec] p-8">
    <Link
      href="/previous-edition"
      className="inline-flex items-center gap-2 text-sm font-medium text-[#2F0461] hover:text-[#1B1142] transition-colors"
    >
      Explorer RIPU25 →
    </Link>
  </div>

</div>
        </div>
      </section>










{/* Testimonials Section */}
<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">
  <div className="px-8 lg:px-16">

    {/* Header */}
    <div className="mb-20">
      <div className="label-text mb-4">
        TÉMOIGNAGES
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Ce qu'ils retiennent de RIPU25
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        Des retours d'expérience de participants ayant contribué à faire
        de RIPU un espace d'échange, de réflexion et d'innovation pédagogique.
      </p>
    </div>

    {/* Testimonials */}
    <div className="border border-[#ececec]">

      <div className="grid lg:grid-cols-4">

        {/* Maher */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#ececec]">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            RIPU25 a su allier rigueur scientifique et échanges authentiques.
            Les sessions étaient soigneusement organisées et ont offert des
            approches pratiques que j&apos;ai immédiatement appliquées à mon
            enseignement.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
              src="/maher.jpg"
              alt="Maher Abdelli"
              width={48}
              height={48}
              className="object-cover"
            />

            <div>
              <p className="font-medium text-black">
                Maher Abdelli
              </p>

              <p className="text-sm text-[#666]">
                ISET Kairouan
              </p>
            </div>
          </div>
        </div>

        {/* Rym */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#ececec]">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            Un programme réfléchi : les ateliers étaient pratiques et les
            conférences ont offert des cadres clairs pour l&apos;IA éthique
            dans l&apos;évaluation. Une expérience enrichissante et utile.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
              src="/rym.jpg"
              alt="Rym Mallouli"
              width={48}
              height={48}
              className="object-cover"
            />

            <div>
              <p className="font-medium text-black">
                Rym Mallouli
              </p>

              <p className="text-sm text-[#666]">
                Université de Sousse
              </p>
            </div>
          </div>
        </div>

        {/* Fattouma */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#ececec]">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            Un rythme posé, intense en idées. Les conversations ont mûri
            en stratégies concrètes pour la pratique pédagogique dans un
            environnement professionnel et stimulant.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
              src="/fattouma.jpg"
              alt="Fattouma Mzali"
              width={48}
              height={48}
              className="object-cover"
            />

            <div>
              <p className="font-medium text-black">
                Fattouma Mzali
              </p>

              <p className="text-sm text-[#666]">
                ISET Rades
              </p>
            </div>
          </div>
        </div>

        {/* Syrine */}
        <div className="p-8">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            Une expérience marquante qui a permis de découvrir de nouvelles
            approches pédagogiques, d’échanger avec des collègues inspirants
            et de réfléchir à l’avenir de l’enseignement supérieur.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
              src="/syrine.jpg"
              alt="Syrine Bousetta"
              width={48}
              height={48}
              className="object-cover"
            />

            <div>
              <p className="font-medium text-black">
                Syrine Bousetta
              </p>

              <p className="text-sm text-[#666]">
                ISLM Monastir
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}
