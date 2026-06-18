import Link from 'next/link';
import PageHero from '@/components/PageHero';
import {Navbar} from '@/components/Navbar'
import {
  FileText,
  FileCode2,
  Braces,

} from "lucide-react";
import { FaFileWord } from "react-icons/fa";
import { Download, ExternalLink } from "lucide-react";
export default function AuthorsPage() {
  return (
    <>
        <Navbar/>


      {/* Important Dates */}
<section
  id="dates"
  className="bg-white py-20 md:py-28 mt-20"
>
  <div className="max-w-7xl mx-auto px-6 md:px-8">

    {/* Header */}
    <div className="mb-16 md:mb-20">
      <p className="label-text mb-6 md:mb-8">
        CALENDRIER
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6 md:mb-8">
        Dates importantes
      </h2>

      <p className="max-w-2xl text-base md:text-lg text-gray-600 leading-8">
        Les principales échéances de RIPU26.
      </p>
    </div>

    {/* Timeline */}
    <div className="space-y-4 md:space-y-6">
      {[
        { date: "15 Juillet 2026", event: "Date limite de soumission" },
        { date: "10 Août 2026", event: "Notification aux auteurs" },
        { date: "01 Septembre 2026", event: "Date limite d'inscription" },
        { date: "30 Octobre 2026", event: "Ouverture de RIPU26" },
        { date: "31 Octobre 2026", event: "Clôture de RIPU26" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-gray-50/80 via-white to-gray-50/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-2">
              Échéance
            </p>
            <p className="text-xl md:text-2xl font-semibold text-black">
              {item.date}
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600">
            {item.event}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>



<section id="guidelines" className="bg-white py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="mb-16 md:mb-20">
      <p className="label-text mb-6 md:mb-8">
        SOUMISSION
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6 md:mb-8">
        Directives de soumission
      </h2>

      <p className="max-w-3xl text-base md:text-lg text-gray-600 leading-8">
        Toutes les informations nécessaires à la préparation et au dépôt de votre communication.
      </p>
    </div>

    {/* Guidelines Grid */}
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
      {[
        {
          title: "Type de contribution",
          content: "Retour d'expérience ou Work in Progress aligné avec les axes scientifiques de RIPU26.",
        },
        {
          title: "Longueur",
          content: "2 à 4 pages, incluant figures, tableaux et références.",
        },
        {
          title: "Langues",
          content: "Les communications peuvent être soumises en français ou en anglais.",
        },
        {
          title: "Template",
          content: "Utilisation obligatoire du modèle Springer LNCS (Word ou LaTeX).",
        },
        {
          title: "Soumission anonyme",
          content: "La version soumise pour évaluation ne doit contenir aucun nom d'auteur ou affiliation.",
        },
        {
          title: "Version finale",
          content: "La version acceptée devra inclure les auteurs, affiliations et coordonnées du correspondant.",
        },
        {
          title: "Choisir un axe",
          content: "Chaque communication doit être rattachée à un axe thématique de RIPU26.",
        },
        {
          title: "Plateforme de dépôt",
          content: "Les soumissions sont réalisées via ConfTool®. Les métadonnées renseignées doivent être exactes.",
        },
      ].map((item, idx) => (
        <div key={idx} className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-300">
          <h4 className="font-semibold text-lg text-black mb-3">
            {item.title}
          </h4>
          <p className="text-sm md:text-base text-gray-600 leading-7">
            {item.content}
          </p>
        </div>
      ))}
    </div>

    {/* Download Templates */}
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      <Link
        href="/paper/MSWord.zip"
        download
        className="group p-7 md:p-8 rounded-2xl border border-gray-200/50 hover:border-[#2F0461] hover:shadow-md transition-all duration-300 bg-white"
      >
        <div className="flex items-start justify-between mb-4">
          <FileText size={28} className="text-[#2F0461]" />
          <Download size={18} className="text-gray-400 group-hover:text-[#2F0461] transition-colors" />
        </div>
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-2">
          Télécharger
        </p>
        <p className="text-lg font-semibold text-black">
          Template Word
        </p>
      </Link>

      <Link
        href="/paper/LaTeX2e.zip"
        download
        className="group p-7 md:p-8 rounded-2xl border border-gray-200/50 hover:border-[#2F0461] hover:shadow-md transition-all duration-300 bg-white"
      >
        <div className="flex items-start justify-between mb-4">
          <FileCode2 size={28} className="text-[#2F0461]" />
          <Download size={18} className="text-gray-400 group-hover:text-[#2F0461] transition-colors" />
        </div>
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-2">
          Télécharger
        </p>
        <p className="text-lg font-semibold text-black">
          Template LaTeX
        </p>
      </Link>

      <Link
        href="https://your-conftool-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-7 md:p-8 rounded-2xl border border-gray-200/50 hover:border-[#2F0461] hover:shadow-md transition-all duration-300 bg-white"
      >
        <div className="flex items-start justify-between mb-4">
          <ExternalLink size={28} className="text-[#2F0461]" />
          <ExternalLink size={18} className="text-gray-400 group-hover:text-[#2F0461] transition-colors" />
        </div>
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-2">
          Soumission
        </p>
        <p className="text-lg font-semibold text-black">
          Accéder à ConfTool®
        </p>
      </Link>
    </div>
  </div>
</section>

      {/* Call for Papers */}
 <section
  id="call"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>

  <div className="px-8 lg:px-16">

    <div className="border border-[#ececec]">

      <div className="grid lg:grid-cols-12">

        {/* Left */}

        <div
          className="
            lg:col-span-7
            p-12
            md:p-16
            border-b
            lg:border-b-0
            lg:border-r
            border-[#ececec]
          "
        >

          <div className="label-text mb-4">
            APPEL À COMMUNICATIONS
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
            Call for Papers
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            RIPU26 invite les chercheurs, enseignants,
            praticiens et responsables académiques à soumettre
            leurs travaux autour de l’intelligence artificielle,
            de l’innovation pédagogique et de l’enseignement supérieur.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            Les communications doivent être rattachées à l’un
            des axes thématiques du colloque et respecter les
            directives de soumission.
          </p>

        </div>

        {/* Right */}

        <div
          className="
            lg:col-span-5
            p-12
            md:p-16
            flex
            flex-col
            justify-center
          "
        >

          <div className="text-sm uppercase tracking-[0.2em] text-[#999]">
            Document officiel
          </div>

          <div className="mt-4 text-3xl font-light text-black">
            PDF · Appel à communications RIPU26
          </div>

          <p className="mt-6 text-[#666] leading-8">
            Consultez les thématiques, les modalités de
            participation et les informations destinées aux auteurs.
          </p>

          <div className="mt-10">

            <Link
              href="/documents/CFP-RIPU26.pdf"
              target="_blank"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                bg-[#2F0461]
                text-white
                hover:bg-[#24034D]
                transition-colors
              "
            >
              Télécharger le PDF
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>



<section
  id="presentation"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>

  <div className="px-8 lg:px-16">


<div className="mb-20">

  <div className="label-text mb-4">
    PRÉSENTATION
  </div>

  <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
    Directives de présentation
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
    Informations pratiques pour préparer votre intervention
    et assurer le bon déroulement des sessions scientifiques.
  </p>

</div>

{/* Main Stats */}

<div className="grid md:grid-cols-4 border border-[#ececec]">

  <div className="p-8 border-r border-[#ececec]">

    <div className="text-6xl font-light text-black">
      25
    </div>

    <p className="mt-3 text-[#666]">
      Minutes de présentation
    </p>

  </div>

  <div className="p-8 border-r border-[#ececec]">

    <div className="text-6xl font-light text-black">
      5
    </div>

    <p className="mt-3 text-[#666]">
      Minutes de discussion
    </p>

  </div>

  <div className="p-8 border-r border-[#ececec]">

    <div className="text-6xl font-light text-black">
      PDF
    </div>

    <p className="mt-3 text-[#666]">
      ou PowerPoint
    </p>

  </div>

  <div className="p-8">

    <div className="text-6xl font-light text-black">
      AV
    </div>

    <p className="mt-3 text-[#666]">
      Équipement fourni
    </p>

  </div>

</div>

{/* Guidelines */}

<div className="mt-16 border border-[#ececec]">

  <div className="grid md:grid-cols-12 border-b border-[#ececec]">

    <div className="md:col-span-4 p-8 border-r border-[#ececec]">
      <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
        Support
      </div>
    </div>

    <div className="md:col-span-8 p-8 text-[#666] leading-8">
      Les présentations peuvent être réalisées à l'aide
      d'un fichier PDF ou PowerPoint.
    </div>

  </div>

  <div className="grid md:grid-cols-12 border-b border-[#ececec]">

    <div className="md:col-span-4 p-8 border-r border-[#ececec]">
      <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
        Équipement
      </div>
    </div>

    <div className="md:col-span-8 p-8 text-[#666] leading-8">
      Vidéoprojecteur, écran, système audio et connexion
      internet seront disponibles dans toutes les salles.
    </div>

  </div>

  <div className="grid md:grid-cols-12 border-b border-[#ececec]">

    <div className="md:col-span-4 p-8 border-r border-[#ececec]">
      <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
        Préparation
      </div>
    </div>

    <div className="md:col-span-8 p-8 text-[#666] leading-8">
      Testez votre présentation avant votre session et
      prévoyez une copie de sauvegarde sur clé USB.
    </div>

  </div>

  <div className="grid md:grid-cols-12 border-b border-[#ececec]">

    <div className="md:col-span-4 p-8 border-r border-[#ececec]">
      <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
        Qualité visuelle
      </div>
    </div>

    <div className="md:col-span-8 p-8 text-[#666] leading-8">
      Privilégiez des diapositives synthétiques, lisibles
      et visuellement épurées afin de favoriser les échanges.
    </div>

  </div>

  <div className="grid md:grid-cols-12">

    <div className="md:col-span-4 p-8 border-r border-[#ececec]">
      <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
        Interaction
      </div>
    </div>

    <div className="md:col-span-8 p-8 text-[#666] leading-8">
      Chaque communication est suivie d'une période de
      questions et d'échanges avec les participants.
    </div>

  </div>

</div>


  </div>

</section>


<section
  id="review"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>

  <div className="px-8 lg:px-16">


<div className="mb-20">

  <div className="label-text mb-4">
    ÉVALUATION
  </div>

  <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
    Processus d'évaluation
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-[#666]">
    Chaque proposition est examinée par le comité scientifique
    selon un processus de relecture académique garantissant
    la qualité et la pertinence des contributions retenues.
  </p>

</div>

{/* Process */}

<div className="grid lg:grid-cols-4 border border-[#ececec]">

  <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#ececec]">

    <div className="text-6xl font-light text-[#2F0461]">
      01
    </div>

    <h3 className="mt-6 text-2xl font-light text-black">
      Soumission
    </h3>

    <p className="mt-4 text-[#666] leading-8">
      Dépôt de la communication via la plateforme officielle
      avant la date limite.
    </p>

  </div>

  <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#ececec]">

    <div className="text-6xl font-light text-[#2F0461]">
      02
    </div>

    <h3 className="mt-6 text-2xl font-light text-black">
      Expertise
    </h3>

    <p className="mt-4 text-[#666] leading-8">
      Évaluation en double aveugle par les membres
      du comité scientifique.
    </p>

  </div>

  <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#ececec]">

    <div className="text-6xl font-light text-[#2F0461]">
      03
    </div>

    <h3 className="mt-6 text-2xl font-light text-black">
      Décision
    </h3>

    <p className="mt-4 text-[#666] leading-8">
      Notification d'acceptation, de révision
      ou de refus aux auteurs.
    </p>

  </div>

  <div className="p-10">

    <div className="text-6xl font-light text-[#2F0461]">
      04
    </div>

    <h3 className="mt-6 text-2xl font-light text-black">
      Publication
    </h3>

    <p className="mt-4 text-[#666] leading-8">
      Intégration des versions finales dans les actes
      et présentation lors du colloque.
    </p>

  </div>

</div>

{/* Principles */}

<div className="mt-16 max-w-4xl">

  <div className="label-text mb-6">
    PRINCIPES
  </div>

  <div className="flex flex-wrap gap-3">

    <div className="border border-[#ececec] px-5 py-3 text-[#666]">
      Double aveugle
    </div>

    <div className="border border-[#ececec] px-5 py-3 text-[#666]">
      Originalité
    </div>

    <div className="border border-[#ececec] px-5 py-3 text-[#666]">
      Rigueur scientifique
    </div>

    <div className="border border-[#ececec] px-5 py-3 text-[#666]">
      Pertinence thématique
    </div>

    <div className="border border-[#ececec] px-5 py-3 text-[#666]">
      Qualité rédactionnelle
    </div>

  </div>

</div>


  </div>

</section>
<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="max-w-5xl">

      <div className="label-text mb-4">
        PROCHAINE ÉTAPE
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black leading-[0.95]">
        Soumettre une contribution à RIPU26
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
        Les soumissions sont ouvertes aux chercheurs,
        enseignants, doctorants et praticiens souhaitant
        partager leurs travaux et retours d'expérience.
      </p>

      <div className="mt-16 flex flex-col md:flex-row md:items-center gap-10">

        <Link
          href="#"
          className="
            text-2xl
            md:text-3xl
            font-light
            text-[#2F0461]
            hover:text-[#1B1142]
            transition-colors
          "
        >
          Accéder à ConfTool® →
        </Link>

        <Link
          href="/documents/CFP-RIPU26.pdf"
          target="_blank"
          className="
            text-lg
            text-[#666]
            hover:text-black
            transition-colors
          "
        >
          Télécharger l'appel à communications
        </Link>

      </div>

    </div>

  </div>

</section>
    </>
  );
}
