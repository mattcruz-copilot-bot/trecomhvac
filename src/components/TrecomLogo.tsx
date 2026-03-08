import logoImage from "@/assets/trecom-logo-tight.png";

interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`${className}`}
      style={{
        backgroundImage: `url(${logoImage})`,
        backgroundSize: "180%",
        backgroundPosition: "center 42%",
        backgroundRepeat: "no-repeat",
        mixBlendMode: isDark ? "multiply" : "screen",
        ...(variant === "light" ? { filter: "brightness(0) invert(1)" } : {}),
      }}
      role="img"
      aria-label="Trecom-Hvac & Mechanical"
    />
  );
}
