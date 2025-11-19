// src/app/servicios/page.tsx
"use client";

import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import dynamic from "next/dynamic";
import MainTitle from "src/components/Service/MainTitle";
import SectionDescription from "src/components/Service/SectionDescription";
import ServiceCard from "src/components/Service/ServiceCard";
import styles from "./services-bg.module.css";

import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
  type ServiceConfig,
  type ServiceCategoryId,
} from "src/app/config/services";

// 🚀 Lazy load: Modal + ServiceDetail no van en el bundle inicial
const Modal = dynamic(() => import("src/components/Service/Modal"), {
  ssr: false,
});
const ServiceDetail = dynamic(
  () => import("src/components/Service/ServiceDetail"),
  {
    ssr: false,
  },
);

export default function ServicesPage() {
  const [selectedService, setSelectedService] =
    useState<ServiceConfig | null>(null);

  const [activeCategoryId, setActiveCategoryId] =
    useState<ServiceCategoryId>("web");

  const sliderRef = useRef<HTMLDivElement | null>(null);

  // ✅ Memo de categoría activa
  const activeCategory = useMemo(
    () =>
      SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId) ??
      SERVICE_CATEGORIES[0],
    [activeCategoryId],
  );

  // ✅ Memo de servicios para esa categoría
  const services = useMemo(
    () => getServicesByCategory(activeCategoryId),
    [activeCategoryId],
  );

  // ✅ useCallback para que no se recree en cada render
  const scrollSlider = useCallback((direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const offset = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  }, []);

  // ✅ Handler memoizado para abrir modal
  const handleSelectService = useCallback((service: ServiceConfig) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  return (
    <>
      <main
        className={`relative min-h-screen overflow-hidden text-white px-6 py-16 ${styles.servicesSection}`}
      >
        {/* ==== BACKGROUND ULTRA MEGA PRO (CON OVERLAY) ==== */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* overlay para bajar brillo global */}
          <div className="absolute inset-0 bg-black/45" />

          {/* auroras animadas */}
          <div className={styles.auroraPrimary} />
          <div className={styles.auroraSecondary} />

          {/* haz de luz diagonal, un poco más suave */}
          <div className={styles.diagonalBeam} />

          {/* grid tech con máscara, menos intensa */}
          <div className={`${styles.servicesGrid} opacity-[0.12]`} />

          {/* orbits suaves detrás de las cards, menos brillo */}
          <div className={styles.orbits} />

          {/* textura tipo noise muy sutil */}
          <div className={styles.noise} />
        </div>

        <section className="relative mx-auto max-w-6xl">
          <MainTitle text="Nuestros servicios" variant="dark" />
          <SectionDescription
            variant="dark"
            text="Combinamos desarrollo, diseño e ingeniería para acompañarte desde la idea hasta la operación diaria de tu sistema."
          />

          {/* ===== Tabs de categorías (actúan como filtro) ===== */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full bg-slate-900/70 p-1 ring-1 ring-white/10 backdrop-blur-md">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={[
                      "relative mx-0.5 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition",
                      isActive
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-100/70 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-1.5 w-1.5 rounded-full",
                        cat.accentColorClass.includes("emerald")
                          ? "bg-emerald-400"
                          : cat.accentColorClass.includes("sky")
                          ? "bg-sky-400"
                          : "bg-fuchsia-400",
                      ].join(" ")}
                    />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subtítulo de la categoría activa */}
          <div className="mt-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
              {activeCategory.label}
            </p>

            <p className="mt-2 text-sm text-slate-200/80">
              {activeCategory.subtitle}
            </p>

            {/* 🔥 LÍNEA PREMIUM: contador de servicios */}
            <p className="mt-1 text-[11px] text-slate-400">
              {services.length} servicios dentro de{" "}
              {activeCategory.label.toLowerCase()}
            </p>
          </div>

          {/* ===== Slider horizontal de servicios ===== */}
          <div className="relative mt-8">
            {/* Fades laterales (solo desktop) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent hidden md:block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent hidden md:block"
            />

            {/* Controles del slider (desktop) */}
            <div className="pointer-events-none absolute -top-12 right-0 hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollSlider("left")}
                className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-100/80 shadow-sm transition hover:border-emerald-300/50 hover:text-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("right")}
                className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-100/80 shadow-sm transition hover:border-emerald-300/50 hover:text-white"
              >
                ›
              </button>
            </div>

            <div
              ref={sliderRef}
              className="no-scrollbar mt-2 flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="snap-start shrink-0 basis-[260px] md:basis-[300px] lg:basis-[320px]"
                >
                  <ServiceCard
                    service={service}
                    category={activeCategory}
                    variant="dark"
                    onClick={() => handleSelectService(service)}
                  />
                </div>
              ))}
            </div>

            <p className="mt-2 text-center text-[11px] text-slate-400 md:hidden">
              Desliza horizontalmente para ver más servicios
            </p>
          </div>
        </section>
      </main>

      {/* Modal centrado en el servicio seleccionado */}
      <Modal isOpen={!!selectedService} onClose={handleCloseModal}>
        {selectedService && <ServiceDetail service={selectedService} />}
      </Modal>
    </>
  );
}
