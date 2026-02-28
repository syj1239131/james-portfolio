"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage, useProjectData } from "@/context/LanguageContext";
import AutomationVisual from "@/components/AutomationVisual";
import B2BLeadGenVisual from "@/components/B2BLeadGenVisual";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const project = useProjectData(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-[var(--muted)]">{t.projectDetail.projectNotFound}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.projectDetail.backToPortfolio}
          </Link>
          <span
            className="text-sm font-medium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.navbar.logo}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className={`pt-28 pb-16 px-6 bg-gradient-to-br ${project.heroColor}`}>
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-3 block">
            {project.tag}
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mb-6">
            {project.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm">
            {project.role && (
              <div>
                <span className="text-[var(--muted)]">{t.projectDetail.roleLabel}</span>{" "}
                <span className="font-medium">{project.role}</span>
              </div>
            )}
            {project.period && (
              <div>
                <span className="text-[var(--muted)]">{t.projectDetail.periodLabel}</span>{" "}
                <span className="font-medium">{project.period}</span>
              </div>
            )}
            {project.company && (
              <div>
                <span className="text-[var(--muted)]">{t.projectDetail.companyLabel}</span>{" "}
                <span className="font-medium">{project.company}</span>
              </div>
            )}
          </div>

          {/* Metrics bar */}
          <div className="flex flex-wrap gap-10 mt-10 pt-8 border-t border-black/10">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {m.value}
                </p>
                <p className="text-sm text-[var(--muted)] mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {project.sections.map((section, i) => (
            <section key={i}>
              <h2
                className="text-2xl font-semibold mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.title}
              </h2>

              {/* Images — rendered ABOVE text for natural reading flow */}
              {section.imageUrl && (
                Array.isArray(section.imageUrl) ? (
                  <div className="mb-6 space-y-4">
                    {section.imageUrl.map((url, imgIdx) => (
                      <div key={imgIdx} className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--surface)]">
                        <img
                          src={url}
                          alt={`${section.title} ${imgIdx + 1}`}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : section.imageUrl === "__AUTOMATION_VISUAL__" ? (
                  <div className="mb-6">
                    <AutomationVisual />
                  </div>
                ) : section.imageUrl === "__B2B_VISUAL__" ? (
                  <div className="mb-6">
                    <B2BLeadGenVisual />
                  </div>
                ) : (
                  <div className="mb-6 rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--surface)]">
                    <img
                      src={section.imageUrl}
                      alt={section.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )
              )}

              {/* Image placeholder fallback — also above text */}
              {!section.imageUrl && section.imagePlaceholder && (
                <div className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center h-64 md:h-80">
                  <div className="text-center">
                    <svg className="w-10 h-10 mx-auto text-[var(--border)] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[var(--muted)]">{section.imagePlaceholder}</p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {section.content.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-[var(--muted)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Video links */}
              {section.videoLinks && section.videoLinks.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {section.videoLinks.map((video, vidIdx) => (
                    <a
                      key={vidIdx}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--foreground)] hover:border-red-500 hover:text-red-500 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="#FF0000" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      {video.label}
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* External link */}
          {project.link && (
            <div className="pt-8 border-t border-[var(--border)]">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-white text-sm font-medium hover:bg-[var(--accent)] transition-colors"
              >
                {t.projectDetail.visitLiveSite}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Confidentiality notice — hidden for non-NDA projects */}
          {slug !== "marketing-automation" && slug !== "rsmedia" && (
          <div className="mt-12 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              <strong>{t.projectDetail.confidentialityNotice}</strong> {t.projectDetail.confidentialityText}
            </p>
          </div>
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-xs text-[var(--muted)]">{t.projectDetail.copyright}</p>
          <Link
            href="/#projects"
            className="text-xs text-[var(--accent)] hover:underline"
          >
            {t.projectDetail.backToAllProjects}
          </Link>
        </div>
      </footer>
    </div>
  );
}
