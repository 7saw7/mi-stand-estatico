// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono, Poppins } from "next/font/google";
import "./globals.css";
import VideoIntroWrapper from "./VideoIntroWrapper";
import FloatingWhatsApp from "src/components/FloatingWhatsApp";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

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
  icons: {
    icon: "/assets/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/assets/videos/inicio.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className="bg-slate-950 text-slate-100 overflow-x-hidden">
        <Header />
        <VideoIntroWrapper>
          {children}
        </VideoIntroWrapper>
        <FloatingWhatsApp />        
        <Footer />
      </body>
    </html>
  );
}
