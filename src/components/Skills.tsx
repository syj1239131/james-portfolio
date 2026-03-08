"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-in-up mb-16">
          <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-2">
            {t.skills.sectionLabel}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.skills.sectionTitle}
          </h2>
        </div>

        {/* Core Skills */}
        <div className="fade-in-up mb-10">
          <div className="flex flex-wrap gap-3">
            {t.skills.coreSkills.map((skill: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium rounded-full bg-white border-2 border-[var(--accent)]/30 text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary Skills — tag cloud */}
        <div className="fade-in-up">
          <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-3">
            {t.skills.secondaryLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {t.skills.secondarySkills.map((skill: string, j: number) => (
              <span
                key={j}
                className="px-3 py-1 text-xs rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
