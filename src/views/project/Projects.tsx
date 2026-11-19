// ==========================================
// Imports
// ==========================================
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowUpRightIcon,
    GithubLogoIcon,
    SparkleIcon,
} from "@phosphor-icons/react";

// ==========================================
// Types
// ==========================================
interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    category: string;
    githubHref?: string;
    liveHref?: string;
    year: string;
}

// ==========================================
// Static Data
// ==========================================
const PROJECTS: Project[] = [
    {
        slug: "01",
        title: "Cross-Platform Mobile App (Android & iOS)",
        description:
            "Cross-platform mobile application developed with Ionic Framework, delivering consistent UI/UX.",
        longDescription:
            "Developed a cross-platform mobile app for Android and iOS using Ionic Framework and Vue.js. Optimized load times, refined touch interactions, handled complex forms and validations, and ensured seamless responsiveness across different screen sizes.",
        tags: ["Ionic Framework", "Vue.js", "TypeScript", "Android", "iOS", "Tailwind CSS"],
        category: "Mobile",
        githubHref: "https://github.com",
        liveHref: "#",
        year: "2025",
    },
    {
        slug: "02",
        title: "PrimeVue Enterprise Dashboard SPA",
        description:
            "Feature-rich single-page application dashboard featuring interactive data tables, dialogs, and charts.",
        longDescription:
            "Engineered an enterprise-grade SPA with Vue.js and the PrimeVue component library. Integrated dynamic data tables, modal dialogs, real-time charts, advanced form validations, and REST API consumption.",
        tags: ["Vue.js", "PrimeVue", "TypeScript", "Tailwind CSS", "REST API"],
        category: "Web App",
        githubHref: "https://github.com",
        year: "2025",
    },
    {
        slug: "03",
        title: "POS & Retail Business Platform",
        description:
            "Point-of-sale system deployment, billing document template design, and database maintenance.",
        longDescription:
            "Installed and configured POS systems for retail and hospitality clients. Formatted billing documents, handled database backups, restores, and SQL table queries, while delivering full on-site staff training.",
        tags: ["POS Systems", "Database Management", "SQL", "Windows", "Hardware"],
        category: "System",
        githubHref: "https://github.com",
        year: "2023",
    },
    {
        slug: "04",
        title: "Developer Portfolio & Interactive UI",
        description:
            "Modern developer portfolio built with React 19, TypeScript, Tailwind CSS v4, and Framer Motion.",
        longDescription:
            "Designed and built an ultra-fast, accessible developer portfolio featuring fluid page animations, custom color system, interactive project filters, and clean typography.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
        category: "Web App",
        githubHref: "https://github.com",
        liveHref: "#",
        year: "2026",
    },
    {
        slug: "05",
        title: "Real-Time Operations & Support Hub",
        description:
            "Customer service workflow coordination, rider dispatch management, and dispute resolution.",
        longDescription:
            "Managed real-time communication channels, resolved customer complaints with high satisfaction, coordinated with dispatch riders, and maintained systematic resolution records.",
        tags: ["Operations", "Customer Support", "Real-Time Resolution", "Communication"],
        category: "Operations",
        githubHref: "https://github.com",
        year: "2021",
    },
    {
        slug: "06",
        title: "Airport Flight Information & Announcement System",
        description:
            "Flight status announcements, terminal guidance, and operational coordination at Siem Reap International Airport.",
        longDescription:
            "Conducted bilingual public announcements regarding flight schedules and boarding gates, while providing front-line information services to domestic and international travelers.",
        tags: ["Aviation Ops", "Public Announcement", "Khmer", "English", "Coordination"],
        category: "Operations",
        githubHref: "https://github.com",
        year: "2020",
    },
];

const CATEGORIES = [
    "All",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

// ==========================================
// Animation Helpers
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
            transition={{ duration: 0.6, ease: EASE }}
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
// Projects Component
// ==========================================
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeFilter);

    return (
        <>
            {/* ── Page Hero ───────────────────────────────────── */}
            <section
                className="pt-28 pb-16 px-6 border-b"
                style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-canvas)",
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <SectionLabel>Work</SectionLabel>
                        <h1
                            className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-6"
                            style={{ color: "var(--color-text-primary)" }}
                        >
                            Projects.
                        </h1>
                        <p
                            className="text-xl max-w-xl leading-relaxed"
                            style={{ color: "var(--color-text-secondary)" }}
                        >
                            A showcase of web applications, cross-platform mobile apps, and IT systems I've built and delivered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Filter Bar ──────────────────────────────────── */}
            <section
                className="sticky top-16 z-40 border-b px-6 py-3.5 glass-panel"
                style={{
                    borderColor: "var(--color-border)",
                }}
            >
                <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className="label-mono px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                            style={{
                                backgroundColor:
                                    activeFilter === cat ? "var(--color-accent)" : "transparent",
                                color:
                                    activeFilter === cat ? "#fff" : "var(--color-text-secondary)",
                                border: `1px solid ${activeFilter === cat ? "var(--color-accent)" : "var(--color-border-soft)"}`,
                                boxShadow: activeFilter === cat ? "0 2px 8px rgba(77, 42, 0, 0.2)" : "none",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Project Grid ────────────────────────────────── */}
            <section
                className="py-16 px-6"
                style={{ backgroundColor: "var(--color-canvas)" }}
            >
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filtered.map(
                                ({
                                    slug,
                                    title,
                                    description,
                                    longDescription,
                                    tags,
                                    category,
                                    liveHref,
                                    githubHref,
                                    year,
                                }) => (
                                    <Reveal key={slug}>
                                        <article
                                            className="group flex flex-col h-full p-8 rounded-2xl border glass-card"
                                        >
                                            {/* Header row */}
                                            <div className="flex items-start justify-between mb-4">
                                                <span
                                                    className="label-mono font-black text-sm"
                                                    style={{ color: "var(--color-accent)" }}
                                                >
                                                    {slug}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className="label-mono text-[10px] px-2 py-0.5 rounded"
                                                        style={{
                                                            backgroundColor: "var(--color-accent-soft)",
                                                            color: "var(--color-accent)",
                                                        }}
                                                    >
                                                        {category}
                                                    </span>
                                                    <span
                                                        className="label-mono text-xs"
                                                        style={{ color: "var(--color-text-muted)" }}
                                                    >
                                                        {year}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h2
                                                className="text-xl font-bold mb-3 leading-snug"
                                                style={{ color: "var(--color-text-primary)" }}
                                            >
                                                {title}
                                            </h2>

                                            {/* Description */}
                                            <p
                                                className="text-sm leading-relaxed flex-1 mb-4"
                                                style={{ color: "var(--color-text-secondary)" }}
                                            >
                                                {longDescription || description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="label-mono px-2.5 py-1 rounded"
                                                        style={{
                                                            backgroundColor: "var(--color-surface-2)",
                                                            color: "var(--color-text-muted)",
                                                            border: "1px solid var(--color-border)",
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div
                                                className="flex items-center gap-4 mt-auto border-t pt-5"
                                                style={{ borderColor: "var(--color-border)" }}
                                            >
                                                {githubHref && (
                                                    <a
                                                        href={githubHref}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 label-mono transition-colors duration-200"
                                                        style={{ color: "var(--color-text-muted)" }}
                                                        onMouseEnter={(e) =>
                                                        (e.currentTarget.style.color =
                                                            "var(--color-text-primary)")
                                                        }
                                                        onMouseLeave={(e) =>
                                                        (e.currentTarget.style.color =
                                                            "var(--color-text-muted)")
                                                        }
                                                    >
                                                        <GithubLogoIcon size={15} />
                                                        Source
                                                    </a>
                                                )}
                                                {liveHref && (
                                                    <a
                                                        href={liveHref}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 label-mono transition-colors duration-200"
                                                        style={{ color: "var(--color-accent)" }}
                                                        onMouseEnter={(e) =>
                                                        (e.currentTarget.style.color =
                                                            "var(--color-accent-hover)")
                                                        }
                                                        onMouseLeave={(e) =>
                                                        (e.currentTarget.style.color =
                                                            "var(--color-accent)")
                                                        }
                                                    >
                                                        Live demo
                                                        <ArrowUpRightIcon size={13} />
                                                    </a>
                                                )}
                                            </div>
                                        </article>
                                    </Reveal>
                                ),
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}
