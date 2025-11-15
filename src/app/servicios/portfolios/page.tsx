import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Portafolios y sitios personales | Codeva Studio",
  description:
    "Sitios portafolio pulidos para estudios, profesionales y marcas personales.",
};

export default function PortafoliosService() {
  return (
    <PremiumServicePage
      category="Desarrollo web profesional"
      title="Portafolios"
      accent="que presentan tu trabajo como se merece."
      description="Creamos portafolios digitales con narrativa visual, orden y ritmo para mostrar tu trabajo de forma clara, moderna y memorable."
      imageSrc="/media/services/portfolios.jpg"
      imageAlt="Portfolio digital moderno"
      theme="web"  
      benefits={[
        "Diseño enfocado en resaltar proyectos y resultados.",
        "Estructura adaptable a distintos tipos de piezas o casos.",
        "Microinteracciones sutiles que elevan la percepción de calidad.",
        "Sitio fácil de actualizar con nuevos proyectos.",
      ]}
      deliverables={[
        "Portafolio completo, responsive y animado.",
        "Plantillas para nuevos proyectos o páginas.",
        "Optimización básica para compartir en redes.",
        "Sugerencias de copy y estructura para tus casos.",
      ]}
      idealFor={[
        "Estudios creativos y agencias.",
        "Desarrolladores, diseñadores, fotógrafos y consultores.",
        "Marcas personales en proceso de posicionamiento.",
        "Equipos que quieren un espacio curado para mostrar logros.",
      ]}
    />
  );
}
