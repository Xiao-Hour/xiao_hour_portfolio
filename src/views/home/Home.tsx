// ==========================================
// Imports
// ==========================================
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  SparkleIcon,
  BrowserIcon,
  DatabaseIcon,
  DeviceMobileIcon,
  CopyIcon,
  CheckIcon,
  DownloadSimpleIcon,
  LightningIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GearIcon,
} from "@phosphor-icons/react";

import profileImg from "../../assets/image/profile.png";
import backgroundImg from "../../assets/image/hero-banner.jpg";

// ==========================================
// Animation Helpers
// ==========================================
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="label-mono inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4"
      style={{
        color: "var(--color-accent)",
        borderColor: "rgba(77, 42, 0, 0.15)",
        backgroundColor: "var(--color-accent-soft)",
      }}
    >
      <SparkleIcon size={12} weight="fill" />
      {children}
    </span>
  );
}

// ==========================================
// Static Data
// ==========================================
const MARQUEE_ITEMS = [
  "Vue.js 3",
  "Ionic Framework",
  "TypeScript",
  "Tailwind CSS",
  "React JS",
  "PrimeVue SPA",
  "REST API Integration",
  "Cross-Platform Android & iOS",
  "POS Architecture",
  "Database Querying & Backup",
  "Windows Systems Administration",
  "Disciplined Git Workflow",
  "QA Staging Deployments",
  "Bilingual Operations (Khmer/English)",
];

const BENTO_SKILLS = [
  {
    icon: BrowserIcon,
    title: "React & Vue.js",
    tagline: "Core Frameworks",
    description:
      "Architecting interactive, reactive single-page web applications with React and Vue.js (PrimeVue). Expert in modular components, data tables, modal dialogs, charts, and rigorous form validation with TypeScript.",
    tags: ["React", "Vue.js 3", "PrimeVue", "TypeScript", "Tailwind CSS", "REST APIs"],
    gradient: "from-amber-600/10 to-yellow-500/5",
  },
  {
    icon: DeviceMobileIcon,
    title: "Ionic (iOS & Android)",
    tagline: "Cross-Platform Mobile",
    description:
      "Developing high-performance cross-platform mobile applications using Ionic Framework. Engineered for fast load times, smooth gestures, responsive screen layouts, and consistent UI/UX across iOS and Android devices.",
    tags: ["Ionic Framework", "iOS", "Android", "Capacitor", "Vue.js", "Mobile UX"],
    gradient: "from-amber-500/10 to-orange-500/5",
  },
  {
    icon: DatabaseIcon,
    title: "IT Systems & Database",
    tagline: "Infrastructure & Data Handling",
    description:
      "Solid background in point-of-sale (POS) systems, Windows OS administration, network maintenance, database backup/restore operations, and SQL table queries.",
    tags: ["POS Systems", "SQL Queries", "Database Backup", "Windows OS", "Hardware"],
    gradient: "from-stone-500/10 to-stone-400/5",
  },
  {
    icon: ShieldCheckIcon,
    title: "Disciplined Engineering",
    tagline: "Collaboration & Quality Assurance",
    description:
      "Building user stories precisely to brief, staging QA testing, rigorous Git version control, and bridging technical problem solving with high-volume customer communication.",
    tags: ["Git Workflow", "Staging Deploy", "QA Debugging", "Problem Solving"],
    gradient: "from-amber-700/10 to-amber-600/5",
  },
];

const FEATURED_PROJECTS = [
  {
    slug: "01",
    category: "Mobile Application",
    title: "Cross-Platform Mobile App (Android & iOS)",
    icon: DeviceMobileIcon,
    highlight: "High Performance • Native Look & Feel",
    description:
      "Cross-platform mobile application developed with Ionic Framework, delivering seamless performance, optimized startup times, and consistent UI across Android and iOS devices.",
    tags: ["Ionic Framework", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "02",
    category: "Enterprise SPA",
    title: "PrimeVue Enterprise Dashboard",
    icon: ChartBarIcon,
    highlight: "Dynamic Data Tables & Interactive Charts",
    description:
      "Full-featured single-page application dashboard featuring interactive data tables, dialogs, charts, complex form validation, and reliable REST API data integration.",
    tags: ["Vue.js", "PrimeVue", "TypeScript", "REST API"],
  },
  {
    slug: "03",
    category: "System Platform",
    title: "POS & Retail Operations Platform",
    icon: GearIcon,
    highlight: "Hardware Setup & Database Maintenance",
    description:
      "Complete POS system installation, custom billing document formatting, automated database backups, SQL table queries, and dedicated on-site client technical training.",
    tags: ["POS Systems", "Database Management", "SQL", "Windows"],
  },
];

const TIMELINE = [
  {
    period: "Oct 2024 – Present",
    role: "Frontend Developer",
    company: "IT Khmer",
    type: "Full-time",
    summary:
      "Architecting cross-platform mobile apps using Ionic Framework, designing rich PrimeVue dashboard SPAs, and creating responsive UIs with Tailwind CSS and TypeScript.",
  },
  {
    period: "May – Aug 2026",
    role: "Software Engineer",
    company: "Hunter Group",
    type: "Full-time",
    summary:
      "Built features based on user stories, deployed to staging QA environments, addressed bug reports promptly, and maintained clean Git version control.",
  },
  {
    period: "2022 – 2023",
    role: "IT Officer (IT Support)",
    company: "ESTC Computer",
    type: "Full-time",
    summary:
      "Installed and maintained POS systems, managed database backups & queries, resolved hardware issues, and provided dedicated client technical support.",
  },
];

// ==========================================
// Home Component
// ==========================================
export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hymenghour1701@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — Dynamic luxury editorial layout
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b" style={{ borderColor: "var(--color-border)" }}>
        {/* Background image & refined warm gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={backgroundImg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.85) 45%, rgba(250,248,245,0.40) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto w-full px-6 pt-28 pb-20">
          <div className="grid lg:grid-cols-[1.1fr_420px] gap-12 lg:gap-16 items-center">
            {/* ── Left Column: Intro & Actions ─────────── */}
            <div>
              {/* Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-8 border glass-panel shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="label-mono text-xs font-semibold" style={{ color: "var(--color-accent)" }}>
                  Available for Work • Siem Reap, KH (UTC+7)
                </span>
              </motion.div>

              {/* Title & Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              >
                <span
                  className="label-mono text-sm block mb-3 font-bold tracking-widest uppercase"
                  style={{ color: "var(--color-amber)", letterSpacing: "0.22em" }}
                >
                  Front-End & Mobile Developer
                </span>
                <h1
                  className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Hy
                  <br />
                  <span className="gradient-accent-text">Menghour.</span>
                </h1>
              </motion.div>

              {/* Pitch */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.25 }}
                className="text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Specializing in core frameworks{" "}
                <span className="font-bold" style={{ color: "var(--color-text-primary)" }}>
                  React & Vue.js
                </span>
                , and high-performance cross-platform mobile apps with{" "}
                <span className="font-bold" style={{ color: "var(--color-text-primary)" }}>
                  Ionic (iOS & Android)
                </span>
                . Grounded in solid IT infrastructure support and proactive problem solving.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.38 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
                  style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-accent)")
                  }
                >
                  Explore Work
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>

                <a
                  href="/Hy_Meng_Hour_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border glass-card transition-all duration-200"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <DownloadSimpleIcon size={16} weight="bold" style={{ color: "var(--color-accent)" }} />
                  Download CV
                </a>

                {/* Interactive Copy Email */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer"
                  style={{
                    borderColor: copiedEmail ? "#10b981" : "var(--color-border)",
                    backgroundColor: copiedEmail ? "rgba(16, 185, 129, 0.1)" : "var(--color-surface)",
                    color: copiedEmail ? "#065f46" : "var(--color-text-secondary)",
                  }}
                  title="Click to copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <CheckIcon size={16} weight="bold" className="text-emerald-600" />
                      <span className="text-xs font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={16} weight="bold" />
                      <span className="text-xs">Copy Email</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            {/* ── Right Column: Interactive Portrait Card ──── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                {/* Ambient glow behind card */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: "radial-gradient(circle, #8D4900 0%, #4D2A00 60%, transparent 80%)",
                  }}
                />

                {/* Main Card Frame */}
                <div
                  className="relative rounded-3xl p-3 glass-card"
                  style={{
                    borderColor: "rgba(77, 42, 0, 0.15)",
                    boxShadow: "0 20px 40px -15px rgba(77, 42, 0, 0.18)",
                  }}
                >
                  <div className="overflow-hidden rounded-2xl relative">
                    <img
                      src={profileImg}
                      alt="Hy Menghour — Front-End & Mobile Developer"
                      className="w-[320px] sm:w-[360px] h-[410px] sm:h-[450px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Subtle bottom gradient on photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Floating Widget 1: Top Right */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
                    className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl border glass-panel shadow-lg flex items-center gap-2.5"
                    style={{ borderColor: "rgba(77, 42, 0, 0.15)" }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-accent-soft)" }}
                    >
                      <DeviceMobileIcon size={16} weight="bold" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <div>
                      <span className="label-mono text-[9px] block text-stone-500 font-bold">Cross-Platform</span>
                      <span className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>
                        Ionic (iOS & Android)
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating Widget 2: Bottom Left */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.5, ease: EASE }}
                    className="absolute -bottom-5 -left-5 px-4 py-3 rounded-xl border glass-panel shadow-lg flex items-center gap-3"
                    style={{ borderColor: "rgba(77, 42, 0, 0.15)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-amber-soft)" }}
                    >
                      <LightningIcon size={18} weight="fill" style={{ color: "var(--color-amber)" }} />
                    </div>
                    <div>
                      <span className="label-mono text-[10px] block" style={{ color: "var(--color-amber)" }}>
                        Core Frameworks
                      </span>
                      <span className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>
                        React & Vue.js
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
          <span className="label-mono text-[10px]" style={{ color: "var(--color-text-muted)" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDownIcon size={14} style={{ color: "var(--color-accent)" }} />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INFINITE MARQUEE TICKER
      ══════════════════════════════════════════════════ */}
      <section
        className="py-4 border-b overflow-hidden"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface-2)",
        }}
      >
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span
                className="label-mono text-xs font-bold tracking-wider"
                style={{ color: "var(--color-accent)" }}
              >
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-amber)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CORE EXPERTISE — Modern Bento Grid
      ══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 border-b pattern-dots" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Capabilities</SectionLabel>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Engineered for quality,{" "}
              <span className="gradient-accent-text">crafted for users.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Combining modern frontend architectures with deep technical support insights to build reliable software solutions.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {BENTO_SKILLS.map(({ icon: Icon, title, tagline, description, tags }, i) => (
              <RevealSection key={title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border glass-card h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        borderColor: "rgba(77, 42, 0, 0.15)",
                      }}
                    >
                      <Icon size={24} weight="duotone" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <span className="label-mono text-xs" style={{ color: "var(--color-amber)" }}>
                      {tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--color-text-secondary)" }}>
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "var(--color-border-soft)" }}>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono text-[10px] px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          color: "var(--color-text-secondary)",
                          border: "1px solid var(--color-border-soft)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 border-b" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Selected Works</SectionLabel>
              <h2
                className="text-4xl sm:text-5xl font-black tracking-tight leading-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                Featured projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 label-mono font-bold transition-all duration-200"
              style={{ color: "var(--color-accent)" }}
            >
              View all projects
              <ArrowUpRightIcon size={16} weight="bold" />
            </Link>
          </RevealSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map(({ slug, category, title, icon: ProjectIcon, highlight, description, tags }, i) => (
              <RevealSection key={slug} delay={i * 0.1}>
                <article className="p-8 rounded-2xl border glass-card h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="label-mono font-black text-sm" style={{ color: "var(--color-accent)" }}>
                      {slug}
                    </span>
                    <span
                      className="label-mono text-[10px] px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: "var(--color-accent-soft)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-2 leading-snug transition-colors duration-200 group-hover:text-amber-800"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {title}
                  </h3>

                  <div className="mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: "rgba(180, 83, 9, 0.08)", color: "#b45309" }}
                    >
                      <ProjectIcon size={14} weight="bold" />
                      {highlight}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--color-text-secondary)" }}>
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-5 border-t" style={{ borderColor: "var(--color-border-soft)" }}>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono text-[10px] px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          color: "var(--color-text-muted)",
                          border: "1px solid var(--color-border-soft)",
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
          EXPERIENCE SNAPSHOT
      ══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 border-b pattern-dots" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-canvas)" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="mb-14">
            <SectionLabel>Career</SectionLabel>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Practical experience.
            </h2>
            <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
              Delivering impact in software engineering, frontend web & mobile platforms, and IT infrastructure.
            </p>
          </RevealSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {TIMELINE.map(({ period, role, company, type, summary }, i) => (
              <RevealSection key={company} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border glass-card h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="label-mono text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {period}
                    </span>
                    <span className="label-mono text-[10px] px-2 py-0.5 rounded border" style={{ borderColor: "var(--color-border-soft)", backgroundColor: "var(--color-surface-2)", color: "var(--color-text-secondary)" }}>
                      {type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
                    {role}
                  </h3>
                  <span className="label-mono text-xs block mb-4 font-bold" style={{ color: "var(--color-accent)" }}>
                    {company}
                  </span>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-secondary)" }}>
                    {summary}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 label-mono font-bold transition-all duration-200"
              style={{ color: "var(--color-accent)" }}
            >
              View detailed career history & education
              <ArrowRightIcon size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HIGH-IMPACT CALL TO ACTION
      ══════════════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-5xl mx-auto rounded-3xl p-10 sm:p-16 border glass-card text-center relative overflow-hidden" style={{ borderColor: "rgba(77, 42, 0, 0.18)" }}>
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: "var(--color-amber)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          <SectionLabel>Let's collaborate</SectionLabel>
          <h2
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Ready to bring your ideas to life?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Whether you need a cross-platform mobile app, a modern Vue/React web application, or technical IT expertise — let's build something exceptional together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-md"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent)")
              }
            >
              Start a Conversation
              <ArrowUpRightIcon size={18} weight="bold" />
            </Link>

            <a
              href="mailto:hymenghour1701@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border glass-card transition-all duration-200"
              style={{ color: "var(--color-text-primary)" }}
            >
              hymenghour1701@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
