import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  metadataBase: new URL("https://james-portfolio-roan.vercel.app"),
  title: "James Hsieh — Marketing Portfolio",
  description:
    "Portfolio of James Hsieh (謝宇傑) — Senior Marketing Specialist specializing in SEO, growth marketing, content strategy, and data-driven campaign execution.",
  openGraph: {
    title: "James Hsieh — Marketing Portfolio",
    description:
      "Senior Marketing Specialist specializing in SEO, growth marketing, content strategy, and data-driven campaign execution.",
    url: "https://james-portfolio-roan.vercel.app",
    siteName: "James Hsieh Portfolio",
    images: [
      {
        url: "/thumbnail.png",
        width: 1600,
        height: 900,
        alt: "James Hsieh — Portfolio",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Hsieh — Marketing Portfolio",
    description:
      "Senior Marketing Specialist specializing in SEO, growth marketing, and content strategy.",
    images: ["/thumbnail.png"],
  },
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
