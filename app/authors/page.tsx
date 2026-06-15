import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';

export default function AuthorsPage() {
  return (
    <>
        <Navbar/>
      <PageHero
        title="Pour les Auteurs"
        subtitle="Toutes les informations nécessaires pour soumettre votre contribution"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Pour les auteurs', href: '/authors' },
        ]}
      />

      {/* Important Dates */}
      <section id="dates" className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">CALENDRIER</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Dates Importantes</h2>

          <div className="space-y-8">
            {[
              { date: '15 Nov 2025', title: 'Ouverture de l\'appel à communications' },
              { date: '15 Fév 2026', title: 'Date limite de soumission des articles' },
              { date: '31 Mar 2026', title: 'Notification aux auteurs' },
              { date: '30 Avr 2026', title: 'Soumission des versions finales' },
              { date: '1-3 Oct 2026', title: 'Conférence ICAISF 2026' },
            ].map((item, idx) => (
              <div key={idx} className="pb-8 border-b border-[#e8e8e8] last:border-b-0">
                <div className="text-lg font-bold text-[#2d9bb7] mb-2">{item.date}</div>
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section id="guidelines" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">PROCESSUS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Directives de Soumission</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Format des Articles</h3>
              <p className="text-lg text-[#666666] leading-relaxed mb-4">
                Les articles doivent être soumis en format PDF et respecter les gabarits fournis. La longueur recommandée est de 6 à 8 pages incluant les références.
              </p>
              <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70">
                Télécharger le gabarit →
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Contenu Requis</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#666666]">
                <li>Titre clair et descriptif</li>
                <li>Résumé (200-300 mots)</li>
                <li>3-5 mots-clés pertinents</li>
                <li>Introduction, méthodologie, résultats et conclusion</li>
                <li>Références bibliographiques complètes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Catégories de Soumission</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#666666]">
                <li>Présentations orales (30 minutes)</li>
                <li>Communications en atelier (45 minutes)</li>
                <li>Posters scientifiques</li>
                <li>Démonstrations pratiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      <section id="call" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">APPEL À COMMUNICATIONS</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Thèmes Acceptés</h2>

          <div className="bg-[#f9f9f9] border border-[#e8e8e8] rounded-lg p-12 mb-12">
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Nous invitons les chercheurs et professionnels à soumettre des contributions originales sur les 15 axes thématiques de la conférence. Les articles peuvent être soumis en français ou en anglais.
            </p>
            <Link href="/" className="btn-primary">
              Découvrir les Axes Thématiques
            </Link>
          </div>

          <div className="text-center">
            <Link href="#" className="btn-primary text-center inline-block">
              Soumettre un Article
            </Link>
          </div>
        </div>
      </section>

      {/* Camera-Ready */}
      <section id="camera-ready" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">PUBLICATION</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Version Caméra-Ready</h2>

          <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
            <p>
              Les articles acceptés doivent être soumis en version caméra-ready avant la date limite du 30 avril 2026.
            </p>
            <p>
              Les actes de la conférence seront publiés en ligne et une sélection d&apos;articles sera proposée pour publication dans une revue scientifique indexée.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-black mb-6">Prérequis Techniques</h3>
            <ul className="space-y-3 text-lg text-[#666666]">
              <li>• Résolution minimale: 300 DPI pour les images</li>
              <li>• Format de couleur: CMJN pour impression</li>
              <li>• Police: Times New Roman ou Helvetica</li>
              <li>• Marges: 2,5 cm de tous les côtés</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Presentation Guidelines */}
      <section id="presentation" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">PRÉSENTATION</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Directives de Présentation</h2>

          <div className="bg-[#2d9bb7]/5 border-l-4 border-[#2d9bb7] p-8 mb-12">
            <h3 className="text-xl font-bold text-black mb-4">Informations Pratiques</h3>
            <ul className="space-y-3 text-lg text-[#666666]">
              <li>• Durée: 25 minutes présentation + 5 minutes questions</li>
              <li>• Équipement disponible: Projecteur, son, micro</li>
              <li>• Format recommandé: PowerPoint ou PDF</li>
              <li>• À apporter: Votre présentation sur clé USB</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Conseils de Présentation</h3>
            <ul className="space-y-3 text-lg text-[#666666]">
              <li>• Pratiquez votre présentation avant le jour J</li>
              <li>• Limitez le texte sur vos diapositives</li>
              <li>• Utilisez des visuels clairs et lisibles</li>
              <li>• Engagez votre public avec des exemples concrets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section id="review" className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">QUALITÉ</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Processus d&apos;Évaluation</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Critères d&apos;Évaluation</h3>
              <div className="space-y-4 text-lg text-[#666666]">
                <div className="pb-4 border-b border-[#e8e8e8]">
                  <p className="font-bold text-black mb-2">Originalité et Pertinence (30%)</p>
                  <p>L&apos;article présente-t-il des contributions nouvelles? Est-il pertinent pour la conférence?</p>
                </div>
                <div className="pb-4 border-b border-[#e8e8e8]">
                  <p className="font-bold text-black mb-2">Rigueur Méthodologique (30%)</p>
                  <p>La méthodologie est-elle appropriée et bien documentée?</p>
                </div>
                <div className="pb-4 border-b border-[#e8e8e8]">
                  <p className="font-bold text-black mb-2">Qualité de Présentation (20%)</p>
                  <p>L&apos;article est-il bien écrit et structuré?</p>
                </div>
                <div>
                  <p className="font-bold text-black mb-2">Impact Potentiel (20%)</p>
                  <p>Les résultats ont-ils une valeur pour la communauté?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Chronologie du Processus</h3>
              <ol className="list-decimal list-inside space-y-3 text-lg text-[#666666]">
                <li>Soumission de l&apos;article (avant 15 février 2026)</li>
                <li>Vérification initiale par le comité éditorial</li>
                <li>Évaluation par 2-3 experts externes</li>
                <li>Notification de la décision (31 mars 2026)</li>
                <li>Submission de la version finale (30 avril 2026)</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
