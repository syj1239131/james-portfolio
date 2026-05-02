"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage, useProjectList } from "@/context/LanguageContext";

const PROJECT_COVERS: Record<string, string> = {
  "b2b-lead-gen": "/jazz-hipster-product.jpeg",
  "marketing-automation": "/cover-martech-ai.webp",
  "jazz-hipster-seo": "/cover-seo-engine.webp",
  "brand-transformation": "/senseage-brand.png",
  "richart-social-media": "/richart-mascot.jpg",
  rsmedia: "/cover-news-engine.webp",
};

const PROJECT_COVER_POSITIONS: Record<string, string> = {
  rsmedia: "34% center",
};

export default function Projects() {
  const { t } = useLanguage();
  const projectList = useProjectList();
  const sectionRef = useRef<HTMLElement>(null);

  const mainProjects = projectList.slice(0, 4);
  const secondaryProjects = projectList.slice(4);

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
    <section id="projects" ref={sectionRef} className="border-b border-[var(--border)] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="fade-in-up mb-16">
          <p className="mb-2 text-[13px] font-medium uppercase text-[var(--muted)]">
            {t.projects.sectionLabel}
          </p>
          <h2
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.projects.sectionTitle}
          </h2>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainProjects.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={i}
              className="fade-in-up group flex flex-col"
            >
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface-soft)]">
                <Image
                  src={PROJECT_COVERS[project.slug]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Tag */}
              <span className="mb-3 text-[13px] font-medium uppercase text-[var(--muted)]">
                {project.tag}
              </span>

              {/* Title */}
              <h3
                className="mb-2 text-[22px] font-semibold leading-[1.22] text-[var(--foreground)] group-hover:underline group-hover:underline-offset-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h3>

              {/* Company */}
              <p className="mb-4 text-sm text-[var(--muted)]">
                {project.company}
              </p>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mb-4 flex flex-wrap gap-6 border-t border-[var(--border)] pt-5">
                {project.metrics.map((m, j) => (
                  <div key={j}>
                    <p
                      className="text-2xl font-semibold text-[var(--foreground)]"
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
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)] group-hover:gap-2 group-hover:underline group-hover:underline-offset-4 transition-all">
                {t.projects.viewCaseStudy}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary Projects Divider */}
        {secondaryProjects.length > 0 && (
          <>
            <div className="fade-in-up flex items-center gap-4 mt-14 mb-8">
              <div className="flex-1 border-t border-[var(--border)]" />
              <span className="whitespace-nowrap text-xs font-medium uppercase text-[var(--muted)]">
                {t.projects.secondaryLabel}
              </span>
              <div className="flex-1 border-t border-[var(--border)]" />
            </div>

            {/* Secondary Projects Grid — compact cards */}
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
              {secondaryProjects.map((project, i) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={i}
                  className="fade-in-up group grid grid-cols-[96px_1fr] gap-4 border-t border-[var(--border)] py-6 sm:grid-cols-[128px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface-soft)]">
                    <Image
                      src={PROJECT_COVERS[project.slug]}
                      alt={project.title}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: PROJECT_COVER_POSITIONS[project.slug] ?? "center" }}
                    />
                  </div>

                  <div className="min-w-0">
                    {/* Tag */}
                    <span className="mb-2 block text-[11px] font-medium uppercase text-[var(--muted)]">
                      {project.tag}
                    </span>

                    {/* Title */}
                    <h3
                      className="mb-1 text-base font-semibold text-[var(--foreground)] group-hover:underline group-hover:underline-offset-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h3>

                    {/* Company */}
                    <p className="text-xs text-[var(--muted)] mb-3">
                      {project.company}
                    </p>

                    {/* Compact Metrics */}
                    <div className="flex flex-wrap gap-4 mb-3">
                      {project.metrics.map((m, j) => (
                        <div key={j}>
                          <p
                            className="text-lg font-semibold text-[var(--foreground)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {m.value}
                          </p>
                          <p className="text-[10px] text-[var(--muted)] mt-0.5">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[var(--foreground)] group-hover:gap-2 group-hover:underline group-hover:underline-offset-4 transition-all">
                      {t.projects.viewCaseStudy}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
