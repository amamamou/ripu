import type { SubmissionDraft } from "@/lib/submission-form"

export type SubmissionStatus = "pending" | "accepted" | "rejected" | string

export type StoredSubmission = {
  reference: string
  title: string
  status: SubmissionStatus
  createdAt: string
}

export type SubmissionRow = {
  user_id: string
  reference: string
  draft: SubmissionDraft
  pdf_url?: string | null
  status?: SubmissionStatus
}

export const SUBMISSION_ALREADY_SENT = "ALREADY_SUBMITTED"

export function titleFromDraft(draft: unknown): string {
  if (draft && typeof draft === "object" && "title" in draft) {
    const title = (draft as { title?: unknown }).title
    if (typeof title === "string") return title.trim()
  }
  return ""
}

export function toStoredSubmission(row: {
  reference: string
  draft: unknown
  status?: string | null
  created_at: string
}): StoredSubmission {
  return {
    reference: row.reference,
    title: titleFromDraft(row.draft),
    status: row.status ?? "pending",
    createdAt: row.created_at,
  }
}
