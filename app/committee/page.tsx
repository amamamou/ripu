import PageHero from '@/components/PageHero';
import CommitteeCard from '@/components/CommitteeCard';
import {Navbar} from '@/components/Navbar'
import Image from 'next/image';

const generalChairs = [
  {
    name: "Sonia Sahli",
    title: "General Chair",
    institution: "ISET Sousse",
    country: "Tunisie",
    imageUrl: "/team/11.png",
  },
  {
    name: "Denis Gillet",
    title: "General Chair",
    institution: "EPFL",
    country: "Suisse",
    imageUrl: "/team/22.png",
  },
  {
    name: "Thierry Spriet",
    title: "General Chair",
    institution: "Avignon Université",
    country: "France",
    imageUrl: "/team/33.png",
  },
];

const scientificCommittee = [
  {
    name: "Rym Mamlouk Mallouli",
    title: "Membre",
    institution: "Institut des Beaux-Arts de Sousse",
    country: "Tunisie",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Hounaida Haddaji",
    title: "Membre",
    institution: "ISET Nabeul",
    country: "Tunisie",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Dalel Kanzari",
    title: "Membre",
    institution: "ISSAT Sousse",
    country: "Tunisie",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Marwa Ben Ali",
    title: "Membre",
    institution: "Université Libre de Bolzano",
    country: "Italie",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Christophe Mathieu",
    title: "Membre",
    institution: "Aix-Marseille Université",
    country: "France",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Bertrand Mocquet",
    title: "Membre",
    institution: "MICA - Université Bordeaux Montaigne",
    country: "France",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Nicolas Thorel",
    title: "Membre",
    institution: "Université Technologique de Troyes",
    country: "France",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Sandy Ingram",
    title: "Membre",
    institution: "HEIA Fribourg",
    country: "Suisse",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Eric Tanguy",
    title: "Membre",
    institution: "Nantes Université",
    country: "France",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Jean François",
    title: "Membre",
    institution: "Université de Genève",
    country: "Suisse",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Emmanuelle Hajj",
    title: "Membre",
    institution: "USF",
    country: "Liban",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Marianne Dubé",
    title: "Membre",
    institution: "Université de Sherbrooke",
    country: "Canada",
    imageUrl: "/committee-default.png",
  },
];

const organizingCommittee = [
  {
    name: "Maram Amamou",
    title: "Coordination",
    institution: "Université de Sousse",
    country: "Tunisie",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Ahmed Ksontini",
    title: "Coordination",
    institution: "ISET Sousse",
    country: "Tunisie",
    imageUrl: "/committee-default.png",
  },
  {
    name: "Amal Karaoud",
    title: "Coordination",
    institution: "Université de Sfax",
    country: "Tunisie",
    imageUrl: "/committee-default.png",
  },
];


export default function CommitteePage() {
  return (
    <>
        <Navbar/>


{/* General Chairs */}

<section className="bg-white  mt-20  py-24 md:py-32 ">

  <div className="px-8 lg:px-16">

    {/* Header */}

    <div className="mb-24">

      <div className="label-text mb-4">
        DIRECTION
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        General Chairs
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        La direction scientifique et stratégique de RIPU26 est assurée
        par des experts internationaux reconnus pour leurs contributions
        à l’innovation pédagogique et à l’enseignement supérieur.
      </p>

    </div>

    {/* Chairs */}

    <div className="grid md:grid-cols-3 gap-10">

      {/* Sonia */}

      <div className="group">

        <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5]">

          <Image
            src="/team/11.png"
            alt="Sonia Sahli"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

        </div>

        <div className="mt-8">

          <h3 className="text-2xl font-medium text-black">
            Sonia Sahli
          </h3>

          <p className="mt-3 text-[#666]">
            ISET Sousse
          </p>

          <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#999]">
            Tunisie
          </p>

        </div>

      </div>

      {/* Denis */}

      <div className="group">

        <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5]">

          <Image
            src="/team/22.png"
            alt="Denis Gillet"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

        </div>

        <div className="mt-8">

          <h3 className="text-2xl font-medium text-black">
            Denis Gillet
          </h3>

          <p className="mt-3 text-[#666]">
            EPFL
          </p>

          <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#999]">
            Suisse
          </p>

        </div>

      </div>

      {/* Thierry */}

      <div className="group">

        <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5]">

          <Image
            src="/team/33.png"
            alt="Thierry Spriet"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

        </div>

        <div className="mt-8">

          <h3 className="text-2xl font-medium text-black">
            Thierry Spriet
          </h3>

          <p className="mt-3 text-[#666]">
            Avignon Université
          </p>

          <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#999]">
            France
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        EXPERTISE
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        Comité Scientifique
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-[#ececec]">

      {scientificCommittee.map((member) => (

        <div
          key={member.name}
          className="p-8 border-b border-r border-[#ececec]"
        >

          <h3 className="text-xl font-medium text-black">
            {member.name}
          </h3>

          <p className="mt-3 text-[#666] leading-7">
            {member.institution}
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#999]">
            {member.country}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        ORGANISATION
      </div>

      <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        Comité d'Organisation
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {organizingCommittee.map((member) => (

        <div
          key={member.name}
          className="border border-[#ececec] p-8"
        >

          <h3 className="text-xl font-medium text-black">
            {member.name}
          </h3>

          <p className="mt-3 text-[#666]">
            {member.institution}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

     
    </>
  );
}
