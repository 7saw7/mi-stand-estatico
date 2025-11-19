// app/VideoIntro.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const finishIntro = () => {
    setFadeOut(true);
    onFinish();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Aseguramos configuración para iOS
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        await video.play();
        // ✅ Si autoplay se permite, todo ok
      } catch (err) {
        // ❌ Si iOS bloquea autoplay:
        // NO llamamos finishIntro → dejamos el video visible
        // iOS mostrará el icono de play y el usuario podrá tocar.
        console.log("Autoplay bloqueado, usuario deberá tocar play", err);
      }
    };

    void tryPlay();
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
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src="/assets/videos/inicio.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
