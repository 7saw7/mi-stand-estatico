import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Diseño UX/UI para productos y webs | Codeva Studio",
  description:
    "Diseño de interfaces claras, usables y alineadas a tus objetivos de negocio, listas para pasar a desarrollo sin fricción.",
};

export default function UxUiService() {
  return (
    <PremiumServicePage
      category="UX/UI & Branding"
      title="Diseño UX/UI"
      accent="para productos digitales que se usan de verdad."
      description="Diseñamos experiencias y interfaces centradas en el usuario y en el contexto de tu negocio: flujos claros, jerarquía visual cuidada y componentes listos para que desarrollo pueda implementar sin fricción."
      imageSrc="/media/services/ux-ui.jpg"
      imageAlt="Interfaz de usuario y experiencia de usuario para producto digital"
      theme= "branding"
      benefits={[
        "Análisis de casos de uso y definición de flujos clave.",
        "Arquitectura de información y layout pensados para claridad.",
        "Diseño de UI con sistema de componentes coherente.",
        "Documentación suficiente para que desarrollo implemente sin dudas.",
      ]}
      deliverables={[
        "Prototipo navegable de las principales pantallas.",
        "Librería de componentes y estados principales.",
        "Guía rápida de interacción, espaciados y comportamiento.",
        "Soporte en la fase de handoff con el equipo de desarrollo.",
      ]}
      idealFor={[
        "Productos SaaS con uso intensivo en el día a día.",
        "Webs y apps que necesitan mejorar su experiencia actual.",
        "Equipos que quieren reducir ida y vuelta entre diseño y desarrollo.",
        "Startups que están construyendo la primera versión de su producto.",
      ]}
    />
  );
}
