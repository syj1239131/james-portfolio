"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage, useProjectList } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const projectList = useProjectList();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="fade-in-up mb-16">
          <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-2">
            {t.projects.sectionLabel}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.projects.sectionTitle}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={i}
              className="fade-in-up card-hover rounded-2xl border border-[var(--border)] bg-white p-8 flex flex-col group cursor-pointer"
            >
              {/* Tag */}
              <span className="text-xs font-medium tracking-wide uppercase text-[var(--accent)] mb-3">
                {project.tag}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-1 tracking-tight group-hover:text-[var(--accent)] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h3>

              {/* Company */}
              <p className="text-sm text-[var(--muted)] mb-4">
                {project.company}
              </p>

              {/* Description */}
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-6 mb-4">
                {project.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <p
                      className="text-2xl font-bold text-[var(--foreground)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <span className="text-sm text-[var(--accent)] mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {t.projects.viewCaseStudy}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
