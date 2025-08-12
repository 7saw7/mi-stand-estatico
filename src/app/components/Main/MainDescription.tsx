import React from "react";

type MainDescriptionProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

const MainDescription: React.FC<MainDescriptionProps> = ({ children, variant = "dark" }) => {
const variantClass =
    variant === "light"
      ? "bg-white text-black border border-black"
      : "bg-black text-white";
  return (
    <p className={`${variantClass}`}>
      {children}
    </p>
  );
};

export default MainDescription;
