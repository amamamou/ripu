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
     

    <section className="bg-white py-24 md:py-32">

  <div className="px-8 lg:px-16">

    <div className="mb-20">

      <div className="label-text mb-4">
        CONTACT
      </div>

      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black">
        Nous contacter
      </h1>

    </div>

    <div className="grid lg:grid-cols-12 gap-20">

      {/* Left */}

      <div className="lg:col-span-4">

        <div className="space-y-12">

          <div>

            <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Contact général
            </div>

            <a
              href="mailto:contact@ripu26.org"
              className="text-2xl font-light text-black hover:text-[#2F0461] transition-colors"
            >
              contact@ripu26.org
            </a>

          </div>

          <div>

            <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Soumissions
            </div>

            <a
              href="mailto:submissions@ripu26.org"
              className="text-2xl font-light text-black hover:text-[#2F0461] transition-colors"
            >
              submissions@ripu26.org
            </a>

          </div>

          <div>

            <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Lieu
            </div>

            <p className="text-lg text-[#666] leading-8">
              Marriott Hotel Sousse
              <br />
              Avenue de la Corniche
              <br />
              Sousse, Tunisie
            </p>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="lg:col-span-8">

        <form
          onSubmit={handleSubmit}
          className="border border-[#ececec]"
        >

          <div className="grid md:grid-cols-2">

            <input
              type="text"
              placeholder="Nom complet"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="
                border-b
                md:border-r
                border-[#ececec]
                p-6
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="
                border-b
                border-[#ececec]
                p-6
                outline-none
              "
            />

          </div>

          <select
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="
              w-full
              p-6
              border-b
              border-[#ececec]
              outline-none
            "
          >
            <option value="">
              Sélectionner un sujet
            </option>

            <option value="submission">
              Soumission
            </option>

            <option value="registration">
              Inscription
            </option>

            <option value="sponsorship">
              Partenariat
            </option>

          </select>

          <textarea
            rows={8}
            placeholder="Votre message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="
              w-full
              p-6
              outline-none
              resize-none
            "
          />

          <div className="border-t border-[#ececec] p-6">

            <button
              type="submit"
              className="
                text-[#2F0461]
                text-xl
                font-light
                hover:text-[#1B1142]
                transition-colors
              "
            >
              Envoyer le message →
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>

</section>
      {/* Map Section */}
  


    </>
  );
}
