// src/components/Service/Modal.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // ESC + bloqueo de scroll
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]); // 👈 siempre 2 dependencias, tamaño fijo

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        px-4 sm:px-6
      "
    >
      {/* Backdrop clicable */}
      <div
        className="
          absolute inset-0 h-full w-full
          bg-slate-950/70
          backdrop-blur-sm
          cursor-pointer
        "
        onClick={onClose}
      />

      {/* Panel principal ancho */}
      <div
        className="
          relative w-full
          max-w-5xl lg:max-w-6xl
          max-h-[min(90vh,900px)]
          overflow-y-auto
          rounded-[2.1rem]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-4 top-4 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full border border-slate-700/70
            bg-slate-900/80 text-slate-300
            shadow-lg shadow-slate-900/80
            hover:text-emerald-300 hover:border-emerald-400
            transition
          "
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        {children}
      </div>
    </div>
  );
}
