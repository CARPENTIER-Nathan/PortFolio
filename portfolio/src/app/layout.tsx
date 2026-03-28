import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import BarreNavigation from "@/components/BarreNavigation";
import PiedDePage from "@/components/PiedDePage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Nathan CARPENTIER | Expert en Ingénierie du Logiciel",
    template: "%s | Nathan CARPENTIER",
  },
  description:
    "Portfolio de Nathan CARPENTIER, étudiant en Mastère Expert en Ingénierie du Logiciel. Découvrez mes projets, compétences et parcours.",
  keywords: [
    "Nathan CARPENTIER",
    "développeur",
    "ingénierie logiciel",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Nathan CARPENTIER" }],
  openGraph: {
    title: "Nathan CARPENTIER | Expert en Ingénierie du Logiciel",
    description:
      "Portfolio de Nathan CARPENTIER, étudiant en Mastère Expert en Ingénierie du Logiciel.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BarreNavigation />
        <main className="flex-1 pt-16">{children}</main>
        <PiedDePage />
      </body>
    </html>
  );
}
