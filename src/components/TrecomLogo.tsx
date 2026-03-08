import logoImage from "@/assets/trecom-logo-tight.png";

interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ position: "relative" }}
    >
      <img
        src={logoImage}
        alt="Trecom-Hvac & Mechanical"
        className="object-contain"
        style={{
          height: "250%",
          width: "auto",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
          mixBlendMode: isDark ? "multiply" : "screen",
          ...(variant === "light" ? { filter: "brightness(0) invert(1)" } : {}),
        }}
      />
    </div>
  );
}
