import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloud9consultant.com"),
  title: "CLOUD 9 CONSULTANT | Loans, Luxury Property & Financial Solutions",
  description:
    "Cloud 9 Consultant — Your trusted partner for loans and luxury property solutions. Curated portfolio of the world's most prestigious architectural landmarks, sky penthouses, and bespoke private financing.",
  keywords: [
    "cloud 9 consultant",
    "loans and property solutions",
    "luxury real estate",
    "beverly hills mansions",
    "manhattan penthouses",
    "miami waterfront estates",
    "aspen luxury chalets",
    "financial solutions",
  ],
  icons: {
    icon: "/images/logo-emblem.png",
    apple: "/images/logo-emblem.png",
  },
  openGraph: {
    title: "CLOUD 9 CONSULTANT | Loans & Property Solutions",
    description:
      "Your trusted partner for loans and luxury property solutions.",
    url: "https://cloud9consultant.com",
    siteName: "Cloud 9 Consultant",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 682,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-[#08090c] text-[#f3f4f6] min-h-screen flex flex-col selection:bg-[#d4af37]/30 selection:text-white">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
