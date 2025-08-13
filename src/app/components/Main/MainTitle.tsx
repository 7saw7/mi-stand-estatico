import React from "react";

type MainTitleProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

const MainTitle: React.FC<MainTitleProps> = ({ children, variant = "dark" }) => {
  const variantClass =
    variant === "light"
      ? "bg-white text-black border border-black"
      : "text-white";
  return (
    <h2 className={`${variantClass} text-3xl font-bold mb-4 `}>
      {children}
    </h2>
  );
};

export default MainTitle;
