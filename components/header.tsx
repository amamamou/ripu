
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const items = [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'À propos',
      href: '/about',
    },
    {
      label: 'Auteurs',
      href: '/authors',
    },
    {
      label: 'Thématiques',
      href: '/themes',
    },
    {
      label: 'Comité',
      href: '/committee',
    },
    {
      label: 'RIPU25',
      href: '/ripu25',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-6">

      <div className="max-w-8xl mx-auto">

        <div
          className={`
            flex items-center justify-between
            rounded-3xl
            px-8
            py-4
            transition-all duration-500
            ${
              scrolled
                ? 'bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]'
                : 'bg-transparent shadow-none'
            }
          `}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="RIPU26"
              width={52}
              height={52}
              className="object-contain"
            />

            <div>
              <div className="font-extrabold text-black text-xl">
                RIPU26
              </div>

              <div className="text-xs text-black/60">
                Sousse · 30–31 Octobre 2026
              </div>
            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-8">

            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-[15px]
                  font-medium
                  text-black
                  hover:text-[#2F0461]
                  transition-colors
                "
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* CTA */}
          <Link
            href="/authors"
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              px-5
              py-3
              text-sm
              font-semibold
              text-black
              transition-colors
              hover:text-[#2F0461]
            "
          >
            Soumettre

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

      </div>

    </header>
  )
}
