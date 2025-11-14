import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "E-commerce a medida | Codeva Studio",
  description:
    "Tiendas online rápidas, seguras y pensadas para vender más, con integraciones y automatizaciones.",
};

export default function EcommerceService() {
  return (
    <PremiumServicePage
      category="Desarrollo web profesional"
      title="E-commerce"
      accent="enfocados en conversión y recurrencia."
      description="Creamos tiendas online que cuidan cada detalle: UX, checkout, performance y automatizaciones para que vender sea más sencillo y medible."
      imageSrc="/media/services/ecommerce.jpg"
      imageAlt="Tienda online y e-commerce"
      benefits={[
        "Arquitectura de catálogo pensada para navegación clara.",
        "Checkout optimizado y reducción de fricción en el pago.",
        "Integraciones con pasarelas de pago y logística.",
        "Automatizaciones de email, recuperación de carrito y más.",
      ]}
      deliverables={[
        "Tienda online completa y administrable.",
        "Documentación básica de gestión de productos y pedidos.",
        "Integración con herramientas de marketing y analítica.",
        "Soporte técnico en el arranque del proyecto.",
      ]}
      idealFor={[
        "Marcas que quieren profesionalizar su venta online.",
        "Negocios D2C que crecen rápido y necesitan estabilidad.",
        "Tiendas físicas que dan el salto al canal digital.",
        "Empresas que superaron las limitaciones de soluciones básicas.",
      ]}
    />
  );
}
