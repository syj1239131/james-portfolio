"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

export function ClientBody({ children }: { children: ReactNode }) {
  return (
    <body className="antialiased">
      <LanguageProvider>{children}</LanguageProvider>
    </body>
  );
}
