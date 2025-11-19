// app/VideoIntro.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const MOBILE_VIDEO = "/assets/videos/iniciophone.mp4";
const DESKTOP_VIDEO = "/assets/videos/inicio.mp4"; // cámbialo al que quieras

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>(MOBILE_VIDEO); // asumimos móvil por defecto
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const finishIntro = () => {
    setFadeOut(true);
    onFinish();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pickSrc = (width: number) => {
      if (width <= MOBILE_BREAKPOINT) {
        setVideoSrc(MOBILE_VIDEO);
      } else {
        setVideoSrc(DESKTOP_VIDEO);
      }
    };

    // 👇 Primera detección
    pickSrc(window.innerWidth);

    // 👇 Escuchar cambios de tamaño (rotación, resize, etc.)
    const onResize = () => {
      pickSrc(window.innerWidth);
    };

    window.addEventListener("resize", onResize);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const tryPlay = async () => {
        try {
          await video.play();
        } catch (err) {
          console.log("Autoplay bloqueado, usuario deberá tocar play", err);
        }
      };

      void tryPlay();
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onFinish]);

  const handleVideoEnd = () => {
    finishIntro();
  };

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
      style={{ willChange: "opacity" }}
    >
      <video
        key={videoSrc} // 👈 fuerza reinicio del video al cambiar de src
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
