import React from "react";

type MainButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "light" | "dark";
};

const MainButton: React.FC<MainButtonProps> = ({ onClick, children, variant = "dark" }) => {
  const variantClass =
    variant === "light"
      ? "bg-white text-black border border-black"
      : "bg-[var(--color-verde)] text-white";
  return (
    <button
      onClick={onClick}
      className={`${variantClass} mt-6 text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export default MainButton;
