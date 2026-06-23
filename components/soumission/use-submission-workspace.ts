"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  createDefaultDraft,
  clearDraft,
  formatSavedTime,
  getSubmissionCompleteness,
  isReviewStepComplete,
  isStepComplete,
  loadDraft,
  saveDraft,
  type SubmissionDraft,
  validateStep,
  type StepErrors,
  WIZARD_STEPS,
} from "@/lib/submission-form"

export function useSubmissionWorkspace() {
  const [draft, setDraft] = useState<SubmissionDraft>(createDefaultDraft)
  const [hydrated, setHydrated] = useState(false)
  const [draftRestored, setDraftRestored] = useState(false)
  const [errors, setErrors] = useState<StepErrors>({})
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("idle")
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [pdfNeedsReattach, setPdfNeedsReattach] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [submissionNotice, setSubmissionNotice] = useState<string | null>(null)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dirtyRef = useRef(false)

  useEffect(() => {
    const { draft: loaded, restored } = loadDraft()
    setDraftRestored(restored && !loaded.submittedReference)
    if (loaded.submittedReference) {
      clearDraft()
      setDraft(createDefaultDraft())
    } else {
      setDraft(loaded)
    }
    setPdfNeedsReattach(restored && Boolean(loaded.pdfMeta))
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    dirtyRef.current = true
    setSaveState("saving")
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      saveDraft(draft)
      setSaveState("saved")
    }, 500)
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current)
    }
  }, [draft, hydrated])

  useEffect(() => {
    if (!hydrated) return
    const handler = (e: BeforeUnloadEvent) => {
      if (!dirtyRef.current) return
      e.preventDefault()
      e.returnValue = ""
    }
    window.addEventListener("beforeunload", handler)
    return () => window.removeEventListener("beforeunload", handler)
  }, [hydrated])

  const patch = useCallback((partial: Partial<SubmissionDraft>) => {
    setDraft((prev) => ({ ...prev, ...partial }))
    setErrors({})
  }, [])

  const completeSubmission = useCallback((reference: string) => {
    clearDraft()
    setDraft(createDefaultDraft())
    setPdfFile(null)
    setPdfNeedsReattach(false)
    setErrors({})
    dirtyRef.current = false
    setSaveState("idle")
    setSubmissionNotice(reference)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const dismissSubmissionNotice = useCallback(() => setSubmissionNotice(null), [])

  const setPdf = useCallback((file: File | null, meta: SubmissionDraft["pdfMeta"]) => {
    setPdfFile(file)
    setPdfNeedsReattach(false)
    setDraft((prev) => ({ ...prev, pdfMeta: meta }))
    setErrors({})
  }, [])

  const clearPdf = useCallback(() => {
    setPdfFile(null)
    setDraft((prev) => ({ ...prev, pdfMeta: null }))
  }, [])

  const goToStep = useCallback((step: number) => {
    const clamped = Math.min(Math.max(step, 1), WIZARD_STEPS.length)
    setDraft((prev) => ({ ...prev, currentStep: clamped }))
    setErrors({})
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const validateCurrent = useCallback(() => {
    const stepErrors = validateStep(draft.currentStep, draft)
    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }, [draft])

  const nextStep = useCallback(() => {
    if (!validateCurrent()) return false
    goToStep(draft.currentStep + 1)
    return true
  }, [draft.currentStep, goToStep, validateCurrent])

  const prevStep = useCallback(() => {
    goToStep(draft.currentStep - 1)
  }, [draft.currentStep, goToStep])

  const stepProgress = useMemo(() => {
    return WIZARD_STEPS.map((step) => ({
      ...step,
      complete:
        step.id === 5
          ? isReviewStepComplete(draft, Boolean(pdfFile))
          : isStepComplete(step.id, draft),
      active: step.id === draft.currentStep,
    }))
  }, [draft, pdfFile])

  const completeness = useMemo(
    () => getSubmissionCompleteness(draft, Boolean(pdfFile)),
    [draft, pdfFile]
  )

  const dismissRestored = useCallback(() => setDraftRestored(false), [])

  const resetSubmission = useCallback(() => {
    setIsResetting(true)
    clearDraft()
    setDraft(createDefaultDraft())
    setPdfFile(null)
    setPdfNeedsReattach(false)
    setDraftRestored(false)
    setErrors({})
    dirtyRef.current = false
    setSaveState("idle")
    setSubmissionNotice(null)
    setIsResetting(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return {
    draft,
    patch,
    setDraft,
    errors,
    setErrors,
    hydrated,
    saveState,
    savedAtLabel: draft.updatedAt ? formatSavedTime(draft.updatedAt, "label") : null,
    stepProgress,
    completeness,
    goToStep,
    nextStep,
    prevStep,
    validateCurrent,
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
  }
}
