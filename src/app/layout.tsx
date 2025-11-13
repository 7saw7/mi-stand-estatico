// app/layout.tsx

import type { Metadata } from "next";
// 1. CAMBIAMOS LAS IMPORTACIONES DE FUENTES
import { Inter, Roboto_Mono, Poppins } from "next/font/google"; // <-- MODIFICAR (añadir Poppins)
import Footer from "@/components/Footer";
import "./globals.css";

// 2. CONFIGURAMOS LAS NUEVAS FUENTES CON VARIABLES CSS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // La usaremos como fuente 'sans-serif'
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // La usaremos como fuente 'mono'
  weight: "400",
});

// AÑADE LA NUEVA FUENTE 'Poppins' PARA TÍTULOS
const poppins = Poppins({ // <-- AÑADIR
  subsets: ["latin"], // <-- AÑADIR
  variable: "--font-display", // La llamaremos 'font-display' // <-- AÑADIR
  weight: ["700", "800"], // Cargamos los grosores 'bold' y 'extrabold' // <-- AÑADIR
}); // <-- AÑADIR

export const metadata: Metadata = {
  title: "Codeva Studio", // <-- Te cambié el título
  description: "Desarrollo de páginas web que impulsan tu negocio.", // <-- Te puse una descripción
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variant: "light" | "dark" = "dark";

  return (
    // 3. APLICAMOS LAS VARIABLES AL HTML PARA QUE TAILWIND LAS USE
    <html lang="es" className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable}`}> {/* <-- MODIFICAR (añadir poppins.variable) */}
      <body>
        <div className="font-sans transition-all duration-500 min-h-screen flex flex-col bg-[var(--color-azul-oscuro)]">
          {/* El Header ya no está aquí, se renderiza en page.tsx */}
          
          {/* Contenido principal */}
          <main className="flex-grow"> {/* 'flex-grow' hace que el main ocupe el espacio */}
            {children}
          </main>

          {/* Footer abajo */}
          <footer className="flex-shrink-0"> {/* 'flex-shrink-0' evita que el footer se encoja */}
            <Footer variant={variant} />
          </footer>
        </div>
      </body>
    </html>
  );
}