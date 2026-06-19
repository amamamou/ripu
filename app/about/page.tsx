import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import TopicCard from '@/components/TopicCard';
import CommitteeCard from '@/components/CommitteeCard';
import {Navbar} from '@/components/Navbar'
import { Header } from '@/components/header';
import { BadgeCheck, BookOpen, BrainCircuit, ChevronRight, GraduationCap, Languages, Layers, Users } from 'lucide-react';

const topics = [
  { title: 'Tutoriel Intelligent avec l\'IA', description: 'Systèmes d\'apprentissage adaptatif utilisant l\'intelligence artificielle.', category: 'ai' as const },
  { title: 'Évaluation Automatisée', description: 'Utilisation de l\'IA pour l\'évaluation automatique.', category: 'ai' as const },
  { title: 'Apprentissage Adaptatif', description: 'Parcours d\'apprentissage personnalisés basés sur les données.', category: 'ai' as const },
  { title: 'Analyse Pédagogique', description: 'Analyse de données pour améliorer l\'enseignement.', category: 'ai' as const },
  { title: 'Apprentissage Actif', description: 'Méthodes engageant les étudiants activement.', category: 'pedagogy' as const },
  { title: 'Gamification Éducative', description: 'Intégration de mécaniques ludiques.', category: 'pedagogy' as const },
  { title: 'Apprentissage par Projet', description: 'Approches centrées sur des projets concrets.', category: 'pedagogy' as const },
  { title: 'Approches par Compétences', description: 'Développement d\'approches basées sur les compétences.', category: 'pedagogy' as const },
  { title: 'Genre et Diversité', description: 'Enjeux d\'équité et d\'inclusion.', category: 'inclusion' as const },
  { title: 'Vie Étudiante et Bien-être', description: 'Support du bien-être des étudiants.', category: 'inclusion' as const },
  { title: 'Innovation Curriculaire', description: 'Modernisation des cursus.', category: 'inclusion' as const },
  { title: 'Transformation Numérique', description: 'Intégration des technologies numériques.', category: 'inclusion' as const },
  { title: 'Accessibilité Pédagogique', description: 'Conception universelle et accessibilité.', category: 'inclusion' as const },
  { title: 'Apprentissage Hybride', description: 'Combinaison présentiel et distance.', category: 'inclusion' as const },
  { title: 'Leadership Académique', description: 'Leadership dans les institutions.', category: 'inclusion' as const },
];



export default function AboutPage() {
  return (
    <>
   <Navbar/>
  

      {/* About Section */}
{/* About Section */}

<section className="bg-white mt-20 py-24 md:py-32">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        À PROPOS
      </div>

      <h2 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-black">
        RIPU26
      </h2>

    </div>

    <div className="grid lg:grid-cols-12 gap-20 items-start">

      {/* Main Text */}

      <div className="lg:col-span-8">

        <p className="text-xl md:text-2xl leading-[1.8] text-[#666]">
          La Rencontre Internationale de la Pédagogie Universitaire
          rassemble chercheurs, enseignants et responsables académiques
          autour des transformations contemporaines de l’enseignement
          supérieur.
        </p>

        <p className="mt-8 text-xl md:text-2xl leading-[1.8] text-[#666]">
          Cette 2ème édition explore les mutations induites par
          l’intelligence artificielle générative, l’approche par
          compétences et les nouveaux modèles d’apprentissage dans un
          contexte d’innovation pédagogique et de transformation
          numérique.
        </p>

      </div>

  {/* Team */}

<div className="lg:col-span-4 lg:pt-28">

  <div>

    <div className="flex items-center">

      <Image
        src="/team/11.png"
        alt=""
        width={90}
        height={90}
        className="
          rounded-full
          object-cover
          border-4
          border-white
          z-30
        "
      />

      <Image
        src="/team/22.png"
        alt=""
        width={90}
        height={90}
        className="
          rounded-full
          object-cover
          border-4
          border-white
          -ml-6
          z-20
        "
      />

      <Image
        src="/team/33.png"
        alt=""
        width={90}
        height={90}
        className="
          rounded-full
          object-cover
          border-4
          border-white
          -ml-6
          z-10
        "
      />

      <div
        className="
          h-[90px]
          w-[90px]
          -ml-6
          rounded-full
          bg-[#2F0461]
          border-4
          border-white
          flex
          items-center
          justify-center
          text-white
          text-xl
          font-medium
        "
      >
        +18
      </div>

    </div>

    <div className="mt-8">

      <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
        ÉQUIPE RIPU26
      </p>

      <Link
        href="/committee"
        className="
          mt-2
          inline-flex
          items-center
          text-xl
          font-medium
          text-[#2F0461]
          hover:text-[#1B1142]
          transition-colors
        "
      >
        Voir le comité complet →
      </Link>

    </div>

  </div>

</div>

    </div>

  </div>

</section>
{/* Topics Section */}

<section
  id="topics"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>
  <div className="px-8 lg:px-16">

    {/* Header */}

    <div className="mb-20">

      <div className="label-text mb-4">
        THÉMATIQUES
      </div>

      <h2 className="max-w-5xl text-5xl md:text-7xl font-light leading-[0.95] tracking-tight text-black">
        Axes de la Communication
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-[#666]">
        RIPU26 accueille des contributions scientifiques, retours
        d'expérience et travaux de recherche portant sur les
        transformations contemporaines de l'enseignement supérieur,
        l'intelligence artificielle générative et les innovations
        pédagogiques.
      </p>

    </div>

    {/* Overview */}
{/* Overview */}

<div className="grid md:grid-cols-4 gap-5 mb-20">

  <div className="card-hover p-8">
    <div className="w-12 h-12 rounded-2xl bg-[#f6f6f6] flex items-center justify-center mb-5">
      <Layers className="w-5 h-5 text-black" />
    </div>

    <div className="text-5xl font-light text-black">
      3
    </div>

    <div className="mt-3 text-xs uppercase tracking-[0.15em] text-[#666]">
      Axes principaux
    </div>
  </div>

  <div className="card-hover p-8">
    <div className="w-12 h-12 rounded-2xl bg-[#f6f6f6] flex items-center justify-center mb-5">
      <BookOpen className="w-5 h-5 text-black" />
    </div>

    <div className="text-5xl font-light text-black">
      11+
    </div>

    <div className="mt-3 text-xs uppercase tracking-[0.15em] text-[#666]">
      Sous-thématiques
    </div>
  </div>

  <div className="card-hover p-8">
    <div className="w-12 h-12 rounded-2xl bg-[#f6f6f6] flex items-center justify-center mb-5">
      <Languages className="w-5 h-5 text-black" />
    </div>

    <div className="text-5xl font-light text-black">
      FR
    </div>

    <div className="mt-3 text-xs uppercase tracking-[0.15em] text-[#666]">
      Langue principale
    </div>
  </div>

  <div className="card-hover p-8">
    <div className="w-12 h-12 rounded-2xl bg-[#f6f6f6] flex items-center justify-center mb-5">
      <BadgeCheck className="w-5 h-5 text-black" />
    </div>

    <div className="text-5xl font-light text-black">
      PR
    </div>

    <div className="mt-3 text-xs uppercase tracking-[0.15em] text-[#666]">
      Peer Review
    </div>
  </div>

</div>

{/* Axes */}
<div className="space-y-6">
{/* Axe 01 */}


<div className="card-hover p-12 md:p-14">

  <div className="grid lg:grid-cols-12 gap-12">

    <div className="lg:col-span-4">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#f6f6f6] flex items-center justify-center">
          <BrainCircuit className="w-5 h-5 text-black" />
        </div>

        <span className="label-text">
          AXE 01
        </span>
      </div>

      <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-black">
        Intelligence Artificielle Générative & Enseignement
      </h3>

      <div className="flex flex-wrap gap-3 mt-8">

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          IA Générative
        </span>

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Enseignement
        </span>

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Innovation
        </span>

      </div>

    </div>

    <div className="lg:col-span-8">

      <div className="grid md:grid-cols-2 gap-x-14 gap-y-5">

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">L'IAG comme tuteur d'apprentissage</p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">L'IAG et le geste enseignant</p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">L'IAG pour la correction des examens</p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">Les effets de l'IAG sur les apprentissages</p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">L'IAG et la vie étudiante</p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">L'avenir de l'enseignement supérieur à l'ère de l'IAG</p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">Les plans d'études à l'heure de l'IAG</p>
        </div>

      </div>

    </div>

  </div>

</div>

{/* Axe 02 */}

<div className="card-hover p-12 md:p-14">

  <div className="grid lg:grid-cols-12 gap-12">

    <div className="lg:col-span-4">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#f6f6f6] flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-black" />
        </div>

        <span className="label-text">
          AXE 02
        </span>
      </div>

      <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-black">
        Approches Pédagogiques
      </h3>

      <div className="flex flex-wrap gap-3 mt-8">

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          APC
        </span>

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Pédagogie
        </span>

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Gamification
        </span>

      </div>

    </div>

    <div className="lg:col-span-8">

      <div className="space-y-5">

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">
            L'approche par compétences (APC)
          </p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">
            Les plans d'études à l'ère de l'IA et de l'APC
          </p>
        </div>

        <div className="flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
          <p className="text-[#666]">
            La gamification comme levier d'apprentissage
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

{/* Axe 03 */}

<div className="card-hover p-12 md:p-14">

  <div className="grid lg:grid-cols-12 gap-12">

    <div className="lg:col-span-4">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#f6f6f6] flex items-center justify-center">
          <Users className="w-5 h-5 text-black" />
        </div>

        <span className="label-text">
          AXE 03
        </span>
      </div>

      <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-black">
        Genre & Éducation
      </h3>

      <div className="flex flex-wrap gap-3 mt-8">

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Inclusion
        </span>

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Équité
        </span>

        <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-medium">
          Diversité
        </span>

      </div>

    </div>

    <div className="lg:col-span-8">

      <div className="flex items-start gap-3">
        <ChevronRight className="w-4 h-4 mt-1 text-[#999]" />
        <p className="text-[#666]">
          La place des femmes dans l'éducation
        </p>
      </div>

    </div>

  </div>

</div>

</div>
  </div>
</section>


      {/* Speakers Section */}
<section
  id="speakers"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>
  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        CONFÉRENCIERS
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Nos Conférenciers
      </h2>

    </div>

    <div className="card-hover  p-16 md:p-24 text-center">

      <p className="text-3xl md:text-4xl font-light text-black">
        Les conférenciers invités seront annoncés prochainement.
      </p>

      <p className="mt-6 max-w-2xl mx-auto text-[#666] leading-8">
      
        Les intervenants nationaux et internationaux seront dévoilés
        prochainement.
      </p>

    </div>

  </div>
</section>

    </>
  );
}
