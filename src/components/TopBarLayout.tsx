// ==========================================
// Imports
// ==========================================
import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeIcon,
  XIcon,
  ListIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

// ==========================================
// Constants
// ==========================================
const NAV_ITEMS = [
  { label: "Home",       path: "/" },
  { label: "Projects",   path: "/projects" },
  { label: "About",      path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Contact",    path: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: GithubLogoIcon,   href: "https://github.com",   label: "GitHub" },
  { icon: LinkedinLogoIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ==========================================
// TopBarLayout Component
// ==========================================
export default function TopBarLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-canvas)", color: "var(--color-text-primary)" }}
    >
      <ScrollRestoration />
      {/* ── Top Navigation ───────────────────────────── */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.70)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
          boxShadow: scrolled ? "0 1px 12px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Hy Menghour — Home"
          >
            <div
              className="w-8 h-8 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <CodeIcon size={17} weight="bold" color="#fff" />
            </div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-primary)" }}
            >
              Hy Menghour
            </span>
          </NavLink>

          {/* Desktop Nav with Framer Motion Animated Transition */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-xl border glass-panel"
            style={{
              borderColor: "var(--color-border-soft)",
              backgroundColor: "rgba(244, 240, 235, 0.75)",
            }}
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="relative label-mono px-4 py-2 rounded-lg text-xs transition-colors duration-200"
                  style={{
                    color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        boxShadow: "0 2px 10px rgba(77, 42, 0, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop: social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs" style={{ borderColor: "rgba(16, 185, 129, 0.3)", backgroundColor: "rgba(16, 185, 129, 0.08)", color: "#065f46" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="label-mono text-[10px]">Open to roles</span>
            </div>

            <a
              href="/Hy_Meng_Hour_CV.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold border transition-all duration-200"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-accent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.backgroundColor = "var(--color-accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              Resume
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 shadow-sm"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent)")
              }
            >
              Let's talk
              <ArrowUpRightIcon size={14} weight="bold" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--color-text-primary)" }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <ListIcon size={24} />
          </button>
        </div>
      </header>

      {/* ── Mobile Fullscreen Overlay ─────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: "var(--color-surface)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header row */}
            <div
              className="flex items-center justify-between px-6 h-16 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <NavLink to="/" className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <CodeIcon size={17} weight="bold" color="#fff" />
                </div>
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-primary)" }}
                >
                  Hy Menghour
                </span>
              </NavLink>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg"
                style={{ color: "var(--color-text-primary)" }}
                aria-label="Close menu"
              >
                <XIcon size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-2 px-6 pt-10 flex-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25, ease: EASE }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className="text-4xl font-bold tracking-tight block py-2 transition-colors duration-200"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--color-accent)" : "var(--color-text-primary)",
                    })}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Social row */}
            <div
              className="px-6 pb-10 flex items-center gap-5 border-t pt-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-secondary)")
                  }
                >
                  <Icon size={20} />
                  <span className="label-mono">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page Content ─────────────────────────────── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────── */}
      <footer
        className="border-t px-6 py-10"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="label-mono font-bold" style={{ color: "var(--color-text-primary)" }}>
              Hy Menghour
            </span>
            <span className="hidden sm:inline text-xs opacity-40">•</span>
            <span className="label-mono text-xs" style={{ color: "var(--color-text-muted)" }}>
              Front-End & Mobile Developer • Siem Reap, Cambodia (UTC+7)
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="label-mono text-xs hidden lg:inline" style={{ color: "var(--color-text-muted)" }}>
              © {new Date().getFullYear()} All rights reserved
            </span>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: "var(--color-border-soft)",
                    backgroundColor: "var(--color-surface-2)",
                    color: "var(--color-text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border-soft)";
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
