"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Service = {
  title: string;
  image: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Desarrollo Web",
    image: "/assets/images/web-site.png",
    description: "Páginas y apps modernas, rápidas y seguras.",
  },
  {
    title: "Sistemas ERP",
    image: "/assets/images/erp.png",
    description: "Gestiona tu empresa con sistemas a medida.",
  },
  {
    title: "Consultoría",
    image: "/assets/images/consultoria.png",
    description: "Consultoría en diseño e implementación de software empresarial.",
  },
];

export default function ServiceSlider() {
  return (
    <SwiperReact
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="max-w-4xl mx-auto"
    >
      {services.map(({ title, image, description }) => (
        <SwiperSlide key={title}>
          <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-5 text-white">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperReact>
  );
}
