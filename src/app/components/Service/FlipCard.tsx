// src/app/components/Service/FlipCard.tsx
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  details: string; // Añadimos 'details' para la parte trasera
};

export default function FlipCard({ title, image, description, details }: Props) {
  return (
    <div className="perspective w-full h-80 sm:h-96 group">
      {/* Contenedor de la tarjeta que girará */}
      <div className="relative w-full h-full duration-700 preserve-3d group-hover:rotate-y-180">
        
        {/* CARA FRONTAL */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg border border-cyan-500/30">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110" // Mantenemos el zoom
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-5 text-white backdrop-blur-sm">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        {/* CARA TRASERA */}
        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg rotate-y-180 bg-slate-900 border border-cyan-400/50 p-6 flex flex-col justify-center items-center text-center">
          <h4 className="text-xl font-bold text-cyan-300 mb-3">
            {title}
          </h4>
          <p className="text-slate-200">{details}</p>
          <a
            href="#contacto"
            className="mt-5 inline-block rounded-full px-4 py-2 text-sm font-medium bg-emerald-400 text-slate-900 hover:bg-emerald-300 transition"
          >
            Cotizar Servicio
          </a>
        </div>
      </div>
    </div>
  );
}