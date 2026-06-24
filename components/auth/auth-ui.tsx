"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { AuthProvider } from "@/lib/auth-providers"
import { AuthProviderIcon } from "@/components/auth/auth-icons"

export function AuthFieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string
  children: ReactNode
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]"
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-[var(--brand)]" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  )
}

const fieldClass =
  "w-full rounded-xl bg-[var(--grey-50)] px-4 py-3.5 text-sm text-[var(--black)] outline-none transition-all placeholder:text-[var(--grey-400)] focus:bg-white focus:ring-2 focus:ring-[var(--brand-soft)]"

export function AuthTextInput({
  id,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  id: string
  type?: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      className={fieldClass}
    />
  )
}

export function AuthPasswordInput({
  id,
  placeholder = "••••••••",
  autoComplete,
  required,
}: {
  id: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
}) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative">
      <input
        id={id}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={cn(fieldClass, "pr-11")}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--grey-400)] hover:text-[var(--brand)]"
        aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
      >
        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}

export function AuthDivider({ label = "ou avec e-mail" }: { label?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-[var(--border)]" aria-hidden />
      <span className="text-xs font-medium text-[var(--grey-400)]">{label}</span>
      <div className="h-px flex-1 bg-[var(--border)]" aria-hidden />
    </div>
  )
}

export function SocialAuthButtons({ providers }: { providers: readonly AuthProvider[] }) {
  return (
    <div className="space-y-2.5">
      {providers.map((provider) => (
        <button
          key={provider.id}
          type="button"
          aria-label={provider.description}
          className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[var(--border)] bg-white py-3 text-sm font-semibold text-[var(--black)] transition-colors hover:bg-[var(--grey-50)]"
        >
          <AuthProviderIcon provider={provider.id} className="h-4 w-4" />
          {provider.label}
        </button>
      ))}
    </div>
  )
}

export function AuthSubmitButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className="btn-lime w-full justify-center">
      {children}
      <span className="btn-lime-icon">
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  )
}

export function AuthSwitchLink({
  prompt,
  href,
  label,
}: {
  prompt: string
  href: string
  label: string
}) {
  return (
    <p className="text-center text-sm text-[var(--grey-600)]">
      {prompt}{" "}
      <Link href={href} className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]">
        {label}
      </Link>
    </p>
  )
}

export function PasswordStrength({ level = 0 }: { level?: 0 | 1 | 2 | 3 | 4 }) {
  return (
    <div className="mt-2 flex gap-1">
      {[1, 2, 3, 4].map((step) => (
        <span
          key={step}
          className={cn(
            "h-0.5 flex-1 rounded-full",
            level >= step ? "bg-[var(--brand)]" : "bg-[var(--grey-100)]"
          )}
        />
      ))}
    </div>
  )
}
