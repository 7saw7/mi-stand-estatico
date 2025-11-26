"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { NAV, type NavTopItem } from "../app/config/nav"; // 👈 ruta relativa desde src/components

type NavbarProps = {
  variant?: "light" | "dark";
};

function itemIsActive(item: NavTopItem, pathname: string | null): boolean {
  if (!pathname) return false;
  if (pathname === item.href) return true;
  if ("groups" in item && item.groups) {
    return item.groups.some((g) =>
      g.items.some((leaf) => leaf.href === pathname)
    );
  }
  return false;
}

const Navbar: React.FC<NavbarProps> = ({ variant = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(
    null
  ); // acordeón móvil

  const pathname = usePathname();
  const currentPath = pathname || "/";
  const isDark = variant === "dark";

  const [hoveredPath, setHoveredPath] = useState<string | null>(currentPath);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) setMobileOpenSection(null); // al cerrar, colapsar todo
      return next;
    });
  };

  const baseClasses =
    "fixed inset-x-0 top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl transition-all duration-300";
  const themeClasses = isDark
    ? "text-slate-50 bg-transparent border-0"
    : "bg-transparent text-slate-900";

  return (
    <>
      {/* NAVBAR (logo + desktop) */}
      <nav className={`${baseClasses} ${themeClasses}`}>
        <div className="relative z-25 mx-auto flex max-w-6xl items-center justify-between gap-4 px-3 py-2 sm:px-4 sm:py-3">
          {/* Logo + Nombre */}
          <Link href="/" className="group flex items-center gap-3">
            <div
              className={[
                "relative flex h-20 w-20 items-center justify-center rounded-2xl",
                "bg-slate-900/80 border border-cyan-400/40 shadow-[0_10px_30px_rgba(15,23,42,0.9)]",
                "overflow-hidden",
              ].join(" ")}
            >
              <Image
                src="/assets/images/codeva-logo.png"
                alt="Codeva Studio"
                fill
                className="object-contain"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

          {/* Botón hamburguesa (solo móvil) */}
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-950/80 shadow-[0_8px_18px_rgba(15,23,42,0.9)] transition-all active:scale-95 sm:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
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
          <ul
            className="hidden items-center gap-2 text-[13px] font-medium sm:flex"
            onMouseLeave={() => setHoveredPath(currentPath)}
          >
            {NAV.map((item) => {
              const active = itemIsActive(item, pathname);
              const hovered = hoveredPath === item.href;
              const hasGroups = "groups" in item && item.groups;

              return (
                <li
                  key={item.label}
                  className="group/nav relative"
                  onMouseEnter={() => setHoveredPath(item.href)}
                >
                  <Link
                    href={item.href}
                    className={[
                      "group relative z-50 inline-flex items-center gap-1.5 px-4 py-2 transition-colors duration-250",
                      active || hovered ? "text-cyan-300" : "text-slate-100",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    {hasGroups && (
                      <span className="text-[10px] text-cyan-400/80">▾</span>
                    )}
                  </Link>

                  {/* Píldora animada */}
                  {hovered && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-cyan-500/20 bg-slate-900/70 shadow-[0_10px_24px_rgba(15,23,42,0.9)]"
                      layoutId="navbar-pill"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* Dropdown / mega menú */}
                  {hasGroups &&
                    (() => {
                      const groups = item.groups!;
                      const isSimple = groups.length === 1;

                      return (
                        <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-1 group-hover/nav:block z-50">
                          <div
                            className={[
                              "rounded-3xl border border-cyan-500/20 bg-slate-950/95 shadow-[0_24px_60px_rgba(8,14,35,0.95)] backdrop-blur-xl",
                              isSimple ? "w-[260px] p-3" : "w-[520px] p-4",
                            ].join(" ")}
                          >
                            {isSimple ? (
                              <div className="space-y-1.5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400/80">
                                  {groups[0].label}
                                </p>
                                <ul className="mt-1 space-y-1">
                                  {groups[0].items.map((leaf) => (
                                    <li key={leaf.href}>
                                      <Link
                                        href={leaf.href}
                                        className="block rounded-lg px-2 py-1.5 text-[12px] text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                                      >
                                        {leaf.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <div className="grid gap-4 sm:grid-cols-2">
                                {groups.map((group) => (
                                  <div
                                    key={group.label}
                                    className="space-y-1.5"
                                  >
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400/80">
                                      {group.label}
                                    </p>
                                    <ul className="space-y-1">
                                      {group.items.map((leaf) => (
                                        <li key={leaf.href}>
                                          <Link
                                            href={leaf.href}
                                            className="block rounded-lg px-2 py-1.5 text-[12px] text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                                          >
                                            {leaf.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MENÚ MÓVIL LATERAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay oscuro clicable */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm sm:hidden"
              onClick={() => {
                setIsOpen(false);
                setMobileOpenSection(null);
              }}
            />

            {/* Panel lateral premium */}
            <motion.aside
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.35,
              }}
              className="fixed right-0 top-0 bottom-0 z-60 w-[78%] max-w-[330px] sm:hidden"
            >
              {/* Glow / borde externo */}
              <div className="relative h-full">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-[1px] rounded-l-3xl 
                            bg-[linear-gradient(to_bottom,rgba(45,212,191,0.5),rgba(56,189,248,0.4),transparent)]
                            opacity-80"
                />
                {/* Card interna */}
                <div className="relative flex h-full flex-col rounded-l-3xl border-l border-cyan-500/40 bg-slate-950/98 shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  {/* Top bar dentro del panel */}
                  <div className="flex items-center justify-between px-4 pt-2 pb-2 border-b border-cyan-500/20">
                  </div>

                  {/* Lista de enlaces */}
                  <ul className="flex-1 space-y-2 overflow-y-auto px-4 py-4 text-sm">
                    {NAV.map((item) => {
                      const hasGroups = "groups" in item && item.groups;
                      const active = itemIsActive(item, pathname);
                      const isSectionOpen = mobileOpenSection === item.href;

                      return (
                        <li key={item.label}>
                          <div className="relative group">
                            {/* Glow/borde degradado al hover/active */}
                            <div
                              aria-hidden
                              className={`pointer-events-none absolute -inset-[1px] rounded-2xl
                                bg-[linear-gradient(120deg,rgba(45,212,191,0.55),rgba(56,189,248,0.4),transparent)]
                                opacity-0 transition-opacity duration-200
                                ${active ? "opacity-90" : "group-hover:opacity-60"}`}
                            />
                            <Link
                              href={item.href}
                              onClick={(e) => {
                                if (hasGroups) {
                                  e.preventDefault();
                                  setMobileOpenSection((prev) =>
                                    prev === item.href ? null : item.href
                                  );
                                } else {
                                  setIsOpen(false);
                                  setMobileOpenSection(null);
                                }
                              }}
                              className={`relative flex items-center justify-between rounded-2xl border px-3 py-2
                                bg-slate-950/90 border-cyan-500/30 shadow-[0_10px_25px_rgba(15,23,42,0.95)]
                                active:scale-[0.97] transition-all
                                ${
                                  active
                                    ? "text-emerald-300 border-emerald-400/70"
                                    : "text-slate-100"
                                }`}
                            >
                              <div className="flex flex-col">
                                <span className="text-[13px] font-medium">
                                  {item.label}
                                </span>
                                {hasGroups && (
                                  <span className="mt-0.5 text-[10px] text-cyan-300/80">
                                    Sección con más opciones
                                  </span>
                                )}
                              </div>

                              {hasGroups ? (
                                <span
                                  className={`ml-2 text-[10px] text-cyan-300 transition-transform
                                    ${isSectionOpen ? "rotate-90" : ""}`}
                                >
                                  ▸
                                </span>
                              ) : (
                                <span className="ml-2 text-[10px] text-cyan-300 group-hover:translate-x-0.5 transition-transform">
                                  ▸
                                </span>
                              )}
                            </Link>
                          </div>

                          {/* Submenú (grupos) */}
                          {hasGroups && isSectionOpen && (
                            <div className="mt-2 space-y-1 rounded-2xl border border-cyan-500/20 bg-slate-950/70 px-3 py-3">
                              {item.groups!.map((group) => (
                                <div key={group.label} className="space-y-1.5">
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/80">
                                    {group.label}
                                  </p>
                                  <div className="space-y-1">
                                    {group.items.map((leaf) => (
                                      <Link
                                        key={leaf.href}
                                        href={leaf.href}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setMobileOpenSection(null);
                                        }}
                                        className="block rounded-lg px-2 py-1.5 text-[12px]
                                                  text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-100 transition-colors"
                                      >
                                        {leaf.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Footer mini info */}
                  <div className="border-t border-cyan-500/20 px-4 py-3">
                    <p className="text-[10px] text-slate-500">
                      Codeva Studio ·{" "}
                      <span className="text-emerald-300">
                        Desarrollo web profesional
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
