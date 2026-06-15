'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
        <Navbar/>
      <PageHero
        title="Nous Contacter"
        subtitle="Des questions? Contactez-nous, nous sommes ici pour vous aider"
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Information */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="label-text mb-4">INFORMATIONS</div>
            <h2 className="text-4xl font-bold text-black mb-12">Coordonnées</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Adresse Postale</h3>
                <p className="text-lg text-[#666666] leading-relaxed">
                  ICAISF 2026<br />
                  Université de Sousse<br />
                  Avenue de la Corniche<br />
                  4000 Sousse, Tunisie
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Téléphone</h3>
                <p className="text-lg text-[#666666]">
                  <a href="tel:+21673246000" className="hover:text-[#2d9bb7] transition-smooth">
                    +216 73 246 000
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Email</h3>
                <p className="text-lg text-[#666666]">
                  <a href="mailto:contact@icaisf2026.org" className="hover:text-[#2d9bb7] transition-smooth">
                    contact@icaisf2026.org
                  </a>
                </p>
                <p className="text-sm text-[#999999] mt-2">Soumissions: submissions@icaisf2026.org</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Horaires</h3>
                <p className="text-lg text-[#666666]">
                  Lundi - Vendredi: 9h - 17h<br />
                  Samedi - Dimanche: Fermé
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Réseaux Sociaux</h3>
                <div className="space-y-2">
                  <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70 block">
                    Twitter / X
                  </a>
                  <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70 block">
                    LinkedIn
                  </a>
                  <a href="#" className="text-[#2d9bb7] font-medium hover:opacity-70 block">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="label-text mb-4">FORMULAIRE</div>
            <h2 className="text-4xl font-bold text-black mb-12">Envoyez-nous un Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Nom</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:border-[#2d9bb7] transition-smooth"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:border-[#2d9bb7] transition-smooth"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Sujet</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:border-[#2d9bb7] transition-smooth"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="submission">Soumission d&apos;article</option>
                  <option value="registration">Inscription</option>
                  <option value="sponsorship">Sponsoring</option>
                  <option value="general">Demande générale</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-[#e8e8e8] rounded-lg focus:outline-none focus:border-[#2d9bb7] transition-smooth resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Envoyer le Message
              </button>
            </form>

            <p className="text-sm text-[#999999] mt-6 text-center">
              Nous répondrons à votre message dans les 24 heures
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="label-text mb-4">LOCALISATION</div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">Où Nous Trouver</h2>

          <div className="w-full h-96 md:h-screen bg-[#f9f9f9] rounded-lg border border-[#e8e8e8] flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-black mb-4">Marriott Hotel Sousse</p>
              <p className="text-lg text-[#666666]">Avenue de la Corniche • 4000 Sousse • Tunisie</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#2d9bb7] font-medium hover:opacity-70 mt-6 inline-block">
                Voir sur Google Maps →
              </a>
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
                q: 'Comment soumettre un article?',
                a: 'Consultez la page "Pour les auteurs" pour tous les détails sur le processus de soumission et les directives.',
              },
              {
                q: 'Quand reçois-je la confirmation d\'inscription?',
                a: 'Une confirmation par email est envoyée immédiatement après votre inscription.',
              },
              {
                q: 'Puis-je discuter de sponsoring?',
                a: 'Oui, contactez-nous via le formulaire avec "Sponsoring" comme sujet pour discuter des opportunités.',
              },
              {
                q: 'Y a-t-il un support technique avant la conférence?',
                a: 'Oui, équipe technique disponible. Contactez-nous pour toute assistance.',
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
