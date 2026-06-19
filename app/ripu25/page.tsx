
import {Navbar} from '@/components/Navbar'
import Image from "next/image";

const speakers = [
  {
    name: "Denis Gillet",
    role: "Président de Graasp.org",
    institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    image: "/team/22.png",
    bio: "Enseignant universitaire et président de Graasp.org, Denis Gillet dirige le groupe des systèmes d’interaction à l’EPFL. Il est également membre du comité pour l’éducation de l’IEEE et cofondateur du Swiss EdTech Collider.",
  },
  {
    name: "Sonia Sahli",
    role: "Experte en ingénierie pédagogique",
    institution: "ISET Sousse, Tunisie",
    image: "/team/11.png",
    bio: "Enseignante universitaire en informatique et experte en ingénierie pédagogique, Sonia Sahli est créatrice de SonyPlanner et spécialiste en UI/UX Design.",
  },
  {
    name: "Thierry Spriet",
    role: "Maître de conférences HC",
    institution: "Avignon Université, France",
    image: "/team/33.png",
    bio: "Expert en pédagogie universitaire et innovation numérique avec près de trente années d’expérience dans l’enseignement supérieur.",
  },
  {
    name: "Nawel Souissi",
    role: "Experte en accréditation internationale",
    institution: "PRISTINI School of AI",
    image: "/team/66.png",
    bio: "Docteure en électronique et spécialiste de l’assurance qualité dans l’enseignement supérieur, reconnue pour son expertise en intelligence artificielle.",
  },
];

const conferences = [
  {
    day: "Jour 1",
    time: "14:00",
    duration: "60 min",
    room: "Salle A",
    title: "Impacts de l'IA générative sur les apprentissages",
    speaker: "Thierry Spriet",
    description:
      "Exploration des impacts de l’intelligence artificielle sur l’éducation et l’avenir des formations universitaires.",
  },
  {
    day: "Jour 1",
    time: "15:00",
    duration: "60 min",
    room: "Salle C",
    title: "L'intelligence artificielle pour les métiers de demain",
    speaker: "Nawel Souissi",
    description:
      "Exploration du rôle croissant de l’IA dans le monde professionnel de demain.",
  },
  {
    day: "Jour 2",
    time: "11:00",
    duration: "60 min",
    room: "Salle A",
    title:
      "Ressources éducatives ouvertes et intelligentes pour le renforcement des compétences transversales",
    speaker: "Denis Gillet",
    description:
      "Présentation des ressources éducatives innovantes intégrant l’intelligence artificielle.",
  },
];

const workshops = [
  {
    day: "Jour 1",
    time: "16:15",
    duration: "45 min",
    room: "Salle B",
    title: "IA Générative pour la Préparation des Examens",
    speaker: "Sonia Sahli",
    description:
      "Partage d’expériences sur le développement d’outils innovants pour enseignants intégrant les dernières avancées en IA générative.",
  },
  {
    day: "Jour 2",
    time: "10:00",
    duration: "45 min",
    room: "Salle A",
    title: "L'IAG comme assistant d'apprentissage",
    speaker: "Thierry Spriet",
    description:
      "Méthodologie pour engager les étudiants vers un usage responsable des IA génératives.",
  },
  {
    day: "Jour 2",
    time: "11:00",
    duration: "45 min",
    room: "Salle C",
    title: "Collaboration Humain-IA pour le Design Thinking",
    speaker: "Denis Gillet",
    description:
      "Exploration du rôle de l’IA générative dans les processus créatifs et l’idéation collaborative.",
  },
];
export default function RIPU25Page() { return ( <>
        <Navbar/>

<section className="bg-white  mt-10 pt-32 pb-24">

  <div className="px-8 lg:px-16">

  <div className="mb-10">
  <span
    className="
      inline-flex
      items-center
      rounded-full
      border
      border-[#ececec]
      bg-white
      px-4
      py-2
      text-xs
      font-medium
      uppercase
      tracking-[0.15em]
      text-[#666]
      transition-all
      duration-300
      hover:border-[#2F0461]
    "
  >
    Édition Archivée • 2025
  </span>
</div>

    <div className="grid lg:grid-cols-12 gap-20 items-center">

      <div className="lg:col-span-7">

        <div className="label-text mb-6">
          RENCONTRE INTERNATIONALE DE LA PÉDAGOGIE UNIVERSITAIRE
        </div>

        <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.9] text-black">
          RIPU25
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-[#666]">
          L’enseignement universitaire à l’ère de l’intelligence artificielle
          et de la recherche appliquée.
        </p>

      </div>

      <div className="lg:col-span-5">

        <Image
          src="/ripu.jpg"
          alt="RIPU25"
          width={900}
          height={1200}
          className="w-full border border-[#ececec]"
        />

      </div>

    </div>

  </div>

</section>


{/* SPEAKERS */}

<section className="bg-white py-24 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        INTERVENANTS
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        Conférenciers invités
      </h2>

    </div>

    <div className="space-y-24">

      {speakers.map((speaker, idx) => (

        <div
          key={speaker.name}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >

          <div className="lg:col-span-3">

            <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5]">

              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          <div className="lg:col-span-9">

            <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
              {speaker.institution}
            </div>

            <h3 className="mt-4 text-4xl md:text-5xl font-light text-black">
              {speaker.name}
            </h3>

            <p className="mt-4 text-xl text-[#666]">
              {speaker.role}
            </p>

            <p className="mt-8 text-lg leading-9 text-[#666] max-w-4xl">
              {speaker.bio}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


{/* CONFERENCES */}
<section className="bg-white py-24 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        PROGRAMME
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        Conférences
      </h2>

    </div>

    <div className="card-hover overflow-hidden">

      {conferences.map((item, idx) => (

        <div
          key={idx}
          className="
            grid
            md:grid-cols-12
            border-b
            last:border-b-0
            border-[#ececec]
          "
        >

          <div className="md:col-span-3 p-8 border-r border-[#ececec]">

            <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
              {item.day}
            </div>

            <div className="mt-3 text-3xl font-light">
              {item.time}
            </div>

            <div className="mt-2 text-[#666]">
              {item.duration}
            </div>

            <div className="mt-2 text-[#666]">
              {item.room}
            </div>

          </div>

          <div className="md:col-span-9 p-8">

            <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
              Conférence
            </div>

            <h3 className="mt-4 text-3xl font-light text-black">
              {item.title}
            </h3>

            <p className="mt-4 text-lg text-[#666]">
              {item.speaker}
            </p>

            <p className="mt-6 text-[#666] leading-8">
              {item.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


{/* WORKSHOPS */}
<section className="bg-white py-24 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        ATELIERS
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        Workshops
      </h2>

    </div>

    <div className="card-hover overflow-hidden">

      {workshops.map((item, idx) => (

        <div
          key={idx}
          className="
            grid
            md:grid-cols-12
            border-b
            last:border-b-0
            border-[#ececec]
          "
        >

          <div className="md:col-span-3 p-8 border-r border-[#ececec]">

            <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
              {item.day}
            </div>

            <div className="mt-3 text-3xl font-light">
              {item.time}
            </div>

            <div className="mt-2 text-[#666]">
              {item.duration}
            </div>

            <div className="mt-2 text-[#666]">
              {item.room}
            </div>

          </div>

          <div className="md:col-span-9 p-8">

            <div className="text-xs uppercase tracking-[0.2em] text-[#999]">
              Workshop
            </div>

            <h3 className="mt-4 text-3xl font-light text-black">
              {item.title}
            </h3>

            <p className="mt-4 text-lg text-[#666]">
              {item.speaker}
            </p>

            <p className="mt-6 text-[#666] leading-8">
              {item.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* GALLERY */}

<section className="bg-white py-24 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        GALERIE
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        RIPU25 en images
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        Retour sur les moments marquants de la première édition :
        conférences, ateliers, échanges scientifiques et rencontres
        entre chercheurs et enseignants.
      </p>

    </div>

    <div className="grid lg:grid-cols-12 gap-6">

      {/* Main Image */}

      <div className="lg:col-span-8">

        <div className="card-hover">

          <div className="relative h-[520px] overflow-hidden">

            <Image
              src="/ripu/2.png"
              alt="RIPU25"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>

      {/* Secondary Images */}

      <div className="lg:col-span-4 flex flex-col gap-6">

        <div className="card-hover">

          <div className="relative h-[160px] overflow-hidden">

            <Image
              src="/ripu/1.png"
              alt="RIPU25"
              fill
              className="
                object-cover object-top
                transition-transform
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

        <div className="card-hover">

          <div className="relative h-[160px] overflow-hidden">

            <Image
              src="/ripu/3.png"
              alt="RIPU25"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

        <div className="card-hover">

          <div className="relative h-[160px] overflow-hidden">

            <Image
              src="/ripu/p8.jpg"
              alt="RIPU25"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ARCHIVE */}

<section className="bg-white py-24 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="max-w-5xl">

      <div className="label-text mb-4">
        ARCHIVES
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[0.95] text-black">
        Une édition marquante de RIPU
      </h2>

      <p className="mt-10 max-w-4xl text-xl leading-10 text-[#666]">
        RIPU25 restera une édition marquante de la Rencontre
        Internationale de la Pédagogie Universitaire. Organisée au
        Marriott Resort & Spa de Sousse, elle a permis de réunir des
        experts internationaux autour des enjeux de l’intelligence
        artificielle, de l’innovation pédagogique et de l’avenir de
        l’enseignement supérieur.
      </p>

      <div className="mt-16 border-l-2 border-[#2F0461] pl-8">

        <div className="text-sm uppercase tracking-[0.2em] text-[#999]">
          30–31 Mai 2025
        </div>

        <div className="mt-3 text-3xl font-light text-black">
          Marriott Resort & Spa Sousse
        </div>

      </div>

    </div>

  </div>

</section>
 </>
  );
}
