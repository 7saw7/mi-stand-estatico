type ServiceCardProps = {
  title: string;
  description: string;
  variant?: "light" | "dark";
};

export default function ServiceCard({ title, description, variant = "dark" }: ServiceCardProps) {
  const bgColor = variant === "light" ? "bg-white" : "bg-gray-800";
  const titleColor = variant === "light" ? "text-black" : "text-white";
  const descColor = variant === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <div className={`${bgColor} rounded-2xl shadow-lg p-6 hover:shadow-2xl transition`}>
      <h2 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h2>
      <p className={descColor}>{description}</p>
    </div>
  );
}
