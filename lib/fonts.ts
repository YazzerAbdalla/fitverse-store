import { DynaPuff } from "next/font/google";
import { Inter } from "next/font/google"; // fallback / body font

// Hero / Branding font
export const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dynapuff",
  display: "swap",
});

// Main body font (clean & readable)
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
