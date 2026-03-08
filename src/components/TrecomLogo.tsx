import logoImage from "@/assets/trecom-logo-main.jpg";

interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  return (
    <img
      src={logoImage}
      alt="Trecom-Hvac & Mechanical"
      className={`${className} object-contain`}
      style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}
