'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const items = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Auteurs', href: '/authors' },
    { label: 'Thématiques', href: '/themes' },
    { label: 'Comité', href: '/committee' },
    { label: 'RIPU25', href: '/ripu25' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-5">
      <div className="max-w-7xl mx-auto">
        <div
          className={`
            flex items-center justify-between
            rounded-2xl
            px-6 md:px-8
            py-3.5 md:py-4
            transition-all duration-500 ease-out
            ${
              scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-white/50'
                : 'bg-white shadow-lg'
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="RIPU26"
              width={48}
              height={48}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />

            <div>
              <div className="text-lg md:text-xl font-bold transition-colors duration-500 text-black">
                RIPU26
              </div>

              <div className="text-xs transition-colors duration-500 font-medium text-black/50">
                Sousse 2026
              </div>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  px-3.5 py-2
                  rounded-lg
                  transition-all
                  duration-300
                  text-black/70 hover:text-black hover:bg-black/5
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/authors"
            className={`
              group
              flex
              items-center
              gap-2
              rounded-xl
              px-5 md:px-6
              py-2.5 md:py-3
              text-sm
              font-semibold
              transition-all
              duration-300
              flex-shrink-0
              bg-black text-white hover:bg-[#2F0461] shadow-md hover:shadow-lg
            `}
          >
            <span>Soumettre</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

