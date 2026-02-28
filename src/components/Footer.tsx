"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA */}
        <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-3">
          {t.footer.sectionLabel}
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.footer.sectionTitle}
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
          {t.footer.subtitle}
        </p>

        <a
          href={`mailto:${t.footer.email}`}
          className="inline-block px-8 py-3 rounded-full bg-[var(--foreground)] text-white text-sm font-medium hover:bg-[var(--accent)] transition-colors duration-200"
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
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {t.footer.emailLink}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
