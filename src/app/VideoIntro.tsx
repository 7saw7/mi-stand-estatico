// app/VideoIntro.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnd = () => {
    setFadeOut(true);
    onFinish();
  };

  // Intentar reproducir al montar (ayuda en algunos iPhone)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // iOS puede bloquear igual; en ese caso saldrá el botón de play
        // y el usuario podrá tocarlo porque ya no tiene pointer-events-none
      }
    };

    // Si está muteado, debería poder hacer autoplay
    if (video.muted) {
      void tryPlay();
    }
  }, []);

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
