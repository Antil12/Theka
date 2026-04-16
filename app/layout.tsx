import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Jost,
  Josefin_Sans,
  Bebas_Neue,
} from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/providers/CustomCursor";
import PageTransition from "@/components/providers/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgeVerificationModal from "@/components/modals/AgeVerificationModal";

// Fonts setup
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-josefin",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THEKA | Crafted for the Bold",
  description:
    "Where every pour tells a story of craft, heritage and ambition. Luxury whiskey, vodka, wine, rum, and gin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jost.variable} ${josefin.variable} ${bebas.variable} overflow-x-hidden`}
    >
      <body
        suppressHydrationWarning
        className="antialiased font-body bg-obsidian text-silk overflow-x-hidden w-full max-w-[100vw] min-h-screen selection:bg-gold selection:text-void"
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <AgeVerificationModal />
          <Navbar />
          <PageTransition>
            <main className="min-h-screen relative z-10">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
