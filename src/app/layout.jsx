import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FruitProvider } from "@/context/FruitContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ['300', '400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ['normal', 'italic'], weight: ['400', '600'] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ['400', '700'] });

export const metadata = {
  title: "PJJ Fruits — International Cold Chain & Fruit Distribution Platform",
  description: "Global Sourcing, Processing, and Logistics for Premium Fruits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} bg-[#fafafa] text-neutral-900 font-sans antialiased overflow-x-hidden theme-transition selection:bg-brand-100 selection:text-brand-900`}>
        <FruitProvider>
          {children}
        </FruitProvider>
      </body>
    </html>
  );
}
