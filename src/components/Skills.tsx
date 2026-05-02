"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface SkillCard {
  badge: string;
  color: string;
  oneLiner: string;
  tags: string[];
}

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  const cards: SkillCard[] = t.skills.cards;

  return (
    <section id="about" ref={sectionRef} className="border-b border-[var(--border)] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="fade-in-up mb-10">
          <h2
            className="text-2xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.skills.sectionTitle}
          </h2>
        </div>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cards.map((card, i) => {
            const isOpen = openIndex === i;

            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`group relative cursor-pointer overflow-hidden rounded-[var(--radius-card)] border text-left transition-colors duration-200
                  ${
                    isOpen
                      ? "border-black/20 bg-[var(--surface-soft)]"
                      : "border-[var(--border)] bg-white hover:border-black/20 hover:bg-[var(--surface-soft)]"
                  }
                `}
              >
                <div className="p-5">
                  {/* Badge row */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="text-[11px] font-medium uppercase text-[var(--muted)]"
                    >
                      {card.badge}
                    </span>
                    <span
                      className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border border-black/10 bg-white transition-transform duration-300
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      <svg
                        className="w-2.5 h-2.5 stroke-[var(--muted)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </div>

                  {/* One-liner */}
                  <p className="text-sm font-medium leading-snug text-[var(--foreground)]">
                    {card.oneLiner}
                  </p>

                  {/* Expandable tags */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
                        {card.tags.map((tag: string, j: number) => (
                          <span
                            key={j}
                            className="whitespace-nowrap rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] font-normal text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
