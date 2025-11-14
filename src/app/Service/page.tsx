"use client";
import React, { useState } from "react";
import MainTitle from 'src/components/Service/MainTitle';
import SectionDescription from 'src/components/Service/SectionDescription';
import ServiceCard from 'src/components/Service/ServiceCard';
import Modal from "src/components/Service/Modal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-[var(--color-azul-oscuro)] text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <MainTitle text="Nuestros Servicios" variant="dark"/>
          <SectionDescription
            variant="dark"
            text="Ofrecemos soluciones personalizadas para ayudar a tu empresa a crecer y optimizar procesos."
          />

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              variant="dark"
              title="Desarrollo Web"
              description="Creamos páginas y aplicaciones web modernas, rápidas y seguras adaptadas a tu negocio."
              onClick={() =>
                openModal(
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Desarrollo Web
                    </h2>

                    <p className="mb-4 text-gray-600">
                      Creamos páginas y aplicaciones web modernas, rápidas y seguras
                      adaptadas a tu negocio. Utilizamos tecnologías de última generación
                      como <strong>Next.js</strong>, <strong>React</strong> y
                      <strong> TailwindCSS</strong> para lograr un diseño atractivo y un
                      rendimiento óptimo.
                    </p>

                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Diseño 100% responsive para móviles, tablets y PC.</li>
                      <li>Optimización SEO para mejorar tu visibilidad en Google.</li>
                      <li>Integración con pasarelas de pago y sistemas de terceros.</li>
                      <li>Seguridad avanzada contra ataques comunes.</li>
                    </ul>

                    <p className="text-gray-600 mb-4">
                      Nos aseguramos de que tu sitio no solo sea visualmente atractivo, sino
                      también rápido, seguro y fácil de administrar.
                    </p>
                    <button
                      className="mt-2 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      onClick={() => alert("¡Te contactaremos pronto!")}
                    >
                      Solicitar información
                    </button>
                  </>
                )
              }
            />

            <ServiceCard
              variant="dark"
              title="Sistemas ERP"
              description="Implementamos sistemas ERP a medida para gestionar de forma eficiente tu empresa."
              onClick={() =>
                openModal(
                  <>
                    <h2 className="text-lg font-bold mb-4">Sistemas ERP</h2>
                    <p>
                      Nuestros sistemas ERP integran todas las áreas clave de tu empresa:
                      contabilidad, inventarios, ventas, compras y más, en una sola
                      plataforma.
                    </p>
                    <p className="mt-4">
                      Adaptamos la solución a tu sector y tamaño de negocio, permitiendo un
                      control total de la información y una toma de decisiones más rápida y
                      precisa.
                    </p>
                    <button
                      onClick={() => alert("Formulario de contacto aquí")}
                      className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Solicitar Información
                    </button>
                  </>
                )
              }
            />

            <ServiceCard
              variant="dark"
              title="Consultoría"
              description="Brindamos asesoría tecnológica para optimizar tus procesos y recursos."
              onClick={() =>
                openModal(
                  <>
                    <h2 className="text-lg font-bold mb-4">Consultoría</h2>
                    <p>
                      Ofrecemos consultoría especializada para identificar oportunidades de
                      mejora tecnológica en tu negocio.
                    </p>
                    <p className="mt-4">
                      Analizamos tus procesos actuales y proponemos soluciones innovadoras
                      que aumenten la eficiencia, reduzcan costos y mejoren la
                      productividad.
                    </p>
                    <button
                      onClick={() => alert("Formulario de contacto aquí")}
                      className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Solicitar Información
                    </button>
                  </>
                )
              }
            />
          </div>
        </section>
      </main>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {modalContent}
      </Modal>
    </>
  );
}
