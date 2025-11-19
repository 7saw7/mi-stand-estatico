// app/VideoIntroWrapper.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import VideoIntro from "./VideoIntro";
import CodevaLoader from "./CodevaLoader";

export default function VideoIntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomeOnFirstRender = useRef(pathname === "/").current;

  const [introDone, setIntroDone] = useState(!isHomeOnFirstRender);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }

    const handleLoad = () => setPageLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleIntroFinish = () => {
    setIntroDone(true);
  };

  return (
    <>
      {/* Contenido SIEMPRE renderizado */}
      {children}

      {/* Video solo al entrar por "/" y mientras no haya terminado */}
      {isHomeOnFirstRender && !introDone && (
        <VideoIntro onFinish={handleIntroFinish} />
      )}

      {/* Loader premium encima, solo después del video y hasta que cargue todo */}
      {isHomeOnFirstRender && introDone && !pageLoaded && <CodevaLoader />}
    </>
  );
}
