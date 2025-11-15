import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Landing Pages de alto rendimiento | Codeva Studio",
  description:
    "Diseñamos landing pages enfocadas en conversión, performance y métricas claras para campañas y lanzamientos.",
};

export default function LandingPagesService() {
  return (
    <PremiumServicePage
      category="Desarrollo web profesional"
      title="Landing pages"
      accent="que convierten visitas en clientes."
      description="Creamos landing pages milimétricamente pensadas para campañas, lanzamientos y captación de leads, con foco en storytelling, velocidad y analítica."
      imageSrc="/media/services/landing-pages.jpg"
      imageAlt="Landing pages profesionales Codeva Studio"
      theme="web"      
      benefits={[
        "Arquitectura de contenidos pensada para conversión.",
        "Diseño visual alineado a tu marca y mensajes clave.",
        "Implementación optimizada para Core Web Vitals.",
        "Integraciones con CRM, automatizaciones y píxeles de campañas.",
      ]}
      deliverables={[
        "Landing page responsive lista para producción.",
        "Implementación de formularios, tracking y eventos.",
        "Guía rápida de uso y edición de contenidos.",
        "Tablero básico de métricas recomendado.",
      ]}
      idealFor={[
        "Lanzamientos de productos o servicios.",
        "Campañas de performance marketing.",
        "Validación rápida de nuevas ideas de negocio.",
        "Negocios que necesitan mejorar su tasa de conversión.",
      ]}
    />
  );
}
