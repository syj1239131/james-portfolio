"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
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
    <section
      id="experience"
      ref={sectionRef}
      className="border-b border-[var(--border)] px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="fade-in-up mb-16">
          <p className="mb-2 text-[13px] font-medium uppercase text-[var(--muted)]">
            {t.experience.sectionLabel}
          </p>
          <h2
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.experience.sectionTitle}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {t.experience.jobs.map((exp, i) => (
              <div key={i} className="fade-in-up relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[var(--foreground)] bg-white" />

                <p className="mb-1 text-xs text-[var(--muted)]">
                  {exp.period}
                </p>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {exp.title}
                </h3>
                <p className="mb-1 text-sm font-medium text-[var(--foreground)]">{exp.company}</p>
                <p className="text-xs text-[var(--muted)] mb-3">{exp.type}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--muted)] leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1 flex-shrink-0 text-[var(--foreground)]">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="fade-in-up mt-16 pt-10 border-t border-[var(--border)]">
          <p className="mb-4 text-[13px] font-medium uppercase text-[var(--muted)]">
            {t.experience.educationLabel}
          </p>
          <h3
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.experience.education.school}
          </h3>
          <p className="text-sm text-[var(--muted)]">
            {t.experience.education.degree} · {t.experience.education.period}
          </p>
        </div>
      </div>
    </section>
  );
}
