import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { CafeProvider } from "@/context/CafeContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blue & Brown — Neighborhood Café",
    template: "%s | Blue & Brown",
  },
  description:
    "Your neighborhood, one good cup at a time. Thoughtfully poured coffee, hand-laminated pastries, and a calm place to land. Open daily, 7 til 4.",
  openGraph: {
    title: "Blue & Brown — Neighborhood Café",
    description:
      "Thoughtfully poured coffee, warm morning pastries, and unhurried company in the heart of the neighborhood.",
    type: "website",
    locale: "en_US",
    siteName: "Blue & Brown",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream font-sans text-espresso antialiased selection:bg-navy selection:text-cream">
        <CafeProvider>{children}</CafeProvider>
      </body>
    </html>
  );
}
