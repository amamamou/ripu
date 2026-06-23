import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib"

import {

  countWords,

  formatAffiliation,

  formatAuthorName,

  parseKeywords,

  topicAxis,

  SUBMISSION_TYPES,

  type SubmissionDraft,

} from "@/lib/submission-form"



const PAGE_W = 595.28

const PAGE_H = 841.89

const MARGIN_X = 64

const MARGIN_TOP = 64

const MARGIN_BOTTOM = 64

const CONTENT_W = PAGE_W - MARGIN_X * 2



const BRAND = rgb(47 / 255, 4 / 255, 97 / 255)

const BRAND_DARK = rgb(31 / 255, 3 / 255, 68 / 255)

const GREY = rgb(0.28, 0.28, 0.28)

const MUTED = rgb(0.5, 0.5, 0.5)

const LINE = rgb(0.88, 0.88, 0.88)



async function fetchLogoBytes() {

  if (typeof window === "undefined") return null

  try {

    const res = await fetch("/logo.png")

    if (!res.ok) return null

    return new Uint8Array(await res.arrayBuffer())

  } catch {

    return null

  }

}



function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {

  const lines: string[] = []

  for (const paragraph of text.split("\n")) {

    const words = paragraph.trim().split(/\s+/).filter(Boolean)

    if (!words.length) continue

    let current = ""

    for (const word of words) {

      const test = current ? `${current} ${word}` : word

      if (font.widthOfTextAtSize(test, size) > maxWidth) {

        if (current) lines.push(current)

        current = word

      } else {

        current = test

      }

    }

    if (current) lines.push(current)

  }

  return lines.length ? lines : [""]

}



function truncateText(text: string, font: PDFFont, size: number, maxWidth: number) {

  if (font.widthOfTextAtSize(text, size) <= maxWidth) return text

  let truncated = text

  while (truncated.length > 1 && font.widthOfTextAtSize(`${truncated}…`, size) > maxWidth) {

    truncated = truncated.slice(0, -1)

  }

  return `${truncated}…`

}



function resolveCommunicationPdfName(

  draft: SubmissionDraft,

  communicationPdfName?: string | null

) {

  const candidate = (communicationPdfName ?? draft.pdfMeta?.fileName ?? "").trim()

  if (!candidate) return null

  if (/-dossier\.pdf$/i.test(candidate)) return null

  return candidate

}



class DossierPdf {

  private doc!: PDFDocument

  private page!: PDFPage

  private regular!: PDFFont

  private bold!: PDFFont

  private y = 0



  async init(reference: string, title: string) {

    this.doc = await PDFDocument.create()

    this.doc.setTitle(title || "Soumission RIPU26")

    this.doc.setSubject(reference)

    this.doc.setCreator("RIPU26")

    this.doc.setProducer("RIPU26")

    this.regular = await this.doc.embedFont(StandardFonts.Helvetica)

    this.bold = await this.doc.embedFont(StandardFonts.HelveticaBold)

    this.page = this.doc.addPage([PAGE_W, PAGE_H])

    this.y = PAGE_H - MARGIN_TOP

  }



  private ensureSpace(needed: number) {

    if (this.y - needed >= MARGIN_BOTTOM) return

    this.page = this.doc.addPage([PAGE_W, PAGE_H])

    this.y = PAGE_H - MARGIN_TOP

  }



  private write(

    content: string,

    opts: {

      size?: number

      font?: PDFFont

      color?: ReturnType<typeof rgb>

      x?: number

      maxWidth?: number

      lineHeight?: number

      gapAfter?: number

    } = {}

  ) {

    const size = opts.size ?? 10.5

    const font = opts.font ?? this.regular

    const color = opts.color ?? GREY

    const x = opts.x ?? MARGIN_X

    const maxWidth = opts.maxWidth ?? CONTENT_W

    const lineHeight = opts.lineHeight ?? size * 1.5



    for (const line of wrapText(content, font, size, maxWidth)) {

      this.ensureSpace(lineHeight)

      this.page.drawText(line, { x, y: this.y, size, font, color })

      this.y -= lineHeight

    }

    this.y -= opts.gapAfter ?? 0

  }



  async drawHeader(reference: string, communicationPdfName: string | null) {

    const logoBytes = await fetchLogoBytes()



    if (logoBytes) {

      const image = await this.doc.embedPng(logoBytes)

      const maxW = 176

      const maxH = 52

      const scale = Math.min(maxW / image.width, maxH / image.height)

      const w = image.width * scale

      const logoH = image.height * scale

      this.page.drawImage(image, {

        x: MARGIN_X,

        y: this.y - logoH,

        width: w,

        height: logoH,

      })

      this.y -= logoH + 18

    } else {

      this.page.drawText("RIPU26", {

        x: MARGIN_X,

        y: this.y - 24,

        size: 28,

        font: this.bold,

        color: BRAND,

      })

      this.y -= 44

    }



    this.page.drawLine({

      start: { x: MARGIN_X, y: this.y },

      end: { x: PAGE_W - MARGIN_X, y: this.y },

      thickness: 0.75,

      color: LINE,

    })

    this.y -= 22



    this.page.drawText("Dossier de soumission", {

      x: MARGIN_X,

      y: this.y,

      size: 9,

      font: this.bold,

      color: BRAND_DARK,

    })

    this.y -= 24



    const generatedAt = new Date().toLocaleString("fr-FR", {

      dateStyle: "long",

      timeStyle: "short",

    })



    this.drawMetaRow(reference, generatedAt, communicationPdfName)

    this.y -= 28

  }



  private drawMetaRow(

    reference: string,

    generatedAt: string,

    communicationPdfName: string | null

  ) {

    const rowH = 44

    const padX = 14

    const colW = CONTENT_W / 3

    const top = this.y

    const bottom = top - rowH



    this.ensureSpace(rowH + 4)



    this.page.drawRectangle({

      x: MARGIN_X,

      y: bottom,

      width: CONTENT_W,

      height: rowH,

      borderColor: LINE,

      borderWidth: 0.75,

    })



    for (let i = 1; i < 3; i++) {

      const x = MARGIN_X + colW * i

      this.page.drawLine({

        start: { x, y: bottom },

        end: { x, y: top },

        thickness: 0.5,

        color: LINE,

      })

    }



    const columns: { label: string; value: string }[] = [

      { label: "Référence", value: reference },

      { label: "Généré le", value: generatedAt },

      {

        label: "Communication",

        value: communicationPdfName ?? "—",

      },

    ]



    for (const [i, col] of columns.entries()) {

      const x = MARGIN_X + colW * i + padX

      const maxValueW = colW - padX * 2

      const value =

        i === 2

          ? truncateText(col.value, this.regular, 9.5, maxValueW)

          : truncateText(col.value, this.bold, 10, maxValueW)



      this.page.drawText(col.label, {

        x,

        y: top - 14,

        size: 7,

        font: this.bold,

        color: MUTED,

      })

      this.page.drawText(value, {

        x,

        y: top - 30,

        size: i === 0 ? 10 : 9.5,

        font: i === 0 ? this.bold : this.regular,

        color: GREY,

      })

    }



    this.y = bottom

  }



  section(title: string) {

    this.ensureSpace(36)

    this.y -= 8

    this.page.drawRectangle({

      x: MARGIN_X,

      y: this.y - 2,

      width: 3,

      height: 14,

      color: BRAND,

    })

    this.page.drawText(title, {

      x: MARGIN_X + 12,

      y: this.y,

      size: 12,

      font: this.bold,

      color: BRAND_DARK,

    })

    this.y -= 24

  }



  field(label: string, value: string) {

    this.write(label, {

      size: 7.5,

      font: this.bold,

      color: MUTED,

      gapAfter: 3,

    })

    this.write(value, { size: 10.5, color: GREY, gapAfter: 12 })

  }



  title(value: string) {

    this.write(value, {

      size: 13,

      font: this.bold,

      color: BRAND_DARK,

      lineHeight: 13 * 1.4,

      gapAfter: 14,

    })

  }



  abstractBlock(wordCount: number, content: string) {

    const size = 10

    const lines = wrapText(content, this.regular, size, CONTENT_W)

    const blockH = 20 + lines.length * size * 1.5 + 12

    this.ensureSpace(blockH + 10)



    const bottom = this.y - blockH



    this.page.drawLine({

      start: { x: MARGIN_X, y: this.y },

      end: { x: PAGE_W - MARGIN_X, y: this.y },

      thickness: 0.5,

      color: LINE,

    })

    this.y -= 16



    this.page.drawText(`Abstract · ${wordCount} mots`, {

      x: MARGIN_X,

      y: this.y,

      size: 7.5,

      font: this.bold,

      color: MUTED,

    })

    this.y -= 14



    for (const line of lines) {

      this.page.drawText(line, {

        x: MARGIN_X,

        y: this.y,

        size,

        font: this.regular,

        color: GREY,

      })

      this.y -= size * 1.5

    }



    this.y -= 8

    this.page.drawLine({

      start: { x: MARGIN_X, y: this.y },

      end: { x: PAGE_W - MARGIN_X, y: this.y },

      thickness: 0.5,

      color: LINE,

    })

    this.y = bottom - 8

  }



  authorBlock(

    index: number,

    name: string,

    flags: string,

    orcid: string,

    affiliation: string

  ) {

    this.ensureSpace(56)

    this.page.drawText(`${index}.`, {

      x: MARGIN_X,

      y: this.y,

      size: 10,

      font: this.bold,

      color: BRAND,

    })

    const nameLine = flags ? `${name}  ·  ${flags}` : name

    this.write(nameLine, {

      x: MARGIN_X + 18,

      maxWidth: CONTENT_W - 18,

      size: 10.5,

      font: this.bold,

      color: BRAND_DARK,

      gapAfter: 4,

    })

    if (orcid) {

      this.write(`ORCID ${orcid}`, {

        x: MARGIN_X + 18,

        size: 9,

        color: MUTED,

        gapAfter: 3,

      })

    }

    this.write(affiliation, {

      x: MARGIN_X + 18,

      maxWidth: CONTENT_W - 18,

      size: 10,

      color: GREY,

      gapAfter: 16,

    })

  }



  footer(reference: string) {

    this.ensureSpace(32)

    this.y -= 12

    this.page.drawLine({

      start: { x: MARGIN_X, y: this.y },

      end: { x: PAGE_W - MARGIN_X, y: this.y },

      thickness: 0.5,

      color: LINE,

    })

    this.y -= 18

    this.write(`RIPU26  ·  ${reference}`, {

      size: 8,

      color: MUTED,

      gapAfter: 0,

    })

  }



  async bytes() {

    return this.doc.save()

  }

}



export async function createSubmissionDossierPdf(

  draft: SubmissionDraft,

  reference: string,

  communicationPdfName?: string | null

) {

  const typeLabel =

    SUBMISSION_TYPES.find((t) => t.value === draft.submissionType)?.label ?? "—"

  const keywords = parseKeywords(draft.keywords).join(" · ")

  const jointPdf = resolveCommunicationPdfName(draft, communicationPdfName)



  const pdf = new DossierPdf()

  await pdf.init(reference, draft.title.trim())

  await pdf.drawHeader(reference, jointPdf)



  pdf.section("Configuration")

  pdf.field("Type de contribution", typeLabel)



  pdf.section("Communication")

  pdf.title(draft.title.trim() || "—")

  pdf.abstractBlock(countWords(draft.abstract), draft.abstract.trim() || "—")



  pdf.section("Thématiques")

  pdf.field("Sujet principal", draft.primaryTopic || "—")

  pdf.field("Axe", topicAxis(draft.primaryTopic) || "—")

  pdf.field("Sujet secondaire", draft.secondaryTopic || "—")

  pdf.field("Mots-clés", keywords || "—")

  pdf.field("Contribution étudiante", draft.studentContribution ? "Oui" : "Non")



  if (draft.remarks.trim()) {

    pdf.section("Remarques")

    pdf.write(draft.remarks.trim(), { size: 10.5, gapAfter: 8 })

  }



  pdf.section("Auteurs")

  if (draft.authors.length === 0) {

    pdf.write("—", { size: 10.5 })

  } else {

    for (const [i, author] of draft.authors.entries()) {

      const primary = draft.organizations.find((o) => o.id === author.primaryOrgId)

      const flags = [

        i === 0 ? "Auteur correspondant" : null,

        author.id === draft.presentingAuthorId ? "Présentateur" : null,

      ]

        .filter(Boolean)

        .join(" · ")



      pdf.authorBlock(

        i + 1,

        formatAuthorName(author),

        flags,

        author.orcid.trim(),

        primary ? formatAffiliation(primary) : "—"

      )

    }

  }



  pdf.footer(reference)

  const bytes = await pdf.bytes()

  return new Blob([bytes], { type: "application/pdf" })

}



export function downloadBlob(blob: Blob, filename: string) {

  const url = URL.createObjectURL(blob)

  const anchor = document.createElement("a")

  anchor.href = url

  anchor.download = filename

  anchor.click()

  URL.revokeObjectURL(url)

}



export async function downloadSubmissionDossierPdf(

  draft: SubmissionDraft,

  reference: string,

  communicationPdfName?: string | null

) {

  const blob = await createSubmissionDossierPdf(draft, reference, communicationPdfName)

  downloadBlob(blob, `${reference}-dossier.pdf`)

}


