import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  variant?: "light" | "dark";
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  variant = "dark",
}) => {
  const variantClass =
    variant === "light"
      ? "bg-white text-black border border-black"
      : "text-white";

  return (
    <div className={`p-4 rounded-lg ${variantClass}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

export default ServiceCard;
