// ==========================================
// Imports
// ==========================================
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SparkleIcon } from "@phosphor-icons/react";

// ==========================================
// Animation Helper
// ==========================================
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
    <span className="label-mono inline-flex items-center gap-2 mb-4" style={{ color: "var(--color-accent)" }}>
      <SparkleIcon size={12} weight="fill" />
      {children}
    </span>
  );
}

// ==========================================
// Static Data
// ==========================================
const EXPERIENCE = [
  {
    period: "Oct 2024 – Present",
    role: "Frontend Developer",
    company: "IT Khmer",
    url: "#",
    type: "Full-time",
    bullets: [
      "Developed cross-platform mobile application (Android/iOS) using Ionic Framework, ensuring consistent UI/UX across devices.",
      "Optimized application performance, reduced load times, and improved overall UI responsiveness.",
      "Debugged, tested, and maintained frontend code to guarantee stability and scalability.",
      "Designed responsive layouts using Tailwind CSS, HTML5, and TypeScript.",
      "Managed robust form validation, user input handling, and stateful data flow.",
      "Implemented rich UI features using PrimeVue components such as data tables, dialogs, forms, charts, and dashboards.",
    ],
    stack: ["Vue.js", "PrimeVue", "Ionic Framework", "TypeScript", "Tailwind CSS", "Android", "iOS"],
  },
  {
    period: "May – Aug 2026",
    role: "Software Engineer",
    company: "Hunter Group",
    url: "#",
    type: "Full-time",
    bullets: [
      "Built features as assigned by leadership, following user stories and functional briefs.",
      "Deployed completed features to staging environments for QA testing and user acceptance.",
      "Responded to bug reports from QA: fixed issues, re-deployed to staging, and notified QA for re-verification.",
      "Strictly maintained clean version control and followed Git branching guidelines.",
      "Never deployed directly to production without team lead verification and sign-off.",
    ],
    stack: ["Frontend", "Git", "QA Collaboration", "Staging Deploy", "Debugging"],
  },
  {
    period: "2022 – 2023",
    role: "IT Officer (IT Support)",
    company: "ESTC Computer",
    url: "#",
    type: "Full-time",
    bullets: [
      "Booted and configured Windows operating systems and activated licensed software.",
      "Installed and updated POS systems; formatted and prepared POS billing documents.",
      "Troubleshot and resolved system and hardware issues, providing dedicated on-site client technical support.",
      "Conducted system trainings and provided full technical support to business clients.",
      "Handled basic database management tasks including backup, restore, and SQL table queries.",
      "Leveraged strong internet research skills for hardware/software troubleshooting and problem resolution.",
    ],
    stack: ["Windows OS", "POS Systems", "Database Management", "SQL", "Hardware Support", "Client Training"],
  },
  {
    period: "Jan – Mar 2021",
    role: "Freelance Customer Service",
    company: "Foodpanda",
    url: "#",
    type: "Freelance",
    bullets: [
      "Assisted customers with orders, delivery issues, and account inquiries via live chat and phone.",
      "Resolved customer complaints professionally to maintain high satisfaction rates.",
      "Coordinated with delivery riders to resolve real-time logistics and dispatch problems.",
      "Maintained accurate records and operational dispute logs.",
    ],
    stack: ["Customer Operations", "Real-Time Problem Solving", "Communication", "Dispute Resolution"],
  },
  {
    period: "Feb – Mar 2020",
    role: "Intern – Info Desk & Public Announcements",
    company: "Siem Reap International Airport",
    url: "#",
    type: "Internship",
    bullets: [
      "Provided travel information and assistance to domestic and international passengers.",
      "Made public announcements regarding flight schedules, boarding times, and safety guidelines.",
      "Guided passengers to correct terminals, check-in counters, and airport facilities.",
      "Supported airport teams in high-volume daily operations and passenger service tasks.",
    ],
    stack: ["Aviation Operations", "Public Announcements", "Bilingual (Khmer/English)", "Customer Support"],
  },
];

const EDUCATION = [
  {
    period: "2022 – 2025",
    degree: "Bachelor's Degree of Science and Technology, Major: Programmer",
    institution: "Build Bright University (Siem Reap Campus)",
    note: "Comprehensive studies in computer science, software programming, system development, and database architecture.",
  },
  {
    period: "2019 – 2020",
    degree: "Certificate II, ASEAN Level 1 in Travel Agency-Operations",
    institution: "Ecole d’Hôtellerie et de Tourisme Paul Dubrule",
    note: "Professional training in operational protocols, international customer service, and organizational coordination.",
  },
  {
    period: "2018 – 2019",
    degree: "High School Diploma",
    institution: "Hun Sen Siem Reap High School",
    note: "Secondary general education certificate.",
  },
  {
    period: "2017 – 2018",
    degree: "Certificate of Computer Skills (Word, Excel, PowerPoint)",
    institution: "JWOC (Journeys Within Our Community)",
    note: "Applied computer literacy, data analysis, documentation, and office productivity tools.",
  },
  {
    period: "2016 – 2019",
    degree: "Certificate of English Grade 8",
    institution: "Florida International School",
    note: "Proficiency in English communication, writing, and professional correspondence.",
  },
];

const REFERENCES = [
  {
    name: "Mr. Chheng Kimchhay",
    company: "ACLEDA Bank Plc",
    position: "Junior Software Engineer",
    contact: "067 77 57 56",
  },
];

// ==========================================
// Experience Component
// ==========================================
export default function Experience() {
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
            <SectionLabel>Career</SectionLabel>
            <h1
              className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Experience.
            </h1>
            <p className="text-xl max-w-xl leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Hands-on experience across frontend & cross-platform mobile development, IT operations, and systems support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────── */}
      <section
        className="py-24 px-6 border-b"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
              style={{ backgroundColor: "var(--color-border)" }}
            />

            <div className="flex flex-col gap-16">
              {EXPERIENCE.map(({ period, role, company, type, bullets, stack }, i) => (
                <Reveal key={i}>
                  <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* Left: period (desktop) */}
                    <div className="hidden md:flex flex-col items-end pr-10 pt-1">
                      <span className="label-mono" style={{ color: "var(--color-text-muted)" }}>{period}</span>
                      <span
                        className="label-mono mt-1 px-2.5 py-0.5 rounded"
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          color: "var(--color-text-muted)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {type}
                      </span>
                    </div>

                    {/* Dot */}
                    <div
                      className="absolute left-[2px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full border-2"
                      style={{ backgroundColor: "var(--color-canvas)", borderColor: "var(--color-accent)" }}
                    />

                    {/* Right: content */}
                    <div className="pl-8 md:pl-10">
                      <div className="p-7 rounded-2xl border glass-card">
                        {/* Mobile period */}
                        <span className="label-mono block mb-2 md:hidden" style={{ color: "var(--color-text-muted)" }}>
                          {period} · {type}
                        </span>

                        <h2
                          className="text-2xl font-bold mb-1"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {role}
                        </h2>
                        <span
                          className="inline-flex items-center gap-1 label-mono mb-5 font-bold"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {company}
                        </span>

                        <ul className="flex flex-col gap-2.5 mb-6">
                          {bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-amber)" }} />
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "var(--color-border-soft)" }}>
                          {stack.map((s) => (
                            <span
                              key={s}
                              className="label-mono text-[10px] px-2.5 py-1 rounded-md"
                              style={{
                                backgroundColor: "var(--color-surface-2)",
                                color: "var(--color-text-muted)",
                                border: "1px solid var(--color-border-soft)",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────── */}
      <section className="py-24 px-6 border-b" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>Education</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight mb-10" style={{ color: "var(--color-text-primary)" }}>
              Academic background & training.
            </h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {EDUCATION.map(({ period, degree, institution, note }) => (
              <Reveal key={degree}>
                <div
                  className="p-7 rounded-2xl border glass-card"
                >
                  <span className="label-mono block mb-2 font-bold" style={{ color: "var(--color-amber)" }}>{period}</span>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>{degree}</h3>
                  <span className="label-mono block mb-3 font-semibold" style={{ color: "var(--color-accent)" }}>{institution}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── References ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-canvas)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel>References</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight mb-10" style={{ color: "var(--color-text-primary)" }}>
              Professional reference.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFERENCES.map(({ name, company, position, contact }) => (
              <Reveal key={name}>
                <div
                  className="p-7 rounded-2xl border glass-card"
                >
                  <span className="label-mono block mb-2 font-bold" style={{ color: "var(--color-amber)" }}>Verified Reference</span>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>{name}</h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-accent)" }}>{position}</p>
                  <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>{company}</p>
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--color-border-soft)" }}>
                    <span className="label-mono text-xs" style={{ color: "var(--color-text-muted)" }}>Contact:</span>
                    <a
                      href={`tel:${contact.replace(/\s+/g, '')}`}
                      className="text-sm font-bold transition-colors hover:underline"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {contact}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
