import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FileText, Download, ExternalLink } from "lucide-react";

export default function AuthorsPage() {
  return (
    <>
      <Navbar />

      {/* ============================================================ */}
      {/* SECTION 1: Header - Simple Typography */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="label-text mb-4">AUTHOR GUIDELINES</div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Submit Your Research
          </h1>
          <p className="text-xl text-secondary leading-8 max-w-3xl">
            RIPU26 welcomes scientific contributions, research papers, and practical experience reports addressing contemporary transformations in higher education and pedagogical innovation.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Important Dates */}
      {/* ============================================================ */}
      <section id="dates" className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">TIMELINE</div>
            <h2 className="text-4xl font-bold text-primary">
              Key Submission Dates
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { date: "July 15, 2026", event: "Paper Submission Deadline" },
              { date: "August 10, 2026", event: "Notifications to Authors" },
              { date: "September 1, 2026", event: "Registration Deadline" },
              { date: "October 30, 2026", event: "Conference Opening" },
              { date: "October 31, 2026", event: "Conference Closing" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 md:gap-16 items-start pb-6 border-b border-[#ececec] last:border-0">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm uppercase tracking-widest text-secondary font-medium">
                    {item.date}
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-primary font-semibold">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Submission Guidelines */}
      {/* ============================================================ */}
      <section id="guidelines" className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">GUIDELINES</div>
            <h2 className="text-4xl font-bold text-primary">
              How to Submit
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Types of Contributions */}
            <div className="accent-bar p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Types of Contributions
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Full Research Papers (6-8 pages)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Practical Experience Reports (4-6 pages)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Ongoing Research Projects (3-4 pages)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Poster Presentations (2-3 pages)</span>
                </li>
              </ul>
            </div>

            {/* Format Requirements */}
            <div className="accent-bar p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Format Requirements
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Language: English or French</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Font: Montserrat or Arial, 11pt minimum</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Line spacing: 1.5</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>File format: Word (.docx) or PDF</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Research Themes */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">THEMES</div>
            <h2 className="text-4xl font-bold text-primary">
              Research Axes
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-2xl">
              Submit contributions addressing one or more of these key research areas:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Axis 1 */}
            <div className="accent-bar p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                AI & Teaching
              </h3>
              <ul className="space-y-3 text-secondary text-sm leading-7">
                <li>• AI as intelligent tutoring systems</li>
                <li>• AI and the teaching profession</li>
                <li>• AI for automated assessment</li>
                <li>• Impact on student learning</li>
                <li>• Future of higher education</li>
              </ul>
            </div>

            {/* Axis 2 */}
            <div className="accent-bar p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Pedagogical Innovation
              </h3>
              <ul className="space-y-3 text-secondary text-sm leading-7">
                <li>• Competency-based approaches</li>
                <li>• Curriculum design in AI era</li>
                <li>• Gamification strategies</li>
                <li>• Active learning methods</li>
                <li>• Digital transformation</li>
              </ul>
            </div>

            {/* Axis 3 */}
            <div className="accent-bar p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Inclusion & Equity
              </h3>
              <ul className="space-y-3 text-secondary text-sm leading-7">
                <li>• Gender and diversity</li>
                <li>• Accessibility in learning</li>
                <li>• Student wellbeing</li>
                <li>• Inclusive practices</li>
                <li>• Equity in education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: Submission Process */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <div className="label-text mb-4 inline-block">SUBMISSION</div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Submit?
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "1", title: "Prepare", desc: "Follow formatting guidelines" },
              { number: "2", title: "Review", desc: "Ensure research quality" },
              { number: "3", title: "Submit", desc: "Via our submission portal" },
              { number: "4", title: "Peer Review", desc: "Scientific evaluation" },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#2F0461] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://example.com/submit"
              className="btn-primary inline-block mb-6"
            >
              Open Submission Portal
            </a>
            <p className="text-sm text-secondary">
              For questions, contact <strong>submissions@ripu26.org</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: Resources & Downloads */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-text mb-4">RESOURCES</div>
            <h2 className="text-4xl font-bold text-primary">
              Helpful Documents
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Author Template", format: "Word (.docx)", icon: FileText },
              { title: "Submission Checklist", format: "PDF", icon: FileText },
              { title: "Ethics & Plagiarism", format: "PDF", icon: FileText },
            ].map((doc, idx) => (
              <a key={idx} href="#" className="border border-[#ececec] p-8 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="h-6 w-6 text-[#2F0461]" />
                  <Download className="h-5 w-5 text-[#ececec] group-hover:text-[#2F0461] transition-colors" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{doc.title}</h3>
                <p className="text-sm text-secondary">{doc.format}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
