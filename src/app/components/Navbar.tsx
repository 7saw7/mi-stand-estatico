"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavbarProps = {
  variant?: "light" | "dark";
};

const links = [
  { href: "/", label: "Inicio" },
  { href: "/Service", label: "Servicios" },
  { href: "/Projects", label: "Proyectos" },
  { href: "/Stack", label: "Tecnología" },
  { href: "/Contact", label: "Contacto" },
];

const Navbar: React.FC<NavbarProps> = ({ variant = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isDark = variant === "dark";

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const baseClasses =
    "sticky top-0 w-full backdrop-blur-xl transition-all duration-300";
    
  const themeClasses = isDark
    ? [
        "text-slate-50",
        "bg-transparent border-0",
      ].join(" ")
    : "bg-transparent text-slate-900";


  return (
    <nav className={`${baseClasses} ${themeClasses}`}>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 sm:py-3 gap-4">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={[
              "relative flex h-11 w-11 items-center justify-center rounded-2xl",
              "bg-slate-900/80 border border-cyan-400/40 shadow-[0_10px_30px_rgba(15,23,42,0.9)]",
              "overflow-hidden",
            ].join(" ")}
          >
            <Image
              src="/assets/images/logo.png"
              alt="Blue Evolution"
              fill
              className="object-contain p-1.5"
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent)]" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[19px] font-semibold tracking-tight">
              Codeva Studio
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-cyan-400/80">
              Software Engineering Studio
            </span>
          </div>
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-950/80 shadow-[0_8px_18px_rgba(15,23,42,0.9)] active:scale-95 transition-all"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute inset-x-0 h-[2px] rounded-full bg-cyan-400 transition-all ${
                isOpen ? "top-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute inset-x-0 h-[2px] rounded-full bg-cyan-400 transition-all ${
                isOpen ? "opacity-0" : "top-1/2"
              }`}
            />
            <span
              className={`absolute inset-x-0 h-[2px] rounded-full bg-cyan-400 transition-all ${
                isOpen ? "top-1/2 -rotate-45" : "bottom-1"
              }`}
            />
          </div>
        </button>

        {/* Menú desktop */}
        <ul className="hidden sm:flex items-center gap-2 text-[13px] font-medium">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl",
                    "transition-all duration-250",
                    "bg-slate-900/70 border border-cyan-500/20",
                    "shadow-[0_10px_24px_rgba(15,23,42,0.9)]",
                    "hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(56,189,248,0.4)]",
                    "before:absolute before:inset-x-1 before:top-0 before:h-[1.3px]",
                    "before:bg-gradient-to-r before:from-cyan-400/40 before:via-sky-300/70 before:to-cyan-400/40 before:opacity-0",
                    "group-hover:before:opacity-100 before:transition-opacity before:duration-300",
                    active
                      ? "text-cyan-300 border-cyan-400/70"
                      : "text-slate-100 hover:text-cyan-300",
                  ].join(" ")}
                >
                  <span>{link.label}</span>
                  <span
                    className="text-[9px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span
                    className="pointer-events-none absolute -bottom-2 left-3 right-3 h-2 opacity-0 group-hover:opacity-80 blur-[6px] bg-cyan-400/30 transition-opacity"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="sm:hidden border-t border-cyan-500/10 bg-slate-950/98 relative z-20">
          <ul className="flex flex-col px-3 py-3 gap-2 text-sm">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "group relative flex items-center justify-between px-3 py-2 rounded-2xl",
                      "bg-slate-900/80 border border-cyan-500/25",
                      "shadow-[0_8px_20px_rgba(15,23,42,0.95)]",
                      "active:scale-[0.98] transition-all",
                      active
                        ? "text-cyan-300 border-cyan-400/70"
                        : "text-slate-100",
                    ].join(" ")}
                  >
                    <span>{link.label}</span>
                    <span className="text-[9px] text-cyan-300 group-hover:translate-x-0.5 transition-transform">
                      ▸
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
