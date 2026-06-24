"use client"

import { usePathname } from "next/navigation"
import Footer from "@/components/Footer"

const AUTH_PATHS = ["/connexion", "/inscription"]

export function ConditionalFooter() {
  const pathname = usePathname()
  const hideChrome = AUTH_PATHS.some((path) => pathname?.startsWith(path))

  if (hideChrome) return null
  return <Footer />
}
