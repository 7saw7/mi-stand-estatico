// app/VideoIntro.tsx
"use client";

import { useState } from "react";

export default function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
  };

  const handleTransitionEnd = () => {
    if (fadeOut) {
      onFinish();
    }
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
      style={{ willChange: "opacity" }} // Mejora 6
      onTransitionEnd={handleTransitionEnd}
    >
      <video
        autoPlay
        playsInline
        muted
        preload="auto"
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover pointer-events-none" // Mejora 5
      >
        <source src="/assets/videos/inicio.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
