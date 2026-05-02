"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.navbar.links.experience, href: "#experience" },
    { label: t.navbar.links.projects, href: "#projects" },
    { label: t.navbar.links.about, href: "#about" },
    { label: t.navbar.links.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "zh" : "en");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-colors duration-300 ${
        scrolled ? "bg-white/95" : "bg-white/85"
      } backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-[-0.01em] text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.navbar.logo}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={t.navbar.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.navbar.resumeButton}
          </a>
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
            aria-label="Toggle language"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <a
            href="mailto:syjjj31@gmail.com"
            className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            {t.navbar.ctaButton}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[var(--foreground)] transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--foreground)] transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--foreground)] transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
          {/* Mobile Language Toggle */}
          <button
            onClick={() => { toggleLang(); setMobileOpen(false); }}
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            {lang === "en" ? "切換中文" : "Switch to EN"}
          </button>
        </div>
      )}
    </nav>
  );
}
