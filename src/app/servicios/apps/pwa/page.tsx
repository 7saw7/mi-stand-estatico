import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Progressive Web Apps (PWA) | Codeva Studio",
  description:
    "PWAs rápidas, instalables y offline-friendly para experiencias mobile sin pasar por stores.",
};

export default function PwaService() {
  return (
    <PremiumServicePage
      category="Apps móviles"
      title="Progressive Web Apps"
      accent="que se sienten como apps nativas."
      description="Diseñamos y desarrollamos PWAs que combinan lo mejor de la web y el mundo móvil: rápidas, instalables y preparadas para funcionar incluso con mala conexión."
      imageSrc="/media/services/pwa.jpg"
      imageAlt="Progressive web app en dispositivos móviles"
      benefits={[
        "Experiencia mobile optimizada y full responsive.",
        "Instalable en escritorio y dispositivos móviles.",
        "Soporte offline y estrategias de caché eficientes.",
        "Integración con APIs, autenticación y analítica.",
      ]}
      deliverables={[
        "PWA lista para producción e instalación.",
        "Configuración de manifest y service workers.",
        "Guía de uso y despliegue en tu infraestructura.",
        "Checklist de performance y buenas prácticas.",
      ]}
      idealFor={[
        "Sistemas internos o herramientas de campo.",
        "Productos digitales que empiezan web-first.",
        "Proyectos que buscan evitar fricción de stores.",
        "Negocios con usuarios en zonas de baja conectividad.",
      ]}
    />
  );
}
