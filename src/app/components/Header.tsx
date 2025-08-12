import React from "react";

type HeaderProps = {
  title?: string;
  desc?: string;
  variant?: "light" | "dark";
};

const Header: React.FC<HeaderProps> = ({
  title = "Innovando tu futuro digital",
  desc = "Bienvenido a nuestro sitio web. Aquí encontrarás información sobre nuestros servicios y novedades.",
  variant = "light", // por defecto oscuro
}) => {
  const variantClass =
    variant === "light"
      ? "bg-white text-black border border-black"
      : "bg-black text-white";

  return (
    <header className={`${variantClass} py-12 text-center`}>
      <h1 className="text-5xl font-black drop-shadow-lg mb-6">{title}</h1>
      <p className="text-xl max-w-2xl mx-auto drop-shadow-md">{desc}</p>
    </header>
  );
};

export default Header;
