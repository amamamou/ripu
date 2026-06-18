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
import { PhilosophySection } from '@/components/theme';
import { ImportantDatesSection } from '@/components/important-dates-section';
import { TestimonialsSectione } from '@/components/testmt';
import { Header } from '@/components/header';

const testimonials = [
  {
    quote:
      "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions étaient soigneusement organisées et ont offert des approches pratiques que j’ai immédiatement appliquées à mon enseignement.",
    name: "Maher Abdelli",
    institution: "ISET Kairouan",
    image: "/maher.png",
  },
  {
    quote:
      "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l’IA éthique dans l’évaluation.",
    name: "Rym Mallouli",
    institution: "Université de Sousse",
    image: "/rym.png",
  },
  {
    quote:
      "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies pour la pratique, dans une atmosphère professionnelle et stimulante.",
    name: "Fattouma Mzali",
    institution: "ISET Rades",
    image: "/fattouma.png",
  },
  {
    quote:
      "Une expérience enrichissante qui a permis de croiser des perspectives variées sur l’innovation pédagogique et les transformations de l’enseignement supérieur.",
    name: "Syrine Bousetta",
    institution: "ISLM Monastir",
    image: "/syrine.png",
  },
]

export default function HomePage() {
  return (
    <>
<Header/>
      {/* Hero Section */}
  <Hero/>
  <AboutSection/>
  <ImportantDatesSection/>
  <PhilosophySection/>

  {/* RIPU25 Section */}
  <section className="bg-white px-6 md:px-8 py-20 md:py-28">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
        <p className="label-text mb-6 md:mb-8">
          ÉDITION PRÉCÉDENTE
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 md:mb-8">
          RIPU25
        </h2>

        <p className="text-base md:text-lg text-gray-600 leading-8">
          Retour sur une édition marquée par des échanges riches, des conférences inspirantes et des réflexions innovantes autour de l'enseignement supérieur.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-12">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl h-[500px] md:h-[620px] group">
            <Image
              src="/ripu.jpg"
              alt="RIPU25"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
          <div className="relative overflow-hidden rounded-2xl h-80 md:h-96 group col-span-1">
            <Image
              src="/ripu/1.png"
              alt="RIPU25 moment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="relative overflow-hidden rounded-2xl h-80 md:h-96 group col-span-1">
            <Image
              src="/ripu/2.png"
              alt="RIPU25 moment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="relative overflow-hidden rounded-2xl h-80 md:h-96 group col-span-2">
            <Image
              src="/ripu/3.png"
              alt="RIPU25 moment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <TestimonialsSectione/>


    </>
  );
}
