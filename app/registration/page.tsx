import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export default function RegistrationPage() {
  return (
    <>    <Navbar/>
      <PageHero
        title="Inscription"
        subtitle="Rejoignez-nous à ICAISF 2026"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Inscription', href: '/registration' },
        ]}
      />

      {/* Registration Categories */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">TARIFS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Catégories d&apos;Inscription</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Étudiant',
                price: '150€',
                features: ['Accès aux sessions', 'Matériel de conférence', 'Déjeuners et pauses cafés'],
              },
              {
                title: 'Chercheur',
                price: '250€',
                features: ['Accès complet', 'Publications', 'Networking premium', 'Certificat'],
              },
              {
                title: 'Professionnel',
                price: '400€',
                features: ['Accès VIP', 'Networking exclusif', 'Materials', 'Meet & Greet'],
              },
              {
                title: 'Pass 1 Jour',
                price: '180€',
                features: ['Accès 1 jour', 'Repas du jour', 'Matériel restreint'],
              },
            ].map((cat, idx) => (
              <div key={idx} className="border border-[#e8e8e8] rounded-lg p-8 text-center hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-bold text-black mb-4">{cat.title}</h3>
                <div className="text-4xl font-bold text-[#2d9bb7] mb-6">{cat.price}</div>
                <ul className="space-y-3 text-sm text-[#666666] mb-8 text-left">
                  {cat.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#2d9bb7] rounded-full"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full">S&apos;inscrire</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">LOGISTIQUE</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Informations Pratiques</h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Hébergement</h3>
              <p className="text-lg text-[#666666] mb-4">
                ICAISF 2026 se déroule au Marriott Hotel Sousse, un établissement 5 étoiles situé en front de mer. Des tarifs spéciaux sont proposés pour les participants.
              </p>
              <ul className="space-y-2 text-lg text-[#666666]">
                <li>• Tarif conférence: 150€ la nuit (petit-déjeuner inclus)</li>
                <li>• Réservation avant le 31 août 2026</li>
                <li>• Code: ICAISF2026</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Transport et Accès</h3>
              <ul className="space-y-3 text-lg text-[#666666]">
                <li>• Aéroport International de Tunis-Carthage (60 km)</li>
                <li>• Transferts d&apos;aéroport disponibles (50€ AR)</li>
                <li>• Parking gratuit à l&apos;hôtel</li>
                <li>• Gare SNCM Sousse à proximité</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Visas et Formalités</h3>
              <p className="text-lg text-[#666666] mb-4">
                Les citoyens de l&apos;Union Européenne, des États-Unis, et de nombreux autres pays n&apos;ont pas besoin de visa pour entrer en Tunisie pour un séjour touristique de moins de 90 jours.
              </p>
              <p className="text-lg text-[#666666]">
                Une lettre d&apos;invitation officielle sera fournie aux participants internationaux sur demande.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Santé et Assurance</h3>
              <ul className="space-y-2 text-lg text-[#666666]">
                <li>• Assurance voyage recommandée</li>
                <li>• Vaccinations: consultez votre médecin</li>
                <li>• Centre médical 24/7 à Sousse</li>
                <li>• Pharmacies bien approvisionnées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">QUESTIONS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Questions Fréquemment Posées</h2>

          <div className="space-y-8">
            {[
              {
                q: 'Puis-je modifier mon type d\'inscription?',
                a: 'Oui, jusqu\'au 15 septembre 2026. Contactez-nous pour les modifications.',
              },
              {
                q: 'Y a-t-il un remboursement possible?',
                a: 'Annulation jusqu\'au 31 août 2026 avec remboursement complet. Après cette date, remboursement de 50%.',
              },
              {
                q: 'Puis-je assister en tant qu\'observateur?',
                a: 'Oui, un pass observateur est disponible pour 100€. Contactez contact@icaisf2026.org',
              },
              {
                q: 'Combien de participants sont attendus?',
                a: 'Nous attendons environ 500-600 participants du monde entier.',
              },
            ].map((item, idx) => (
              <div key={idx} className="pb-8 border-b border-[#e8e8e8] last:border-b-0">
                <h3 className="text-xl font-bold text-black mb-3">{item.q}</h3>
                <p className="text-lg text-[#666666]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
