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

const title =
  "Training, Ernährung & Wettkampfvorbereitung für Läufer mit Dominic Thormann";
const description =
  "Seminare und Gruppencoaching für Hobby- und ambitionierte Läufer mit Ironman-Finisher Dominic Thormann. Training, Ernährung und Wettkampfvorbereitung, praxisnah und ehrlich.";
const ogImage = "/images/coach-dom-og.jpeg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Dominic Thormann",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
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
