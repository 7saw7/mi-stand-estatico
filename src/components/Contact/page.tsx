"use client";

import ContactLabel from "src/components/Contact/ContactLabel";

export default function ContactPage() {
  const numero = "51916983980"; // número de destino en formato internacional sin '+'

  const datos = {
    correo: "contacto@empresa.com",
    telefono: "+51 916 983 980",
    direccion: "Av. Siempre Viva 123, Lima, Perú",
  };

  const enviarWhatsApp = () => {
    const mensaje = `
Hola, aquí tienes mis datos de contacto:

• Correo: ${datos.correo}
• Teléfono: ${datos.telefono}
• Dirección: ${datos.direccion}

Escríbeme cuando gustes 😊
    `.trim();

    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      mensaje
    )}`;

    if (typeof window !== "undefined") {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, "_blank");
      }
    }
  };

  return (
    <section className="bg-[var(--color-azul-oscuro)] dark:bg-gray-900 min-h-screen p-8 text-center scroll-mt-20">
      <div className="bg-white p-8 max-w-sm mx-auto rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contáctame
        </h1>

        <div className="space-y-4 inline-block text-left mb-6">
          <ContactLabel
            label="Correo"
            value={datos.correo}
            href={`mailto:${datos.correo}`}
          />
          <ContactLabel
            label="Teléfono"
            value={datos.telefono}
            href={`tel:+51916983980`}
          />
          <ContactLabel label="Dirección" value={datos.direccion} />
        </div>

        <button
          onClick={enviarWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
        >
          Enviar por WhatsApp
        </button>
      </div>
    </section>
  );
}
