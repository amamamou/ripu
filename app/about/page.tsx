import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import TopicCard from '@/components/TopicCard';
import CommitteeCard from '@/components/CommitteeCard';
import Navbar from '@/components/Navbar'

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

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Directrice de l\'Innovation Éducative',
    institution: 'Université Stanford',
    country: 'États-Unis',
    imageUrl: '/committee-default.png',
  },
  {
    name: 'Prof. Mohamed Bouarab',
    title: 'Doyen de la Recherche',
    institution: 'Université de Sousse',
    country: 'Tunisie',
    imageUrl: '/committee-default.png',
  },
  {
    name: 'Dr. Emma Schmidt',
    title: 'Directrice IA et Systèmes d\'Apprentissage',
    institution: 'Université d\'Oxford',
    country: 'Royaume-Uni',
    imageUrl: '/committee-default.png',
  },
];

export default function AboutPage() {
  return (
    <>
    <Navbar/>
      <PageHero
        title="À Propos de l'ICAISF"
        subtitle="Découvrez une conférence pionnière réunissant les experts en intelligence artificielle et innovation pédagogique"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/about' },
        ]}
      />

      {/* About Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">La Conférence ICAISF</h2>
          <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
            <p>
              L&apos;ICAISF 2026 est la conférence internationale majeure regroupant chercheurs, éducateurs et professionnels de l&apos;industrie pour explorer l&apos;intersection entre l&apos;intelligence artificielle, les systèmes d&apos;information et l&apos;innovation pédagogique.
            </p>
            <p>
              Organisée à Sousse, en Tunisie, en octobre 2026, la conférence offre une plateforme unique pour discuter des transformations technologiques dans l&apos;enseignement supérieur et l&apos;apprentissage tout au long de la vie.
            </p>
            <p>
              Nous accueillons les contributions de chercheurs du monde entier, couvrant 15 axes thématiques majeurs répartis en trois catégories : l&apos;IA en éducation, les approches pédagogiques innovantes, et les enjeux d&apos;accessibilité et d&apos;inclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="label-text mb-4">THÉMATIQUES</div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">Tous les Axes de la Communication</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, idx) => (
              <TopicCard key={idx} title={topic.title} description={topic.description} category={topic.category} />
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="label-text mb-4">CONFÉRENCIERS</div>
            <h2 className="text-5xl md:text-6xl font-bold text-black">Nos Conférenciers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {speakers.map((speaker, idx) => (
              <CommitteeCard
                key={idx}
                name={speaker.name}
                title={speaker.title}
                institution={speaker.institution}
                country={speaker.country}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Committee Preview */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="label-text mb-4">ORGANISATION</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">Comité d&apos;Organisation</h2>
          <p className="text-xl text-[#666666] mb-12 leading-relaxed">
            L&apos;ICAISF est organisée par un comité international d&apos;experts et d&apos;académiciens reconnus dans leurs domaines respectifs.
          </p>
          <Link href="/committee" className="btn-primary">
            Voir le Comité Complet
          </Link>
        </div>
      </section>
    </>
  );
}
