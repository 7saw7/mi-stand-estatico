import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Apps interactivas y experiencias a medida | Codeva Studio",
  description:
    "Interfaces ricas, animaciones fluidas y experiencias digitales interactivas para productos y marcas.",
};

export default function AppsInteractivasService() {
  return (
    <PremiumServicePage
      category="Apps y productos digitales"
      title="Apps interactivas"
      accent="que elevan la experiencia del usuario."
      description="Creamos experiencias digitales donde la interacción importa: dashboards dinámicos, configuradores, simuladores y productos con UI avanzada."
      imageSrc="/media/services/apps-interactivas.jpg"
      imageAlt="Aplicaciones interactivas avanzadas"
      benefits={[
        "Diseño de flujos y microinteracciones cuidadas.",
        "Uso de librerías y animaciones fluidas sin sacrificar performance.",
        "Arquitectura preparada para datos en tiempo real.",
        "Experiencias adaptadas a desktop y mobile.",
      ]}
      deliverables={[
        "Aplicación web interactiva lista para producción.",
        "Componentes reutilizables documentados.",
        "Integración con APIs, sockets o servicios necesarios.",
        "Guía de escalado y mantenimiento del producto.",
      ]}
      idealFor={[
        "SaaS con interfaces intensivas en datos.",
        "Herramientas internas con uso diario.",
        "Productos que buscan diferenciarse por experiencia.",
        "Proyectos que requieren alto nivel de detalle visual.",
      ]}
    />
  );
}
