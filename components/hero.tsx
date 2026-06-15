"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
return ( <section className="relative min-h-screen overflow-hidden">
{/* Background Image */}
<div
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
backgroundImage: `url('/hero/1.png')`,
}}
> <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" /> </div>



  {/* Hero Content */}
  <div className="relative z-10 flex min-h-[130vh] flex-col items-center justify-center px-8 text-center">

    <p className="mb-4 text-sm text-white/80">
      30–31 Octobre 2026
    </p>

    <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
      RIPU
      <br />
      26
    </h1>

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
