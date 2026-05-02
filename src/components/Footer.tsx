"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA */}
        <p className="mb-3 text-[13px] font-medium uppercase text-[var(--muted)]">
          {t.footer.sectionLabel}
        </p>
        <h2
          className="mb-4 text-3xl font-semibold md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.footer.sectionTitle}
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
          {t.footer.subtitle}
        </p>

        <a
          href={`mailto:${t.footer.email}`}
          className="inline-block rounded-full bg-[var(--foreground)] px-8 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80"
          style={{ boxShadow: "var(--shadow-button)" }}
        >
          {t.footer.email}
        </a>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)]">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${t.footer.email}`}
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {t.footer.emailLink}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
