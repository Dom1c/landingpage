import type { Metadata } from "next";
import { Inter_Tight, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Training, Ernährung & Wettkampfvorbereitung für Läufer — mit Dominic Thormann",
  description:
    "Halbtags-Seminar für Hobby-Läufer mit Ironman-Finisher Dominic Thormann. Training, Ernährung und Wettkampfvorbereitung — praxisnah und ehrlich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${newsreader.variable} ${interTight.variable}`}>
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
