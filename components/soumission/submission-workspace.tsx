"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
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
import { SetupStep } from "@/components/soumission/steps/setup-step"
import { AuthorsStep } from "@/components/soumission/steps/authors-step"
import { PaperStep } from "@/components/soumission/steps/paper-step"
import { TopicsStep } from "@/components/soumission/steps/topics-step"
import { ReviewStep } from "@/components/soumission/steps/review-step"
import { WIZARD_STEPS, hasSubmissionProgress } from "@/lib/submission-form"
import { isSubmissionClosed } from "@/lib/submission"
import { SubmissionClosedPanel } from "@/components/soumission/submission-closed-panel"
import { AlreadySubmittedPanel } from "@/components/soumission/already-submitted-panel"
import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"

const stepMeta: Record<number, { title: string; description: string }> = {
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
    title: "Revue finale",
    description: "Inspectez votre dossier, vérifiez le PDF et transmettez au comité.",
  },
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
    goToStep,
    nextStep,
    prevStep,
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

  const meta = stepMeta[draft.currentStep]
  const isFirst = draft.currentStep === 1
  const isLast = draft.currentStep === WIZARD_STEPS.length
  const hasProgress = hasSubmissionProgress(draft)

  return (
    <div className="container-main">
      {submissionNotice && (
        <SubmissionSuccessNotice reference={submissionNotice} onDismiss={dismissSubmissionNotice} />
      )}
      {draftRestored && <DraftRestoredBanner onDismiss={dismissRestored} />}

      <SubmissionMobileSteps
        steps={stepProgress}
        currentStep={draft.currentStep}
        completenessScore={completeness.score}
        hasProgress={hasProgress}
      />

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-12 xl:gap-16">
        <aside className="hidden lg:block">
          <div className="sticky top-[5.5rem] space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
                Espace de soumission
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">
                Votre progression est sauvegardée automatiquement. Aucune perte en cas de rafraîchissement.
              </p>
            </div>
            <SubmissionStepNav steps={stepProgress} currentStep={draft.currentStep} onStepClick={goToStep} />
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                  Étape {String(draft.currentStep).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                  {meta.title}
                </h2>
                <p className="mt-1.5 text-sm text-[var(--grey-600)]">{meta.description}</p>
              </div>
            </div>

            <div className="px-6 py-8 md:px-8 md:py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={draft.currentStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {draft.currentStep === 1 && <SetupStep draft={draft} onChange={patch} errors={errors} />}
                  {draft.currentStep === 2 && <AuthorsStep draft={draft} onChange={patch} errors={errors} />}
                  {draft.currentStep === 3 && <PaperStep draft={draft} onChange={patch} errors={errors} />}
                  {draft.currentStep === 4 && <TopicsStep draft={draft} onChange={patch} errors={errors} />}
                  {draft.currentStep === 5 && (
                    <ReviewStep
                      draft={draft}
                      pdfFile={pdfFile}
                      pdfNeedsReattach={pdfNeedsReattach}
                      onEditStep={goToStep}
                      onPdfFile={(file, meta) => setPdf(file, meta)}
                      onPdfClear={clearPdf}
                      onSubmitted={completeSubmission}
                      isSubmitting={isSubmitting}
                      setIsSubmitting={setIsSubmitting}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {!isLast && (
              <div className="flex flex-col-reverse gap-3 border-t border-[var(--border)] bg-[var(--grey-50)]/80 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isFirst}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--black)]",
                    isFirst && "pointer-events-none opacity-40"
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Étape précédente
                </button>
                <button type="button" onClick={nextStep} className="btn-lime w-full justify-center sm:w-auto">
                  Continuer
                  <span className="btn-lime-icon">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            )}

            {isLast && (
              <div className="border-t border-[var(--border)] bg-[var(--grey-50)]/80 px-6 py-5 md:px-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Revenir aux thématiques
                </button>
              </div>
            )}
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
        }}
      />
    </div>
  )
}
