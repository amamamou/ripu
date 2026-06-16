'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, MapPin, Users } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* ============================================================ */}
      {/* SECTION 1: Header */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="label-text mb-4">GET IN TOUCH</div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-secondary leading-8 max-w-2xl">
            Have questions about RIPU26? Reach out to us through any of these channels. We&apos;ll respond promptly to your inquiry.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Contact Information */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* General Contact */}
            <div className="accent-bar p-8">
              <div className="flex gap-3 mb-6">
                <Mail className="h-6 w-6 text-[#2F0461] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">General Inquiry</h3>
                  <p className="text-sm text-secondary mb-4">For general questions</p>
                  <a 
                    href="mailto:contact@ripu26.org"
                    className="text-lg font-semibold text-accent hover:text-primary transition-colors break-all"
                  >
                    contact@ripu26.org
                  </a>
                </div>
              </div>
            </div>

            {/* Submissions */}
            <div className="accent-bar p-8">
              <div className="flex gap-3 mb-6">
                <Mail className="h-6 w-6 text-[#2F0461] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Paper Submissions</h3>
                  <p className="text-sm text-secondary mb-4">For submission questions</p>
                  <a 
                    href="mailto:submissions@ripu26.org"
                    className="text-lg font-semibold text-accent hover:text-primary transition-colors break-all"
                  >
                    submissions@ripu26.org
                  </a>
                </div>
              </div>
            </div>

            {/* Venue */}
            <div className="accent-bar p-8">
              <div className="flex gap-3 mb-6">
                <MapPin className="h-6 w-6 text-[#2F0461] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Conference Venue</h3>
                  <p className="text-sm text-secondary">Marriott Hotel Sousse</p>
                  <p className="text-sm text-secondary">Avenue de la Corniche</p>
                  <p className="text-sm text-secondary">Sousse, Tunisia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Contact Form */}
      {/* ============================================================ */}
      <section className="bg-white section-spacing border-t border-[#ececec]">
        <div className="px-8 lg:px-16 max-w-2xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-secondary">
              Fill out this form and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-2 text-base text-primary bg-transparent border-0 border-b-2 border-[#ececec] focus:border-[#2F0461] focus:outline-none focus:ring-0 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-2 text-base text-primary bg-transparent border-0 border-b-2 border-[#ececec] focus:border-[#2F0461] focus:outline-none focus:ring-0 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-0 py-2 text-base text-primary bg-transparent border-0 border-b-2 border-[#ececec] focus:border-[#2F0461] focus:outline-none focus:ring-0 transition-colors"
                required
              >
                <option value="">Select a subject</option>
                <option value="submission">Paper Submission</option>
                <option value="registration">Registration</option>
                <option value="general">General Question</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-0 py-2 text-base text-primary bg-transparent border-0 border-b-2 border-[#ececec] focus:border-[#2F0461] focus:outline-none focus:ring-0 transition-colors resize-none"
                placeholder="Your message here..."
                required
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn-primary"
              >
                {submitted ? 'Message Sent ✓' : 'Send Message'}
              </button>
              {submitted && (
                <p className="mt-4 text-sm text-green-600">
                  Thank you for your message. We&apos;ll respond shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
