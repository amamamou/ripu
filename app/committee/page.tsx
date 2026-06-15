import PageHero from '@/components/PageHero';
import CommitteeCard from '@/components/CommitteeCard';
import Navbar from '@/components/Navbar';

const committeeMembers = [
  { name: 'Prof. Ahmed Zahra', title: 'Président', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
  { name: 'Dr. Fatima El-Ghazi', title: 'Vice-Présidente', institution: 'Université Hassan II', country: 'Maroc', imageUrl: '/committee-default.png' },
  { name: 'Prof. Jean-Paul Dupont', title: 'Trésorier', institution: 'Université de Paris', country: 'France', imageUrl: '/committee-default.png' },
  { name: 'Dr. Maria Santos', title: 'Secrétaire Générale', institution: 'Université de Lisbonne', country: 'Portugal', imageUrl: '/committee-default.png' },
];

const scientificCommittee = [
  { name: 'Prof. James Patterson', title: 'Président du Comité', institution: 'MIT', country: 'États-Unis', imageUrl: '/committee-default.png' },
  { name: 'Dr. Sophia Mueller', title: 'Membre', institution: 'ETH Zurich', country: 'Suisse', imageUrl: '/committee-default.png' },
  { name: 'Prof. Chen Wei', title: 'Membre', institution: 'Tsinghua University', country: 'Chine', imageUrl: '/committee-default.png' },
  { name: 'Dr. Priya Sharma', title: 'Membre', institution: 'IIT Delhi', country: 'Inde', imageUrl: '/committee-default.png' },
  { name: 'Prof. Klaus Wagner', title: 'Membre', institution: 'Université de Berlin', country: 'Allemagne', imageUrl: '/committee-default.png' },
  { name: 'Dr. Yuki Tanaka', title: 'Membre', institution: 'Université de Tokyo', country: 'Japon', imageUrl: '/committee-default.png' },
];

const organizingCommittee = [
  { name: 'Dr. Farah Ben Ali', title: 'Directrice d\'Exécution', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
  { name: 'Mr. Mohamed Safar', title: 'Responsable Logistique', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
  { name: 'Ms. Leila Khoudi', title: 'Responsable Marketing', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
  { name: 'Mr. Karim Dhaoui', title: 'Responsable IT', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
  { name: 'Ms. Amira Bouhassira', title: 'Coordinatrice Académique', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
  { name: 'Mr. Rashid Al-Makki', title: 'Responsable Sponsoring', institution: 'Université de Sousse', country: 'Tunisie', imageUrl: '/committee-default.png' },
];

const programCommittee = [
  { name: 'Prof. Michael Johnson', title: 'Président', institution: 'Stanford University', country: 'États-Unis', imageUrl: '/committee-default.png' },
  { name: 'Dr. Isabelle Lebrun', title: 'Membre', institution: 'Université de Lyon', country: 'France', imageUrl: '/committee-default.png' },
  { name: 'Prof. Carlos Rodriguez', title: 'Membre', institution: 'Université de Madrid', country: 'Espagne', imageUrl: '/committee-default.png' },
  { name: 'Dr. Anita Kumar', title: 'Membre', institution: 'University of Delhi', country: 'Inde', imageUrl: '/committee-default.png' },
  { name: 'Prof. Yoko Nakamura', title: 'Membre', institution: 'Université de Kyoto', country: 'Japon', imageUrl: '/committee-default.png' },
  { name: 'Dr. Anna Wagner', title: 'Membre', institution: 'Université de Vienne', country: 'Autriche', imageUrl: '/committee-default.png' },
  { name: 'Prof. Abdelmajid Ouazzani', title: 'Membre', institution: 'Université de Fez', country: 'Maroc', imageUrl: '/committee-default.png' },
  { name: 'Dr. Nour Al-Rashid', title: 'Membre', institution: 'Université du Caire', country: 'Égypte', imageUrl: '/committee-default.png' },
];

const technicalCommittee = [
  { name: 'Prof. Robert Turner', title: 'Président', institution: 'MIT Media Lab', country: 'États-Unis', imageUrl: '/committee-default.png' },
  { name: 'Dr. Hanne Larsen', title: 'Membre', institution: 'Technical University of Denmark', country: 'Danemark', imageUrl: '/committee-default.png' },
  { name: 'Prof. Stefan Müller', title: 'Membre', institution: 'Technical University of Munich', country: 'Allemagne', imageUrl: '/committee-default.png' },
  { name: 'Dr. Li Wei', title: 'Membre', institution: 'Harbin Institute of Technology', country: 'Chine', imageUrl: '/committee-default.png' },
];

const internationalAdvisory = [
  { name: 'Prof. UNESCO Expert', title: 'Expert en Éducation', institution: 'UNESCO', country: 'International', imageUrl: '/committee-default.png' },
  { name: 'Dr. World Bank Advisor', title: 'Consultant en Innovation', institution: 'Banque Mondiale', country: 'International', imageUrl: '/committee-default.png' },
  { name: 'Prof. OECD Representative', title: 'Représentant Éducation', institution: 'OCDE', country: 'International', imageUrl: '/committee-default.png' },
  { name: 'Dr. European Commission', title: 'Coordinateur Horizon', institution: 'Commission Européenne', country: 'International', imageUrl: '/committee-default.png' },
  { name: 'Prof. Arab League', title: 'Conseiller Académique', institution: 'Ligue Arabe', country: 'International', imageUrl: '/committee-default.png' },
  { name: 'Dr. African Union', title: 'Expert en Innovation', institution: 'Union Africaine', country: 'International', imageUrl: '/committee-default.png' },
];

export default function CommitteePage() {
  return (
    <>
        <Navbar/>
      <PageHero
        title="Comité d'Organisation"
        subtitle="Découvrez les experts internationaux organisant la conférence"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Comité', href: '/committee' },
        ]}
      />

      {/* Presidents */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">DIRECTION</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Présidents et Bureau</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {committeeMembers.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Committee */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">EXPERTISE</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Comité Scientifique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {scientificCommittee.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">EXÉCUTION</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Comité d&apos;Organisation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {organizingCommittee.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Committee */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">PROGRAMME</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Comité de Programme</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {programCommittee.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Committee */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">TECHNOLOGIE</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Comité Technique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {technicalCommittee.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* International Advisory */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">CONSEIL</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Conseil Consultatif International</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {internationalAdvisory.map((member, idx) => (
              <CommitteeCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
