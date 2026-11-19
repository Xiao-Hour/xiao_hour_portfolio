// ==========================================
// Imports
// ==========================================
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRightIcon,
  SparkleIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";

import profileImg from "../../assets/image/profile.png";

// ==========================================
// Animation
// ==========================================
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: EASE }}
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
const VALUES = [
  {
    title: "Technical Precision",
    body: "Delivering clean, responsive code with solid version control in Git, systematic QA debugging, and seamless REST API data flow.",
  },
  {
    title: "User-First Experience",
    body: "Prioritizing fluid UX and responsive performance across iOS, Android, and Desktop, ensuring apps are fast and intuitive.",
  },
  {
    title: "Proactive Problem-Solving",
    body: "Leveraging hands-on IT support roots to troubleshoot issues effectively, bridge cross-functional teams, and prevent blockers early.",
  },
  {
    title: "Continuous Learning",
    body: "Always staying curious — actively expanding skills in new frameworks, frontend architecture, and modern mobile tooling.",
  },
];

const INTERESTS = [
  "Vue.js & PrimeVue",
  "Ionic Framework",
  "Cross-Platform Mobile",
  "Tailwind CSS",
  "TypeScript",
  "REST APIs",
  "POS & Database Systems",
  "Travel & Aviation",
];

// ==========================================
// About Component
// ==========================================
export default function About() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────── */}
      <section
        className="pt-28 pb-20 px-6 border-b"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-canvas)",
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>About me</SectionLabel>
            <h1
              className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              Building interfaces with
              <br />
              <span className="gradient-accent-text">passion & precision.</span>
            </h1>
            <p
              className="text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Hi — I'm{" "}
              <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                Hy Menghour
              </span>
              , a Front-End & Mobile Developer based in Siem Reap, Cambodia. I build
              fast, responsive applications with Vue.js, React, Ionic Framework, and Tailwind CSS,
              backed by hands-on IT operations and technical troubleshooting experience.
            </p>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative group">
              <div
                className="absolute -inset-3 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-35"
                style={{ background: "radial-gradient(circle, #8D4900 0%, #4D2A00 70%, transparent 80%)" }}
              />
              <div className="relative rounded-2xl p-2 glass-card">
                <img
                  src={profileImg}
                  alt="Hy Menghour"
                  className="w-full h-[420px] object-cover object-top rounded-xl shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Story + Quick Facts ────────────────────────── */}
      <section
        className="py-24 px-6 border-b"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionLabel>My story</SectionLabel>
            <div
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                My journey blends hands-on IT infrastructure and technical operations with modern frontend
                engineering. Starting in IT support and systems management, I built a deep appreciation
                for how systems operate under the hood — configuring networks, Windows systems, POS software,
                and relational databases.
              </p>
              <p>
                As I expanded into software engineering, I focused on building scalable, responsive user
                interfaces. Today, I develop cross-platform mobile apps using Ionic Framework (Android & iOS)
                and rich web applications using Vue.js, PrimeVue, React, and Tailwind CSS.
              </p>
              <p>
                My background in customer service and airport operations gave me strong communication,
                crisis management, and collaboration skills. Whether building user stories, debugging alongside
                QA, or integrating REST APIs, I bridge the gap between technical rigor and real-world user needs.
              </p>
            </div>
          </Reveal>

          {/* Quick facts card */}
          <Reveal>
            <div
              className="p-8 rounded-2xl border glass-card"
            >
              <span
                className="label-mono block mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                Quick facts
              </span>
              <ul className="flex flex-col gap-4">
                {[
                  ["Name",       "Hy Menghour"],
                  ["Role",       "Front-End & Mobile Developer"],
                  ["Location",   "Siem Reap City, Cambodia"],
                  ["Frontend",   "Vue.js (PrimeVue), Ionic, React, Tailwind"],
                  ["Languages",  "TypeScript, JavaScript, HTML, CSS"],
                  ["Spoken",     "Khmer (Native), English"],
                  ["Education",  "B.Sc. Computer Science (BBU)"],
                  ["Open to",    "Full-time, contract, frontend roles"],
                ].map(([key, val]) => (
                  <li key={key} className="flex gap-4 text-sm">
                    <span
                      className="label-mono w-28 flex-shrink-0"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {key}
                    </span>
                    <span style={{ color: "var(--color-text-secondary)" }}>{val}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/Hy_Meng_Hour_CV.pdf"
                download
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-200"
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
                <DownloadSimpleIcon size={16} />
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────── */}
      <section
        className="py-24 px-6 border-b pattern-dots"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-canvas)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>How I work</SectionLabel>
            <h2
              className="text-4xl font-black tracking-tight leading-tight mb-12"
              style={{ color: "var(--color-text-primary)" }}
            >
              Values & working style.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ title, body }, i) => (
              <Reveal key={title}>
                <div
                  className="p-7 rounded-2xl border glass-card h-full flex flex-col"
                >
                  <span
                    className="label-mono font-bold block mb-3 text-sm"
                    style={{ color: "var(--color-amber)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interests ─────────────────────────────────── */}
      <section
        className="py-24 px-6 border-b"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Outside work</SectionLabel>
            <h2
              className="text-4xl font-black tracking-tight mb-10"
              style={{ color: "var(--color-text-primary)" }}
            >
              Interests.
            </h2>
            <div className="flex flex-wrap gap-3">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-lg border text-sm font-medium"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface-2)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--color-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p
              className="text-xl mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Want to work together?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-3xl font-black tracking-tight transition-colors duration-200"
              style={{ color: "var(--color-text-primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-primary)")
              }
            >
              Let's build something.
              <ArrowUpRightIcon size={32} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
