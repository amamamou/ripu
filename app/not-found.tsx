import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100dvh-14rem)] flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <p className="text-7xl font-semibold tabular-nums tracking-tight text-[var(--grey-400)] md:text-8xl">
        404
      </p>
      <h1 className="mt-6 text-xl font-semibold tracking-tight text-[var(--brand)] md:text-2xl">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--grey-600)]">
        Cette adresse n&apos;existe pas ou n&apos;est plus disponible.
      </p>
      <Link
        href="/"
        className="link-arrow mt-10 inline-flex text-sm font-semibold text-[var(--brand)]"
      >
        Retour à l&apos;accueil
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      </Link>
    </main>
  )
}
