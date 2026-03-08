"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const COLOR_MAP: Record<string, { badge: string; glow: string }> = {
  emerald: {
    badge:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glow: "from-emerald-500 to-teal-400",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glow: "from-blue-500 to-indigo-400",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    glow: "from-amber-500 to-orange-400",
  },
  violet: {
    badge:
      "bg-violet-500/10 text-violet-400 border-violet-500/20",
    glow: "from-violet-500 to-purple-400",
  },
};

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
    <section id="about" ref={sectionRef} className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="fade-in-up mb-6">
          <h2
            className="text-xl font-semibold tracking-tight mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.skills.sectionTitle}
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {t.skills.subtitle}
          </p>
        </div>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cards.map((card, i) => {
            const colors = COLOR_MAP[card.color] || COLOR_MAP.emerald;
            const isOpen = openIndex === i;

            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`relative text-left rounded-xl border backdrop-blur-xl transition-all duration-300 ease-out overflow-hidden cursor-pointer group
                  ${
                    isOpen
                      ? "border-white/15 bg-white/[0.05]"
                      : "border-white/[0.06] bg-white/[0.025] hover:border-white/[0.13] hover:bg-white/[0.05] hover:-translate-y-0.5"
                  }
                `}
              >
                {/* Top glow line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.glow} transition-opacity duration-400 ${
                    isOpen ? "opacity-60" : "opacity-0 group-hover:opacity-40"
                  }`}
                />

                <div className="p-4">
                  {/* Badge row */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border ${colors.badge}`}
                    >
                      {card.badge}
                    </span>
                    <span
                      className={`w-[18px] h-[18px] rounded-full border border-white/[0.08] flex items-center justify-center transition-transform duration-300 group-hover:border-white/[0.15]
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
                  <p className="text-[13px] font-medium leading-snug text-[var(--foreground)]">
                    {card.oneLiner}
                  </p>

                  {/* Expandable tags */}
                  <div
                    className="grid transition-[grid-template-rows] duration-400 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-white/[0.06]">
                        {card.tags.map((tag: string, j: number) => (
                          <span
                            key={j}
                            className="text-[10.5px] font-normal px-2.5 py-1 rounded-md bg-white/[0.035] border border-white/[0.06] text-[var(--muted)] whitespace-nowrap"
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
