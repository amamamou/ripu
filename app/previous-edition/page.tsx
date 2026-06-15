import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PreviousEditionPage() {
  return (
    <>    <Navbar/>
      <PageHero
        title="RIPU25 - Édition Précédente"
        subtitle="Découvrez les points forts de la première édition de la conférence"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Édition Précédente', href: '/previous-edition' },
        ]}
      />

      {/* Statistics */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">IMPACTS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">RIPU25 en Chiffres</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '450+', label: 'Participants' },
              { number: '35', label: 'Pays' },
              { number: '120+', label: 'Articles' },
              { number: '3', label: 'Jours' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-[#2d9bb7] mb-4">{stat.number}</div>
                <p className="text-xl text-[#666666]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">GALERIE</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Moments Mémorables</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              '/ripu-gallery-1.png',
              '/ripu-gallery-2.png',
              '/ripu-gallery-3.png',
            ].map((img, idx) => (
              <div key={idx} className="relative w-full h-80 rounded-lg overflow-hidden bg-[#f9f9f9] group">
                <Image
                  src={img}
                  alt={`RIPU25 moment ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Moments */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">FAITS SAILLANTS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Moments Clés</h2>

          <div className="space-y-12">
            {[
              {
                title: 'Keynote d\'Ouverture',
                description: 'Prof. Ibrahim Hassan, MIT - "Le Futur de l\'Education Supérieure à l\'Ère de l\'IA"',
              },
              {
                title: 'Networking Gala',
                description: 'Soirée d\'accueil en front de mer avec 400+ participants de 35 pays',
              },
              {
                title: 'Ateliers Interactifs',
                description: '25 ateliers couvrant tous les axes thématiques avec discussions dynamiques',
              },
              {
                title: 'Cérémonie de Clôture',
                description: 'Remise des prix et annonce des lieux des futures éditions',
              },
            ].map((moment, idx) => (
              <div key={idx} className="pb-8 border-b border-[#e8e8e8] last:border-b-0">
                <h3 className="text-2xl font-bold text-black mb-3">{moment.title}</h3>
                <p className="text-lg text-[#666666]">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Archive */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">ARCHIVES</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">Ressources RIPU25</h2>

          <div className="bg-[#f9f9f9] border border-[#e8e8e8] rounded-lg p-12 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Programme Complet</h3>
              <p className="text-lg text-[#666666] mb-6">
                Consultez le programme détaillé de RIPU25 avec tous les sessions, keynotes et ateliers
              </p>
              <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70">
                Télécharger le programme →
              </a>
            </div>

            <div className="border-t border-[#e8e8e8] pt-6">
              <h3 className="text-2xl font-bold text-black mb-4">Actes et Proceedings</h3>
              <p className="text-lg text-[#666666] mb-6">
                Accédez à l&apos;indexe complète des articles présentés et publiés
              </p>
              <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70">
                Consulter les proceedings →
              </a>
            </div>

            <div className="border-t border-[#e8e8e8] pt-6">
              <h3 className="text-2xl font-bold text-black mb-4">Photos de Conférence</h3>
              <p className="text-lg text-[#666666] mb-6">
                Galerie complète de photos de RIPU25
              </p>
              <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70">
                Voir la galerie →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for ICAISF 2026 */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="label-text mb-4">ÉDITION SUIVANTE</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Rejoignez-nous à ICAISF 2026
          </h2>
          <p className="text-xl text-[#666666] mb-12">
            Basée sur le succès de RIPU25, l&apos;ICAISF 2026 promet une expérience encore plus enrichissante avec plus de 500 participants, 50 présentations et 40 pays représentés.
          </p>
          <Link href="/" className="btn-primary">
            Découvrir ICAISF 2026
          </Link>
        </div>
      </section>
    </>
  );
}
