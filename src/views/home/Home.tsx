// ==========================================
// Imports
// ==========================================
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  SparkleIcon,
  BrowserIcon,
  DatabaseIcon,
  StackIcon,
} from "@phosphor-icons/react";

import profileImg    from "../../assets/image/profile.png";
import backgroundImg from "../../assets/image/hero-banner.jpg";

// ==========================================
// Animation Helpers
// ==========================================
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="label-mono inline-flex items-center gap-2 mb-4"
      style={{ color: "var(--color-accent)" }}
    >
      <SparkleIcon size={12} weight="fill" />
      {children}
    </span>
  );
}

// ==========================================
// Static Data
// ==========================================
const STACK_GROUPS = [
  {
    icon: BrowserIcon,
    label: "Frontend",
    items: ["Vue.js (PrimeVue)", "Ionic Framework", "React JS", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: StackIcon,
    label: "Systems & Engineering",
    items: ["REST API Integration", "Git Version Control", "Staging & QA Deploy", "POS System Analysis", "Form Validation"],
  },
  {
    icon: DatabaseIcon,
    label: "IT Operations & Data",
    items: ["Database Management", "SQL Table Queries", "Windows OS Config", "Hardware Support", "System Troubleshooting"],
  },
];

const FEATURED_PROJECTS = [
  {
    slug: "01",
    title: "Cross-Platform Mobile App",
    description:
      "Cross-platform mobile application (Android/iOS) built with Ionic Framework, optimized for fast performance and responsive UI/UX.",
    tags: ["Ionic Framework", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "02",
    title: "PrimeVue Enterprise Dashboard",
    description:
      "Interactive single-page application featuring rich data tables, dialogs, charts, complex form validation, and REST API integration.",
    tags: ["Vue.js", "PrimeVue", "TypeScript", "REST API"],
  },
  {
    slug: "03",
    title: "POS & Retail Operations Platform",
    description:
      "Full POS system configuration, billing document generation, database maintenance (backup/restore/query), and client support.",
    tags: ["POS Systems", "Database Management", "Hardware", "Windows"],
  },
];

const TIMELINE = [
  {
    period: "Oct 2024 – Present",
    role: "Frontend Developer",
    company: "IT Khmer",
    summary:
      "Developing cross-platform mobile apps with Ionic, designing responsive UIs using Tailwind CSS, and implementing rich PrimeVue dashboards.",
  },
  {
    period: "May – Aug 2026",
    role: "Software Engineer",
    company: "Hunter Group",
    summary:
      "Built features based on briefs and user stories, managed staging QA testing cycles, and maintained strict Git version control.",
  },
  {
    period: "2022 – 2023",
    role: "IT Officer (IT Support)",
    company: "ESTC Computer",
    summary:
      "Provided on-site client technical support, installed & configured POS systems, managed database backups and hardware troubleshooting.",
  },
];

// ==========================================
// Home Component
// ==========================================
export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — background image + profile photo
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background image — fills the whole hero */}
        <div className="absolute inset-0">
          <img
            src={backgroundImg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Warm overlay so text stays crisp and readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(250,248,245,0.94) 0%, rgba(250,248,245,0.80) 45%, rgba(250,248,245,0.30) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">

            {/* ── Left: text ──────────────────────────── */}
            <div>
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border"
                style={{
                  borderColor: "var(--color-accent)",
                  backgroundColor: "var(--color-accent-soft)",
                  color: "var(--color-accent)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span className="label-mono">Available for work</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Hy
                <br />
                <span style={{ color: "var(--color-accent)" }}>Menghour.</span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
                className="label-mono text-base mb-5"
                style={{ color: "var(--color-text-secondary)", letterSpacing: "0.18em" }}
              >
                Front-End & Mobile Developer
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
                className="text-lg max-w-lg leading-relaxed mb-10"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Building responsive web and cross-platform mobile apps with{" "}
                <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  Vue.js · Ionic · React · TypeScript
                </span>
                . Blending frontend development with IT systems support and proactive problem solving.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.44 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm"
                  style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-accent)")
                  }
                >
                  View projects
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>

                <a
                  href="/Hy_Meng_Hour_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-secondary)",
                    backgroundColor: "var(--color-surface)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Download CV
                </a>

                <div className="flex items-center gap-2 ml-1">
                  {[
                    { icon: GithubLogoIcon,   href: "https://github.com",   label: "GitHub" },
                    { icon: LinkedinLogoIcon, href: "https://linkedin.com", label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2.5 rounded-lg border transition-all duration-200"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-muted)",
                        backgroundColor: "var(--color-surface)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                        e.currentTarget.style.color = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.color = "var(--color-text-muted)";
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right: profile photo ─────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Accent ring behind photo */}
                <div
                  className="absolute -inset-3 rounded-2xl opacity-20"
                  style={{ background: "var(--color-accent)" }}
                />
                {/* Corner accents */}
                <div
                  className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg"
                  style={{ borderColor: "var(--color-accent)" }}
                />
                <div
                  className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
                  style={{ borderColor: "var(--color-accent)" }}
                />

                <img
                  src={profileImg}
                  alt="Hy Menghour — Front-End & Mobile Developer"
                  className="relative w-[340px] h-[400px] object-cover object-top rounded-2xl shadow-xl"
                  style={{ border: "2px solid var(--color-border)" }}
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
                  className="absolute -bottom-4 -left-6 px-4 py-2.5 rounded-xl shadow-lg border"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <span
                    className="label-mono block mb-0.5"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Available
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Open to opportunities
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span className="label-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDownIcon size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT SNAPSHOT
      ══════════════════════════════════════════════════ */}
      <section
        className="py-28 px-6 border-t"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <SectionLabel>About me</SectionLabel>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Crafting modern interfaces,{" "}
              <span style={{ color: "var(--color-accent)" }}>web & mobile.</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              I'm Hy Menghour — a front-end and mobile developer blending modern UI development
              (Vue.js, Ionic, React) with strong operational problem-solving and IT infrastructure experience.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              I focus on delivering scalable, clean, and user-friendly products: from cross-platform
              mobile apps for iOS/Android to data-dense enterprise dashboards with PrimeVue and Tailwind CSS.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200"
              style={{ color: "var(--color-accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
            >
              More about me
              <ArrowUpRightIcon size={16} />
            </Link>
          </RevealSection>

          {/* Stats */}
          <RevealSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+",   label: "Years in IT & Dev" },
                { value: "100%", label: "Focus on UI/UX" },
                { value: "5+",   label: "Core frameworks" },
                { value: "∞",    label: "Continuous learning" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-6 rounded-xl border"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface-2)",
                  }}
                >
                  <div
                    className="text-4xl font-black mb-1"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {value}
                  </div>
                  <div className="label-mono" style={{ color: "var(--color-text-muted)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STACK
      ══════════════════════════════════════════════════ */}
      <section
        className="py-28 px-6 border-t pattern-dots"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionLabel>Tech stack</SectionLabel>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-16"
              style={{ color: "var(--color-text-primary)" }}
            >
              Tools I work with.
            </h2>
          </RevealSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {STACK_GROUPS.map(({ icon: Icon, label, items }, i) => (
              <RevealSection key={label} delay={i * 0.08}>
                <div
                  className="p-7 rounded-xl border h-full"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  {/* Header */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: "var(--color-accent-soft)" }}
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span className="label-mono block mb-4" style={{ color: "var(--color-accent)" }}>
                    {label}
                  </span>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════════════ */}
      <section
        className="py-28 px-6 border-t"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Work</SectionLabel>
              <h2
                className="text-4xl sm:text-5xl font-black tracking-tight leading-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                Selected projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 label-mono transition-colors duration-200"
              style={{ color: "var(--color-accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
            >
              All projects
              <ArrowUpRightIcon size={14} />
            </Link>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map(({ slug, title, description, tags }, i) => (
              <RevealSection key={slug} delay={i * 0.08}>
                <article
                  className="p-7 rounded-xl border flex flex-col h-full transition-all duration-300 cursor-pointer group"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface-2)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-accent)";
                    el.style.boxShadow = "0 4px 24px 0 rgba(77,42,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <span
                    className="label-mono mb-4 block"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {slug}
                  </span>
                  <h3
                    className="text-xl font-bold mb-3 leading-snug"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: "var(--color-accent-soft)",
                          color: "var(--color-accent)",
                          border: "1px solid transparent",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EXPERIENCE TIMELINE
      ══════════════════════════════════════════════════ */}
      <section
        className="py-28 px-6 border-t pattern-dots"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionLabel>Experience</SectionLabel>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-16"
              style={{ color: "var(--color-text-primary)" }}
            >
              Where I've worked.
            </h2>
          </RevealSection>

          <div className="relative">
            <div
              className="absolute left-[7px] top-0 bottom-0 w-px"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            <div className="flex flex-col gap-12 pl-10">
              {TIMELINE.map(({ period, role, company, summary }, i) => (
                <RevealSection key={i} delay={i * 0.1}>
                  <div className="relative">
                    <div
                      className="absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                      style={{
                        backgroundColor: "var(--color-surface)",
                        borderColor: "var(--color-accent)",
                      }}
                    />
                    <span
                      className="label-mono block mb-1"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {period}
                    </span>
                    <h3
                      className="text-xl font-bold mb-0.5"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {role}
                    </h3>
                    <span
                      className="label-mono block mb-3"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {company}
                    </span>
                    <p
                      className="text-sm leading-relaxed max-w-xl"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {summary}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>

          <RevealSection className="mt-12">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 label-mono transition-colors duration-200"
              style={{ color: "var(--color-accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
            >
              Full experience
              <ArrowRightIcon size={14} />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════════════ */}
      <section
        className="py-28 px-6 border-t"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <RevealSection>
            <SectionLabel>Let's talk</SectionLabel>
            <h2
              className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Have a project in mind?
            </h2>
            <p
              className="text-lg max-w-lg mx-auto mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              I'm open to frontend & mobile development roles, collaborative projects,
              and opportunities to build high-performance applications together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 shadow-sm"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent)")
              }
            >
              Start a conversation
              <ArrowUpRightIcon size={18} weight="bold" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
