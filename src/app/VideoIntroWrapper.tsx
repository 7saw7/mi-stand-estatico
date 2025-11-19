// app/VideoIntroWrapper.tsx
"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import VideoIntro from "./VideoIntro";

export default function VideoIntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // usamos useRef para fijar la ruta inicial (por si cambia pathname luego)
  const isHomeOnFirstRender = useRef(pathname === "/").current;

  // si NO entró por "/", no hay intro
  const [introDone, setIntroDone] = useState(!isHomeOnFirstRender);

  const handleIntroFinish = () => {
    setIntroDone(true);
  };

  return (
    <>
      {isHomeOnFirstRender && !introDone && (
        <VideoIntro onFinish={handleIntroFinish} />
      )}

      <div
        className={`transition-opacity duration-700 ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
