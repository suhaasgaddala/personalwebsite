import type { Metadata } from "next";
import { Bebas_Neue, Dancing_Script } from "next/font/google";
import "./globals.css";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const cursiveFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cursive"
});

export const metadata: Metadata = {
  title: "Suhaas Gaddala — Full Stack Developer",
  description:
    "Portfolio of Suhaas Gaddala, a full stack developer building AI infrastructure, cloud-native systems, machine learning pipelines, backend services, and data-driven products.",
  openGraph: {
    title: "Suhaas Gaddala — Full Stack Developer",
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
      <body className={`${displayFont.variable} ${cursiveFont.variable}`}>{children}</body>
    </html>
  );
}
