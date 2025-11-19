// app/VideoIntro.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const finishIntro = () => {
    setFadeOut(true);
    onFinish();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS 15+ requiere muted y playsInline
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        // ✔ Intento predictivo — muy compatible en iPhone modernos
        await video.play();
      } catch (err) {
        // ❌ iOS lo bloqueó → saltar intro (UX perfecto)
        finishIntro();
      }
    };

    // pequeño delay ayuda a Safari en iPhone modernos
    setTimeout(() => {
      void tryPlay();
    }, 50);
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
