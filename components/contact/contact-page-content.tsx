"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Send, CheckCircle, AlertCircle, Info } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"

const contactEmail = {
  label: "Contact général",
  description: "Programme, inscription, organisation et informations pratiques.",
  href: "mailto:ripusousse@gmail.com",
  value: "ripusousse@gmail.com",
} as const

const subjects = [
  { value: "submission", label: "Soumission" },
  { value: "registration", label: "Inscription" },
  { value: "sponsorship", label: "Partenariat" },
  { value: "general", label: "Autre" },
] as const

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]"
    >
      {children}
    </label>
  )
}

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | 'info' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.subject) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez sélectionner un sujet'
      })
      return
    }

    if (!formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez écrire votre message'
      })
      return
    }

    if (!formData.email) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez entrer votre adresse email'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message')
      }

      setSubmitStatus({
        type: 'success',
        message: ' Votre message a été envoyé avec succès ! Un email de confirmation vous a été envoyé.'
      })
      
      // Réinitialiser le formulaire
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : '❌ Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass =
    "w-full rounded-xl bg-[var(--grey-50)] px-4 py-3.5 text-sm text-[var(--black)] outline-none transition-all placeholder:text-[var(--grey-400)] focus:bg-white focus:ring-2 focus:ring-[var(--brand-soft)]"

  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      {/* Hero */}
      <section className="section-block pb-6 md:pb-10">
        <div className="container-main">
          <div className="max-w-2xl">
            <Reveal>
              <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">Contact</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="t-section mt-4 text-[var(--black)]">Nous contacter</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                RIPU26 · Sousse, Tunisie · 30–31 octobre 2026
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 t-body text-[var(--grey-600)]">
                Une question sur le programme, une soumission ou l&apos;inscription ? Écrivez-nous
                directement ou utilisez le formulaire ci-dessous — notre équipe vous répondra
                rapidement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main panel */}
      <section className="section-block section-white !pt-0">
        <div className="container-main">
          <Reveal delay={0.08}>
            <div className="floating-panel overflow-hidden">
              <div className="grid lg:grid-cols-[minmax(280px,360px)_1fr]">
                {/* Sidebar */}
                <aside className="border-b border-[var(--border)] bg-[var(--grey-50)] p-7 md:p-9 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                    Nous écrire
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                    Contacts directs
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--grey-600)]">
                    Préférez l&apos;e-mail ? Choisissez l&apos;adresse adaptée à votre demande.
                  </p>

                  <div className="mt-8">
                    <a
                      href={contactEmail.href}
                      className="group block rounded-[var(--radius-xl)] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)] transition-colors group-hover:bg-[var(--brand)] group-hover:text-white">
                          <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[var(--black)]">{contactEmail.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--grey-600)]">
                            {contactEmail.description}
                          </p>
                          <span className="link-arrow mt-3 inline-flex text-sm font-semibold text-[var(--brand)]">
                            {contactEmail.value}
                            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 rounded-[var(--radius-xl)] border border-[var(--border)] bg-white/60 px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]">
                      Guide des auteurs
                    </p>
                    <Link
                      href="/authors"
                      className="link-arrow mt-2 inline-flex text-sm font-semibold text-[var(--black)]"
                    >
                      Consulter les modalités de soumission
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </Link>
                  </div>
                </aside>

                {/* Form */}
                <div className="p-7 md:p-9 lg:p-10 xl:p-12">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                      <Send className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                        Formulaire
                      </p>
                      <h2 className="mt-0.5 text-lg font-semibold tracking-tight text-[var(--black)]">
                        Envoyer un message
                      </h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <FieldLabel htmlFor="name">Nom complet</FieldLabel>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="email">Adresse e-mail</FieldLabel>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="vous@exemple.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <FieldLabel htmlFor="subject">Sujet</FieldLabel>
                      <div
                        className="pill-tab-bar w-full flex-wrap justify-start"
                        role="group"
                        aria-label="Sujet du message"
                      >
                        {subjects.map((item) => (
                          <button
                            key={item.value}
                            type="button"
                            data-active={formData.subject === item.value}
                            onClick={() => setFormData({ ...formData, subject: item.value })}
                            className="pill-tab-item"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        placeholder="Décrivez votre demande..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={cn(fieldClass, "resize-none")}
                      />
                    </div>

                    {submitStatus.type && (
                      <div className={cn(
                        "flex items-start gap-3 rounded-xl p-4 text-sm",
                        submitStatus.type === 'success' && "bg-green-50 text-green-800 border border-green-200",
                        submitStatus.type === 'error' && "bg-red-50 text-red-800 border border-red-200",
                        submitStatus.type === 'info' && "bg-blue-50 text-blue-800 border border-blue-200"
                      )}>
                        {submitStatus.type === 'success' && (
                          <CheckCircle className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                        )}
                        {submitStatus.type === 'error' && (
                          <AlertCircle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                        )}
                        {submitStatus.type === 'info' && (
                          <Info className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium">{submitStatus.message}</p>
                          {submitStatus.type === 'success' && (
                            <p className="mt-1 text-xs text-green-700">
                             Un email de confirmation vous a été envoyé à {formData.email || 'votre adresse'}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs text-[var(--grey-400)]">
                           Réponse habituelle sous 48 h ouvrées
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={!formData.subject || isSubmitting}
                        className="btn-lime w-full justify-center disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-pulse">⏳ Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <span className="btn-lime-icon">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}