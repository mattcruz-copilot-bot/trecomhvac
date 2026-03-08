interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  const textColor = variant === "dark" ? "#0a5a8a" : "#ffffff";
  const subtitleColor = variant === "dark" ? "#1a8fc4" : "rgba(255,255,255,0.75)";
  const accentDark = "#0a5a8a";
  const accentMid = "#1a8fc4";
  const accentLight = "#3ac5e8";

  return (
    <svg
      viewBox="0 0 340 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fan blade - top right */}
      <ellipse cx="18" cy="10" rx="11" ry="5.5" transform="rotate(-30 18 10)" fill={accentLight} />
      {/* Fan blade - bottom left */}
      <ellipse cx="9" cy="26" rx="11" ry="5.5" transform="rotate(90 9 26)" fill={accentDark} />
      {/* Fan blade - bottom right */}
      <ellipse cx="24" cy="30" rx="11" ry="5.5" transform="rotate(30 24 30)" fill={accentMid} />
      {/* Fan center hub */}
      <circle cx="18" cy="22" r="4" fill={accentDark} />
      <circle cx="18" cy="22" r="2" fill={accentLight} />

      {/* Valve/tap body */}
      <rect x="34" y="16" width="13" height="10" rx="1.5" fill={accentMid} />
      {/* Valve stem */}
      <rect x="38" y="9" width="5" height="8" rx="1" fill={accentMid} />
      {/* Valve handle */}
      <rect x="35.5" y="7" width="10" height="3.5" rx="1.5" fill={accentMid} />
      {/* Valve pipe left */}
      <rect x="28" y="18.5" width="7" height="5" rx="1" fill={accentMid} />
      {/* Valve pipe right */}
      <rect x="46" y="18.5" width="7" height="5" rx="1" fill={accentMid} />

      {/* Water droplet 1 */}
      <path d="M30 32 C30 32, 27 38, 30 41 C33 38, 30 32, 30 32Z" fill={accentDark} />
      {/* Water droplet 2 */}
      <path d="M42 30 C42 30, 39.5 35, 42 37.5 C44.5 35, 42 30, 42 30Z" fill={accentMid} />

      {/* Text: Trecom-Hvac */}
      <text
        x="60"
        y="22"
        fontFamily="'Plus Jakarta Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill={textColor}
        letterSpacing="-0.3"
        dominantBaseline="middle"
      >
        Trecom-Hvac
      </text>
      {/* Text: & Mechanical */}
      <text
        x="60"
        y="40"
        fontFamily="'Plus Jakarta Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill={subtitleColor}
        letterSpacing="0.3"
        dominantBaseline="middle"
      >
        & Mechanical
      </text>
    </svg>
  );
}
