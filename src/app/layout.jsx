import { Nunito } from "next/font/google";
import "./globals.css";
import { FruitProvider } from "@/context/FruitContext";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ['400', '600', '700', '800', '900'] });

export const metadata = {
  title: "Global Fruits — International Cold Chain & Fruit Distribution Platform",
  description: "Global Sourcing, Processing, and Logistics for Premium Fruits",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${nunito.variable} bg-[var(--bg-tint-light)] text-neutral-900 font-sans antialiased overflow-x-hidden theme-transition selection:bg-brand-100 selection:text-brand-900`}>
        <div className="fixed inset-0 z-0 pointer-events-none bg-noise mix-blend-multiply opacity-60"></div>
        <FruitProvider>
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
          </div>
        </FruitProvider>
      </body>
    </html>
  );
}
