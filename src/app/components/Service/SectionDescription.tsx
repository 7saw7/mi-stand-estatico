type SectionDescriptionProps = {
  text: string;
  variant?: "light" | "dark";
};

export default function SectionDescription({ text, variant = "dark" }: SectionDescriptionProps) {
  const textColor = variant === "light" ? "text-black" : "text-black";

  return (
    <p className={`${textColor} text-white mb-12 text-center`}>
      {text}
    </p>
  );
}
