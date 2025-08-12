import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type FooterProps = {
  variant?: "light" | "dark";
};

const Footer: React.FC<FooterProps> = ({ variant = "dark" }) => {
  const variantClass =
    variant === "light"
      ? "bg-white text-black border-t-2 border-black"
      : "bg-black text-white";

  return (
    <footer className={`${variantClass} text-center py-8 mt-10`}>
      <p className="mb-4">
        © 2025 Nombre de Tu Empresa. Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-600 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-sky-400 transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
