"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";
import { translations as en } from "@/data/en";
import { translations as zh } from "@/data/zh";
import { projects } from "@/data/projects";

// ============================================================
// Types
// ============================================================
export type Language = "en" | "zh";
export type Translations = typeof en;

const translationMap: Record<Language, Translations> = { en, zh };

// ============================================================
// Context
// ============================================================
interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ============================================================
// Provider
// ============================================================
const STORAGE_KEY = "portfolio-lang";
const LANGUAGE_CHANGE_EVENT = "portfolio-lang-change";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en" || saved === "zh" ? saved : "en";
}

function subscribeToLanguageStore(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Language>(
    subscribeToLanguageStore,
    getStoredLanguage,
    () => "en"
  );

  const setLang = (newLang: Language) => {
    window.localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  const t = translationMap[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ============================================================
// Hook
// ============================================================
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

// ============================================================
// Helper: get project data merged with translations
// ============================================================
export function useProjectData(slug: string) {
  const { t } = useLanguage();

  // Structural data from projects.ts (heroColor, link, imageUrl, videoLinks, etc.)
  const projectStructure = projects.find((p) => p.slug === slug);

  // Translated text from en.ts / zh.ts
  const projectText = t.projectData[slug as keyof typeof t.projectData];

  if (!projectStructure || !projectText) return null;

  // Merge: translated text + structural fields from projects.ts
  return {
    slug: projectStructure.slug,
    heroColor: projectStructure.heroColor,
    link: projectStructure.link,
    // Text from translations
    tag: projectText.tag,
    title: projectText.title,
    company: projectText.company,
    description: projectText.description,
    role: projectText.role,
    period: projectText.period,
    metrics: projectText.metrics,
    // Sections: text from translations, images/videos from projects.ts
    sections: projectText.sections.map((textSection, i) => {
      const structSection = projectStructure.sections[i];
      return {
        title: textSection.title,
        content: textSection.content,
        imageUrl: structSection?.imageUrl,
        imagePlaceholder: structSection?.imagePlaceholder,
        videoLinks: structSection?.videoLinks,
      };
    }),
  };
}

// Helper: get all projects merged with translations (for project cards)
export function useProjectList() {
  const { t } = useLanguage();

  return projects.map((proj) => {
    const text = t.projectData[proj.slug as keyof typeof t.projectData];
    if (!text) return proj; // fallback to original

    return {
      slug: proj.slug,
      heroColor: proj.heroColor,
      link: proj.link,
      tag: text.tag,
      title: text.title,
      company: text.company,
      description: text.description,
      metrics: text.metrics,
    };
  });
}
