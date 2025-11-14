// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Roboto_Mono, Poppins } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Codeva Studio",
  description: "Desarrollo de páginas web que impulsan tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const variant: "light" | "dark" = "dark";

  return (
    <html
      lang="es"
      className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable}`}
    >
      <body>
        <div className="font-sans transition-all duration-500 min-h-screen flex flex-col bg-[var(--color-azul-oscuro)]">
          {/* Contenido principal */}
          <main className="flex-grow">{children}</main>

        </div>
      </body>
    </html>
  );
}
