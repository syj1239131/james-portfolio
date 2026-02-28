import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "James Hsieh — Marketing Portfolio",
  description:
    "Portfolio of James Hsieh (謝宇傑) — Senior Marketing Specialist specializing in SEO, growth marketing, content strategy, and data-driven campaign execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
