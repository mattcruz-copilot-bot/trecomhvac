interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  const textColor = variant === "dark" ? "#1a3a5c" : "#ffffff";
  const accentDark = "#0d4f8b";
  const accentMid = "#1a8fc4";
  const accentLight = "#3ac5e8";

  return (
    <svg
      viewBox="0 0 320 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fan blade - top right */}
      <ellipse cx="22" cy="18" rx="14" ry="7" transform="rotate(-30 22 18)" fill={accentLight} />
      {/* Fan blade - bottom left */}
      <ellipse cx="12" cy="38" rx="14" ry="7" transform="rotate(90 12 38)" fill={accentDark} />
      {/* Fan blade - bottom right */}
      <ellipse cx="30" cy="42" rx="14" ry="7" transform="rotate(30 30 42)" fill={accentMid} />
      {/* Fan center hub */}
      <circle cx="22" cy="32" r="5" fill={accentDark} />
      <circle cx="22" cy="32" r="2.5" fill={accentLight} />

      {/* Valve/tap body */}
      <rect x="42" y="22" width="16" height="12" rx="2" fill={accentMid} />
      {/* Valve stem */}
      <rect x="47" y="14" width="6" height="10" rx="1" fill={accentMid} />
      {/* Valve handle */}
      <rect x="44" y="12" width="12" height="4" rx="2" fill={accentMid} />
      {/* Valve pipe left */}
      <rect x="36" y="25" width="8" height="6" rx="1" fill={accentMid} />
      {/* Valve pipe right */}
      <rect x="56" y="25" width="8" height="6" rx="1" fill={accentMid} />

      {/* Water droplet 1 */}
      <path d="M38 42 C38 42, 34 50, 38 54 C42 50, 38 42, 38 42Z" fill={accentMid} />
      {/* Water droplet 2 */}
      <path d="M52 40 C52 40, 49 46, 52 49 C55 46, 52 40, 52 40Z" fill={accentLight} />

      {/* Text: Trecom-Hvac */}
      <text
        x="74"
        y="35"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Trecom-Hvac
      </text>
      {/* Text: & Mechanical */}
      <text
        x="74"
        y="58"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill={variant === "dark" ? accentMid : "rgba(255,255,255,0.7)"}
        letterSpacing="0.5"
      >
        & Mechanical
      </text>
    </svg>
  );
}
