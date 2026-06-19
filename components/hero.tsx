"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const eventDate = new Date('2026-10-30T00:00:00').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero/1.png')`,
          filter: 'blur(2px)',
          transform: 'scale(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[130vh] flex-col items-center justify-center px-8 text-center">
      
       
        {/* Optional: Show event date below timer */}
        <p className="mb-4 text-sm text-white/60">
          30–31 Octobre 2026
        </p>

        <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          RIPU
          <br />
          26
        </h1>
         <div className="mb-4 flex items-center gap-4 text-white/80">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white md:text-3xl">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase">Jours</span>
          </div>
          <span className="text-2xl font-bold text-white/50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white md:text-3xl">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase">Heures</span>
          </div>
          <span className="text-2xl font-bold text-white/50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white md:text-3xl">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase">Min</span>
          </div>
          <span className="text-2xl font-bold text-white/50">:</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white md:text-3xl">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase">Sec</span>
          </div>
        </div>


        <Button
          variant="outline"
          className="rounded-full border-white/30 bg-olive-dark px-8 py-6 text-white hover:bg-olive-dark/90"
        >
          Appel à Communications
        </Button>

        {/* Stats */}
        <div className="mt-16 flex items-center gap-3">
          <span className="text-4xl font-bold text-white">
            2e
          </span>
          <span className="max-w-32 text-left text-sm text-white/70">
            édition de la Rencontre Internationale de la Pédagogie Universitaire
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}