import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-heading-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suhaasga.com"),
  title: "suhaas.cv",
  description:
    "Portfolio of Suhaas Gaddala, a full stack developer building AI infrastructure, cloud-native systems, machine learning pipelines, backend services, and data-driven products.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }]
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "suhaas.cv",
    description:
      "AI infrastructure, cloud systems, machine learning, and full-stack product engineering.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
