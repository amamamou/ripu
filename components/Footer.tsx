"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#ececec] bg-white">
      <div className="px-8 lg:px-16  py-20">

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

{/* Left Brand */}
<div className="flex flex-col pt-16">

  <h2 className="text-6xl md:text-7xl font-black leading-none tracking-[-0.08em] text-[#0a0a0a]">
    RIPU26
  </h2>

  <div className="mt-5 flex items-center gap-5">

    <Link
      href="https://instagram.com"
      className="text-[#0a0a0a] transition-colors hover:text-[#2F0461]"
    >
      <FaInstagram size={18} />
    </Link>

    <Link
      href="https://facebook.com"
      className="text-[#0a0a0a] transition-colors hover:text-[#2F0461]"
    >
      <FaFacebookF size={18} />
    </Link>

    <Link
      href="https://linkedin.com"
      className="text-[#0a0a0a] transition-colors hover:text-[#2F0461]"
    >
      <FaLinkedinIn size={18} />
    </Link>

    <Link
      href="https://youtube.com"
      className="text-[#0a0a0a] transition-colors hover:text-[#2F0461]"
    >
      <FaYoutube size={18} />
    </Link>

  </div>

</div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Navigation
            </h4>

            <div className="space-y-3">

              <Link
                href="/"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Accueil
              </Link>

              <Link
                href="/about"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                À propos
              </Link>

              <Link
                href="/committee"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Comité scientifique
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Programme */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Programme
            </h4>

            <div className="space-y-3">

              <Link
                href="/authors"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Appel à communications
              </Link>

              <Link
                href="/topics"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Thématiques
              </Link>

              <Link
                href="/speakers"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Intervenants
              </Link>

              <Link
                href="/registration"
                className="block text-sm text-[#666] hover:text-[#2F0461]"
              >
                Inscription
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-[#666]">

              <p>contact@ripu26.org</p>

              <p>
                Sousse
                <br />
                Tunisie
              </p>

              <p>
                30–31 Octobre 2026
              </p>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-[#ececec] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[#666]">
            © 2026 RIPU26
          </p>

          <div className="flex gap-6">

            <Link
              href="/legal"
              className="text-xs text-[#666] hover:text-[#2F0461]"
            >
              Mentions légales
            </Link>

            <Link
              href="/privacy"
              className="text-xs text-[#666] hover:text-[#2F0461]"
            >
              Confidentialité
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}