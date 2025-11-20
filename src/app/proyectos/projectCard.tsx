"use client";

import React from "react";
import Image from "next/image";

export type Project = {
  id: string;
  tag: string;
  title: string;
  text: string;
  images: string[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = React.useState<string>(
    project.images[0]
  );

  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
    >
      {/* Glow */}
      <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl opacity-70" />

      {/* Imagen principal */}
      <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/60">
        <div className="relative h-52 w-full sm:h-60">
          <Image
            src={selectedImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Miniaturas */}
        <div className="flex gap-1 border-t border-slate-800 bg-slate-950/80 px-2 py-2">
          {project.images.map((img: string, i: number) => {
            const active = img === selectedImage;

            return (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`
                  relative h-12 flex-1 overflow-hidden rounded-lg transition-all
                  ${active ? "ring-2 ring-emerald-400" : "opacity-70 hover:opacity-100"}
                `}
              >
                <Image
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 25vw, 10vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Texto */}
      <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
        {project.tag}
      </span>

      <h3 className="mt-3 text-[17px] font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-[13px]">{project.text}</p>
    </article>
  );
}
