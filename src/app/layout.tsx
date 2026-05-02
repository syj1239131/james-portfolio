import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  metadataBase: new URL("https://james-portfolio-roan.vercel.app"),
  title: "James Hsieh — Digital Marketing & MarTech Portfolio",
  description:
    "Marketing portfolio of James Hsieh, a digital marketing and MarTech specialist with experience in B2B lead generation, CRM and marketing automation, AI-assisted workflows, content systems, and data-driven campaign execution.",
  openGraph: {
    title: "James Hsieh — Digital Marketing & MarTech Portfolio",
    description:
      "Digital marketing and MarTech portfolio covering B2B lead generation, CRM and marketing automation, AI-assisted workflows, content systems, and data-driven campaign execution.",
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
    title: "James Hsieh — Digital Marketing & MarTech Portfolio",
    description:
      "Digital marketing and MarTech portfolio covering B2B lead generation, CRM automation, AI-assisted workflows, and content systems.",
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
