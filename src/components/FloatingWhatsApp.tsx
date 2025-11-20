"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/51916983980" // ← cambia a tu número
      target="_blank"
      className="
        fixed
        bottom-5 right-5
        z-[9999]
        bg-[#25D366]
        text-white
        w-14 h-14
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition-all
        animate-[fadeIn_0.7s_ease-out]
      "
    >
      <FaWhatsapp size={32} />
    </Link>
  );
}
