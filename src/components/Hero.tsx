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
    <section className="flex items-center justify-center border-b border-[var(--border)] px-6 pt-32 pb-20 md:pt-44 md:pb-32">
      <div
        className="text-center"
        style={{ width: "min(100%, calc(100vw - 48px))", maxWidth: "56rem" }}
      >
        {/* Greeting */}
        <p className="mb-5 text-[13px] font-medium uppercase text-[var(--muted)]">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1
          className="mb-6 text-5xl font-semibold leading-[1.03] md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.hero.name}
        </h1>

        {/* Rotating role */}
        <div className="mb-8 flex min-h-10 items-center justify-center">
          <span
            className={`rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-opacity duration-300 md:text-base ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-[17px]">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="w-full rounded-full bg-[var(--foreground)] px-6 py-3 text-center text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80 sm:w-auto"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            {t.hero.viewWorkButton}
          </a>
          <a
            href={t.navbar.resumeUrl}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface-soft)] sm:w-auto"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.hero.downloadResumeButton}
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-black/10 px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface-soft)] sm:w-auto"
          >
            {t.hero.contactButton}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16">
          <svg
            className="mx-auto h-5 w-5 text-[var(--muted)]"
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
