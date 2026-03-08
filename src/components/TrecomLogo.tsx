import logoImage from "@/assets/trecom-logo-tight.png";

interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  const isDark = variant === "dark";

  return (
    <img
      src={logoImage}
      alt="Trecom-Hvac & Mechanical"
      className={`${className} object-contain`}
      style={{
        mixBlendMode: isDark ? "multiply" : "screen",
        ...(variant === "light" ? { filter: "brightness(0) invert(1)" } : {}),
      }}
    />
  );
}
