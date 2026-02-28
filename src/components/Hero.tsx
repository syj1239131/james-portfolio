"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const roles = t.hero.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        {/* Greeting */}
        <p className="text-sm tracking-widest uppercase text-[var(--muted)] mb-4">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.hero.name}
        </h1>

        {/* Rotating role */}
        <div className="h-10 flex items-center justify-center mb-8">
          <span
            className={`text-xl md:text-2xl font-medium text-[var(--accent)] transition-opacity duration-400 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--foreground)] text-white text-sm font-medium hover:bg-[var(--accent)] transition-colors duration-200 text-center"
          >
            {t.hero.viewWorkButton}
          </a>
          <a
            href={t.navbar.resumeUrl}
            download
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.hero.downloadResumeButton}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 text-center"
          >
            {t.hero.contactButton}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-5 h-5 mx-auto text-[var(--muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
