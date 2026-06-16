import Navbar from '@/components/Navbar';
import Image from 'next/image';

const generalChairs = [
  { name: "Sonia Sahli", title: "General Chair", institution: "ISET Sousse", country: "Tunisia", imageUrl: "/team/11.png" },
  { name: "Denis Gillet", title: "General Chair", institution: "EPFL", country: "Switzerland", imageUrl: "/team/22.png" },
  { name: "Thierry Spriet", title: "General Chair", institution: "Avignon Université", country: "France", imageUrl: "/team/33.png" },
];

const scientificCommittee = [
  { name: "Rym Mamlouk Mallouli", institution: "Institut des Beaux-Arts de Sousse", country: "Tunisia", imageUrl: "/committee-default.png" },
  { name: "Hounaida Haddaji", institution: "ISET Nabeul", country: "Tunisia", imageUrl: "/committee-default.png" },
  { name: "Dalel Kanzari", institution: "ISSAT Sousse", country: "Tunisia", imageUrl: "/committee-default.png" },
  { name: "Marwa Ben Ali", institution: "Università Libera di Bolzano", country: "Italy", imageUrl: "/committee-default.png" },
  { name: "Christophe Mathieu", institution: "Aix-Marseille Université", country: "France", imageUrl: "/committee-default.png" },
  { name: "Bertrand Mocquet", institution: "MICA - Université Bordeaux Montaigne", country: "France", imageUrl: "/committee-default.png" },
  { name: "Nicolas Thorel", institution: "Université Technologique de Troyes", country: "France", imageUrl: "/committee-default.png" },
  { name: "Sandy Ingram", institution: "HEIA Fribourg", country: "Switzerland", imageUrl: "/committee-default.png" },
  { name: "Eric Tanguy", institution: "Nantes Université", country: "France", imageUrl: "/committee-default.png" },
  { name: "Jean François", institution: "Université de Genève", country: "Switzerland", imageUrl: "/committee-default.png" },
  { name: "Emmanuelle Hajj", institution: "USF", country: "Lebanon", imageUrl: "/committee-default.png" },
  { name: "Marianne Dubé", institution: "Université de Sherbrooke", country: "Canada", imageUrl: "/committee-default.png" },
];

const organizingCommittee = [
  { name: "Maram Amamou", title: "Coordination", institution: "Université de Sousse", country: "Tunisia", imageUrl: "/committee-default.png" },
  { name: "Ahmed Ksontini", title: "Coordination", institution: "ISET Sousse", country: "Tunisia", imageUrl: "/committee-default.png" },
  { name: "Amal Karaoud", title: "Coordination", institution: "Université de Sfax", country: "Tunisia", imageUrl: "/committee-default.png" },
];

export default function CommitteePage() {
  return (
    <>
      <Navbar />
      
      {/* ============================================================ */}
      {/* SECTION 1: Header - Simple Typography */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="label-text mb-4">LEADERSHIP</div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Conference Leadership
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-secondary leading-8">
              RIPU26 is guided by an international committee of academic leaders and researchers dedicated to advancing higher education innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: General Chairs - Portrait Grid */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">GENERAL CHAIRS</div>
            <h2 className="text-4xl font-bold text-primary">
              Conference Chairs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {generalChairs.map((chair, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
                  <Image
                    src={chair.imageUrl}
                    alt={chair.name}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-1">
                  {chair.name}
                </h3>
                <p className="text-sm text-secondary mb-3 uppercase tracking-wider">
                  {chair.title}
                </p>
                <p className="text-sm text-secondary">
                  {chair.institution}
                </p>
                <p className="text-xs text-secondary mt-1">
                  {chair.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Scientific Committee - Portrait Grid */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">SCIENTIFIC COMMITTEE</div>
            <h2 className="text-4xl font-bold text-primary">
              Academic Advisors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
            {scientificCommittee.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-primary text-base mb-2">
                  {member.name}
                </h3>
                <p className="text-xs text-secondary mb-2">
                  {member.institution}
                </p>
                <p className="text-xs text-secondary">
                  {member.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Organizing Committee */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">ORGANIZING COMMITTEE</div>
            <h2 className="text-4xl font-bold text-primary">
              Local Coordination
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {organizingCommittee.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-secondary mb-3 uppercase tracking-wider">
                  {member.title}
                </p>
                <p className="text-sm text-secondary">
                  {member.institution}
                </p>
                <p className="text-xs text-secondary mt-1">
                  {member.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
