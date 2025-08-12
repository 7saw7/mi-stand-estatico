"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  variant?: "light" | "dark";
};

const Navbar: React.FC<NavbarProps> = ({ variant = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const variantClass =
    variant === "light"
      ? "bg-white text-black border-b-2 border-black"
      : "bg-black text-white";

  return (
    <nav
      className={`${variantClass} p-3 flex justify-between items-center shadow-xl`}
    >
      {/* Logo + Nombre */}
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={80} // tamaño más grande
          height={80}
          className="rounded-full border-4 border-gray-200 shadow-lg"
        />
        <span className="text-3xl font-bold">Blue Evolution</span>
      </Link>

      {/* Botón hamburguesa */}
      <button
        className="sm:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menú desktop */}
      <ul className="hidden sm:flex space-x-8 font-semibold">
        <li>
          <Link
            href="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/Service"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            href="/Contact"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-blue-700 flex flex-col space-y-2 p-4 sm:hidden">
          <li>
            <Link
              href="/"
              className="block py-2 hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/Service"
              className="block py-2 hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="block py-2 hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
