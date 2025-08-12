import React from "react";
import MainTitle from '@/components/Service/MainTitle';
import SectionDescription from '@/components/Service/SectionDescription';
import ServiceCard from '@/components/Service/ServiceCard';

export default function ServicesPage() {
  return (
    <>
    <main className="min-h-screen bg-white text-white px-6 py-12">
      <section className="max-w-5xl mx-auto">
       <MainTitle text="Nuestros Servicios" variant="light"/>
        <SectionDescription variant="light" text="Ofrecemos soluciones personalizadas para ayudar a tu empresa a crecer y optimizar procesos."/>
      
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            variant="light"
            title="Desarrollo Web"
            description="Creamos páginas y aplicaciones web modernas, rápidas y seguras adaptadas a tu negocio."
          />
          <ServiceCard
            variant="light"
            title="Sistemas ERP"
            description="Implementamos sistemas ERP a medida para gestionar de forma eficiente tu empresa."
          />
          <ServiceCard
            variant="light"
            title="Consultoría TI"
            description="Brindamos asesoría tecnológica para optimizar tus procesos y recursos."
          />
        </div>
      </section>
    </main>
    </>
  );
}
