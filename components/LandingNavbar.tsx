"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<nav
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${scrolled ? "bg-white border-b border-[#ececec]" : "bg-transparent"}
  `}
  style={{
    borderBottomColor: scrolled ? "#ececec" : "transparent",
  }}
>
      <div className="flex items-center justify-between px-8 py-6 lg:px-16">

        {/* Left */}
        <Link href="/" className="flex items-center gap-2">

          <Image
            src="/logo Ripu26 - 1.png"
            alt="RIPU26"
            width={140}
            height={45}
            className="h-10 w-auto"
            priority
          />

          <span
            className={`
              ml-2
              rounded-full
              px-3
              py-1
              text-xs
              transition-all
              ${
                scrolled
                  ? "bg-[#f5f5f5] text-black"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }
            `}
          >
            30–31 Octobre 2026
          </span>

        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className={`text-sm transition ${
              scrolled
                ? "text-black hover:opacity-60"
                : "text-white hover:opacity-80"
            }`}
          >
            Accueil
          </Link>

          {/* À propos */}
          <div className="relative group">

            <button
              className={`flex items-center gap-1 text-sm transition ${
                scrolled
                  ? "text-black hover:opacity-60"
                  : "text-white hover:opacity-80"
              }`}
            >
              À propos
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute left-0 top-full invisible mt-4 w-72 border border-[#ececec] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

              <Link
                href="/about"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                À propos de RIPU
              </Link>

              <Link
                href="/about#topics"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Axes de la communication
              </Link>

              <Link
                href="/speakers"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Nos conférenciers
              </Link>

              <Link
                href="/committee"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Comité d'organisation
              </Link>

            </div>

          </div>

          {/* Auteurs */}
          <div className="relative group">

            <button
              className={`flex items-center gap-1 text-sm transition ${
                scrolled
                  ? "text-black hover:opacity-60"
                  : "text-white hover:opacity-80"
              }`}
            >
              Auteurs
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute left-0 top-full invisible mt-4 w-80 border border-[#ececec] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

              <Link
                href="/authors#dates"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Dates importantes
              </Link>

              <Link
                href="/authors#guidelines"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Directives de soumission
              </Link>

              <Link
                href="/authors#call"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Appel à communications
              </Link>

              <Link
                href="/authors#camera-ready"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Version finale
              </Link>

              <Link
                href="/authors#presentation"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Directives de présentation
              </Link>

              <Link
                href="/authors#review"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Processus d'évaluation
              </Link>

            </div>

          </div>

          <Link
            href="/ripu25"
            className={`text-sm transition ${
              scrolled
                ? "text-black hover:opacity-60"
                : "text-white hover:opacity-80"
            }`}
          >
            RIPU25
          </Link>

          <Link
            href="/contact"
            className={`text-sm transition ${
              scrolled
                ? "text-black hover:opacity-60"
                : "text-white hover:opacity-80"
            }`}
          >
            Contact
          </Link>

        </div>

        {/* Right Button */}
        <Link
          href="/registration"
          className={`
            rounded-full
            px-6
            py-3
            text-sm
            transition-all
            ${
              scrolled
                ? "bg-[#f5f5f5] text-black hover:bg-[#ececec]"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            }
          `}
        >
          Soumettre une communication
        </Link>

      </div>
    </nav>
  );
}