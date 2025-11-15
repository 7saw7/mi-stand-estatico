import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Apps móviles con React Native | Codeva Studio",
  description:
    "Desarrollo de aplicaciones móviles nativas para iOS y Android con una sola base de código.",
};

export default function ReactNativeService() {
  return (
    <PremiumServicePage
      category="Apps móviles"
      title="Apps React Native"
      accent="para iOS y Android desde un mismo código."
      description="Construimos aplicaciones móviles con React Native que equilibran experiencia de usuario, mantenibilidad y velocidad de desarrollo."
      imageSrc="/media/services/react-native.jpg"
      imageAlt="Aplicación móvil desarrollada en React Native"
      theme="apps" //
      benefits={[
        "Diseño de arquitectura escalable y mantenible.",
        "Componentes reutilizables y diseño consistente.",
        "Integración con APIs, servicios cloud y notificaciones.",
        "Publicación y soporte para stores de Apple y Google.",
      ]}
      deliverables={[
        "App móvil lista para publicar en stores.",
        "Proyecto documentado y preparado para evolucionar.",
        "Pipelines básicos de build y testing configurados.",
        "Soporte en el proceso de subida y revisión inicial.",
      ]}
      idealFor={[
        "Startups que necesitan validar rápido en mobile.",
        "Empresas con productos digitales existentes en web.",
        "Negocios que quieren una app para clientes o internos.",
        "Equipos que valoran velocidad de iteración.",
      ]}
    />
  );
}
