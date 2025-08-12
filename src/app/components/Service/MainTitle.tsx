interface MainTitleProps {
  text: string;
  variant?: "light" | "dark";
}

export default function MainTitle({ text, variant = "dark" }: MainTitleProps) {
  const textColor = variant === "light" ? "text-black" : "text-white";

  return (
    <div className="text-center mb-8">
      <h1 className={`text-4xl font-bold ${textColor}`}>{text}</h1>
    </div>
  );
}
