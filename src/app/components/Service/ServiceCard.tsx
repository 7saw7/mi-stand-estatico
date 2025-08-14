type ServiceCardProps = {
  title: string;
  description: string;
  variant?: "light" | "dark";
  buttonText?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ServiceCard({
  title,
  description,
  children,
  variant = "dark",
  buttonText = "Más información",
  onClick,
}: ServiceCardProps) {
  const bgColor = variant === "light" ? "bg-white" : "bg-[var(--color-verde)]";
  const titleColor = variant === "light" ? "text-black" : "text-white";
  const descColor = variant === "light" ? "text-gray-600" : "text-white";
  const variantClass = variant === "light" ? "bg-gray-200" : "bg-white";

  return (
    <div className={`${bgColor} rounded-2xl shadow-lg p-6 hover:shadow-2xl transition`}>
      <h2 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h2>
      <p className={descColor}>{description}</p>
      {children && (
      <button
        onClick={onClick}
        className={`${variantClass} mt-6 text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300`}
      >
        {buttonText}
      </button>
      )}
    </div>
  );
}