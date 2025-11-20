"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const MOBILE_VIDEO = "/assets/videos/iniciophone.mp4";
const DESKTOP_VIDEO = "/assets/videos/inicio.mp4";

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const finishIntro = () => {
    setFadeOut(true);
    onFinish();
  };

  // 🟦 Detectar device ANTES de mostrar video
  useEffect(() => {
    if (typeof window === "undefined") return;

    const pickSrc = (width: number) =>
      width <= MOBILE_BREAKPOINT ? MOBILE_VIDEO : DESKTOP_VIDEO;

    // 1️⃣ Inicial: detección antes de mostrar nada
    const initialSrc = pickSrc(window.innerWidth);
    setVideoSrc(initialSrc);

    // 2️⃣ Opcional: cambiar si se rota o resize
    const onResize = () => {
      const newSrc = pickSrc(window.innerWidth);
      setVideoSrc((prev) => (prev !== newSrc ? newSrc : prev));
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // 🟩 Autoplay seguro después de determinar videoSrc
  useEffect(() => {
    if (!videoSrc) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn("Autoplay bloqueado en iOS", err);
      }
    };

    void tryPlay();
  }, [videoSrc]);

  // 🟥 Mientras no sabemos cuál video usar → pantalla negra
  if (!videoSrc) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black opacity-100" />
    );
  }

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
        key={videoSrc}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finishIntro}
        className="w-full h-full object-cover transition-opacity duration-500"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
