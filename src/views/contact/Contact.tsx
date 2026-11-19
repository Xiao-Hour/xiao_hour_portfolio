// ==========================================
// Imports
// ==========================================
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SparkleIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

// ==========================================
// Types
// ==========================================
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ==========================================
// Static Data
// ==========================================
const CONTACT_LINKS = [
  {
    icon: PhoneIcon,
    label: "Phone / Telegram",
    value: "011 305 628",
    href: "tel:011305628",
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "hymenghour1701@gmail.com",
    href: "mailto:hymenghour1701@gmail.com",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Siem Reap City, Cambodia",
    href: "https://maps.google.com/?q=Siem+Reap+Cambodia",
  },
  {
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
    value: "Hy Menghour",
    href: "https://linkedin.com",
  },
  {
    icon: GithubLogoIcon,
    label: "GitHub",
    value: "github.com/hymenghour",
    href: "https://github.com",
  },
];

// ==========================================
// Animation
// ==========================================
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ==========================================
// Input / Textarea shared styles helper
// ==========================================
const fieldStyle = {
  backgroundColor: "var(--color-surface-2)",
  borderColor: "var(--color-border-soft)",
  color: "var(--color-text-primary)",
};

// ==========================================
// Contact Component
// ==========================================
export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.currentTarget.style.borderColor = "var(--color-accent)";
    e.currentTarget.style.outline = "none";
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.currentTarget.style.borderColor = "var(--color-border-soft)";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Simulated async submit — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  return (
    <>
      {/* ── Page Hero ───────────────────────────────────── */}
      <section
        className="pt-28 pb-16 px-6 border-b"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="label-mono inline-flex items-center gap-2 mb-4" style={{ color: "var(--color-accent)" }}>
              <SparkleIcon size={12} weight="fill" />
              Contact
            </span>
            <h1
              className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Let's talk.
            </h1>
            <p className="text-xl max-w-xl leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Whether you have a project, a question, or just want to say hi —
              I read every message and reply to most within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--color-canvas)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-16 items-start">

          {/* ── Form ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center gap-5 py-20 px-8 rounded border text-center"
                style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent-soft)" }}
              >
                <CheckCircleIcon size={48} style={{ color: "var(--color-accent)" }} />
                <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                  Message received!
                </h2>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="label-mono px-5 py-2.5 rounded border transition-all duration-200"
                  style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="label-mono" style={{ color: "var(--color-text-muted)" }}>
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="px-4 py-3 rounded border text-sm transition-colors duration-200"
                      style={{ ...fieldStyle, border: "1px solid var(--color-border-soft)" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="label-mono" style={{ color: "var(--color-text-muted)" }}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="px-4 py-3 rounded border text-sm transition-colors duration-200"
                      style={{ ...fieldStyle, border: "1px solid var(--color-border-soft)" }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="label-mono" style={{ color: "var(--color-text-muted)" }}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="px-4 py-3 rounded border text-sm transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ ...fieldStyle, border: "1px solid var(--color-border-soft)" }}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="hiring">Hiring / Opportunity</option>
                    <option value="project">Project collaboration</option>
                    <option value="consulting">Consulting inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="label-mono" style={{ color: "var(--color-text-muted)" }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me about your project, timeline, and what you're looking for…"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="px-4 py-3 rounded border text-sm transition-colors duration-200 resize-y"
                    style={{ ...fieldStyle, border: "1px solid var(--color-border-soft)" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-semibold text-sm transition-all duration-200 disabled:opacity-60"
                  style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <PaperPlaneTiltIcon size={16} weight="bold" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Sidebar ───────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Availability card */}
            <div
              className="p-6 rounded border"
              style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent-soft)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-accent)" }} />
                <span className="label-mono" style={{ color: "var(--color-accent)" }}>Available for work</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                I'm open to front-end & mobile development opportunities, freelance projects, and IT consulting.
                Based in Siem Reap, Cambodia (UTC+7). Vue.js · Ionic · React · TypeScript stack.
              </p>
            </div>

            {/* Contact links */}
            <div
              className="p-6 rounded border flex flex-col gap-4"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
            >
              <span className="label-mono" style={{ color: "var(--color-text-muted)" }}>Find me on</span>
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-surface-2)" }}
                  >
                    <Icon size={17} />
                  </div>
                  <div className="flex flex-col">
                    <span className="label-mono text-[10px]" style={{ color: "var(--color-text-muted)" }}>{label}</span>
                    <span className="text-sm">{value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time note */}
            <p className="label-mono text-center" style={{ color: "var(--color-text-muted)" }}>
              Average response time: &lt; 24 hours
            </p>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
