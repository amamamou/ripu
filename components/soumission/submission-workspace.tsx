"use client"

import Link from "next/link"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useSubmissionWorkspace } from "@/components/soumission/use-submission-workspace"
import {
  DraftRestoredBanner,
  ResetSubmissionDialog,
  RestartSubmissionButton,
  SaveIndicator,
  SubmissionCompleteness,
  SubmissionMobileSteps,
  SubmissionStepNav,
  SubmissionSuccessNotice,
} from "@/components/soumission/submission-step-nav"
import { SubmissionSection } from "@/components/soumission/submission-section"
import { SetupStep } from "@/components/soumission/steps/setup-step"
import { AuthorsStep } from "@/components/soumission/steps/authors-step"
import { PaperStep } from "@/components/soumission/steps/paper-step"
import { TopicsStep } from "@/components/soumission/steps/topics-step"
import { ReviewStep } from "@/components/soumission/steps/review-step"
import {
  hasSubmissionProgress,
  validateStep,
  WIZARD_STEPS,
} from "@/lib/submission-form"
import { isSubmissionClosed } from "@/lib/submission"
import { SubmissionClosedPanel } from "@/components/soumission/submission-closed-panel"
import { AlreadySubmittedPanel } from "@/components/soumission/already-submitted-panel"
import { useAuth } from "@/contexts/auth-context"

const sectionMeta: Record<number, { title: string; description: string }> = {
  1: {
    title: "Configuration",
    description: "Définissez le cadre de votre contribution avant de rédiger.",
  },
  2: {
    title: "Auteurs & affiliations",
    description: "Renseignez les auteurs, leurs coordonnées et l'établissement de rattachement de chacun.",
  },
  3: {
    title: "Communication",
    description: "Rédigez le titre et l'abstract — le cœur scientifique de votre soumission.",
  },
  4: {
    title: "Thématiques",
    description: "Positionnez votre travail dans le programme scientifique de RIPU26.",
  },
  5: {
    title: "Revue & transmission",
    description: "Vérifiez votre dossier, joignez le PDF et transmettez au comité.",
  },
}

function mergeStepErrors(draft: Parameters<typeof validateStep>[1], steps: number[]) {
  const merged: Record<string, string> = {}
  for (const step of steps) {
    Object.assign(merged, validateStep(step, draft))
  }
  return merged
}

export function SubmissionWorkspace() {
  const { loading: authLoading, hasSubmitted, submission } = useAuth()
  const {
    draft,
    patch,
    errors,
    hydrated,
    saveState,
    savedAtLabel,
    stepProgress,
    completeness,
    pdfFile,
    setPdf,
    clearPdf,
    pdfNeedsReattach,
    draftRestored,
    dismissRestored,
    resetSubmission,
    isResetting,
    completeSubmission,
    submissionNotice,
    dismissSubmissionNotice,
    isSubmitting,
    setIsSubmitting,
  } = useSubmissionWorkspace()

  const [showResetDialog, setShowResetDialog] = useState(false)
  const [activeSection, setActiveSection] = useState(1)
  const [revealAllErrors, setRevealAllErrors] = useState(false)

  const scrollToSection = useCallback((step: number) => {
    const el = document.getElementById(`submission-section-${step}`)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveSection(step)
  }, [])

  const displayErrors = useMemo(() => {
    if (Object.keys(errors).length > 0) return errors
    if (!revealAllErrors) return {}
    return mergeStepErrors(draft, [1, 2, 3, 4])
  }, [draft, errors, revealAllErrors])

  const navSteps = useMemo(
    () => stepProgress.map((step) => ({ ...step, active: step.id === activeSection })),
    [stepProgress, activeSection]
  )

  useEffect(() => {
    const sections = WIZARD_STEPS.map((s) => document.getElementById(`submission-section-${s.id}`)).filter(
      Boolean
    ) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (!visible.length) return
        const id = visible[0].target.id
        const step = Number(id.replace("submission-section-", ""))
        if (!Number.isNaN(step)) setActiveSection(step)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [hydrated])

  const handleIncompleteSubmit = useCallback(() => {
    setRevealAllErrors(true)
    const merged = mergeStepErrors(draft, [1, 2, 3, 4])
    const firstIncomplete = WIZARD_STEPS.find((step) => {
      if (step.id === 5) return false
      return Object.keys(validateStep(step.id, draft)).length > 0
    })
    if (firstIncomplete) scrollToSection(firstIncomplete.id)
    else if (Object.keys(merged).length > 0) scrollToSection(1)
  }, [draft, scrollToSection])

  if (!hydrated || authLoading) {
    return (
      <div className="container-main py-16">
        <div className="floating-panel h-64 animate-pulse bg-[var(--grey-50)]" />
      </div>
    )
  }

  if (isSubmissionClosed()) {
    return <SubmissionClosedPanel />
  }

  if (hasSubmitted && submission) {
    return <AlreadySubmittedPanel submission={submission} />
  }

  const hasProgress = hasSubmissionProgress(draft)

  return (
    <div className="container-main">
      {submissionNotice && (
        <SubmissionSuccessNotice reference={submissionNotice} onDismiss={dismissSubmissionNotice} />
      )}
      {draftRestored && <DraftRestoredBanner onDismiss={dismissRestored} />}

      <SubmissionMobileSteps
        steps={navSteps}
        completenessScore={completeness.score}
        hasProgress={hasProgress}
        onSectionClick={scrollToSection}
      />

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-12 xl:gap-16">
        <aside className="hidden lg:block">
          <div className="sticky top-[5.5rem] space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                Espace de soumission
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">
                Complétez les sections ci-dessous. Votre progression est sauvegardée automatiquement.
              </p>
            </div>
            <SubmissionStepNav steps={navSteps} onStepClick={scrollToSection} />
            <SubmissionCompleteness score={completeness.score} hasProgress={hasProgress} />
            <SaveIndicator state={saveState} savedAtLabel={savedAtLabel} hasProgress={hasProgress} />
            <RestartSubmissionButton onClick={() => setShowResetDialog(true)} />
            <Link href="/authors" className="link-arrow inline-flex text-sm font-semibold">
              Guide des auteurs
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </Link>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="floating-panel overflow-hidden">
            <div className="border-b border-[var(--border)] bg-[var(--grey-50)] px-6 py-6 md:px-8 md:py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                Dossier de soumission
              </p>
              <h1 className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                Préparez votre communication
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--grey-600)]">
                Remplissez chaque section dans l&apos;ordre suggéré. Faites défiler la page ou utilisez le
                sommaire pour naviguer.
              </p>
            </div>

            <SubmissionSection
              step={1}
              title={sectionMeta[1].title}
              description={sectionMeta[1].description}
              complete={stepProgress[0]?.complete}
            >
              <SetupStep draft={draft} onChange={patch} errors={displayErrors} />
            </SubmissionSection>

            <SubmissionSection
              step={2}
              title={sectionMeta[2].title}
              description={sectionMeta[2].description}
              complete={stepProgress[1]?.complete}
            >
              <AuthorsStep draft={draft} onChange={patch} errors={displayErrors} />
            </SubmissionSection>

            <SubmissionSection
              step={3}
              title={sectionMeta[3].title}
              description={sectionMeta[3].description}
              complete={stepProgress[2]?.complete}
            >
              <PaperStep draft={draft} onChange={patch} errors={displayErrors} />
            </SubmissionSection>

            <SubmissionSection
              step={4}
              title={sectionMeta[4].title}
              description={sectionMeta[4].description}
              complete={stepProgress[3]?.complete}
            >
              <TopicsStep draft={draft} onChange={patch} errors={displayErrors} />
            </SubmissionSection>

            <SubmissionSection
              step={5}
              title={sectionMeta[5].title}
              description={sectionMeta[5].description}
              complete={stepProgress[4]?.complete}
            >
              <ReviewStep
                draft={draft}
                pdfFile={pdfFile}
                pdfNeedsReattach={pdfNeedsReattach}
                onEditStep={scrollToSection}
                onPdfFile={(file, meta) => setPdf(file, meta)}
                onPdfClear={clearPdf}
                onSubmitted={completeSubmission}
                onIncompleteSubmit={handleIncompleteSubmit}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
            </SubmissionSection>
          </div>
        </div>
      </div>

      <ResetSubmissionDialog
        open={showResetDialog}
        loading={isResetting}
        onClose={() => setShowResetDialog(false)}
        onConfirm={() => {
          resetSubmission()
          setShowResetDialog(false)
          setRevealAllErrors(false)
        }}
      />
    </div>
  )
}
