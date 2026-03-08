interface TrecomLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrecomLogo({ className = "", variant = "dark" }: TrecomLogoProps) {
  const isDark = variant === "dark";
  const mainBlue = "#0a5a8a";
  const midBlue = "#1a8fc4";
  const lightBlue = "#3ac5e8";
  const titleFill = isDark ? mainBlue : "#ffffff";
  const subtitleFill = isDark ? midBlue : "rgba(255,255,255,0.8)";

  return (
    <svg
      viewBox="0 0 320 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="TrecomHvac & Mechanical"
    >
      {/* === Fan icon === */}
      <g transform="translate(4, 4)">
        {/* Top-right blade */}
        <ellipse cx="20" cy="8" rx="10" ry="5" transform="rotate(-35 20 8)" fill={lightBlue} opacity="0.9" />
        {/* Left blade */}
        <ellipse cx="8" cy="24" rx="10" ry="5" transform="rotate(85 8 24)" fill={mainBlue} />
        {/* Bottom-right blade */}
        <ellipse cx="26" cy="28" rx="10" ry="5" transform="rotate(35 26 28)" fill={midBlue} />
        {/* Hub */}
        <circle cx="18" cy="20" r="4.5" fill={mainBlue} />
        <circle cx="18" cy="20" r="2.2" fill={lightBlue} />
      </g>

      {/* === Valve icon === */}
      <g transform="translate(34, 6)">
        {/* Valve body */}
        <rect x="2" y="12" width="14" height="10" rx="2" fill={midBlue} />
        {/* Stem */}
        <rect x="6" y="4" width="5" height="9" rx="1" fill={midBlue} />
        {/* Handle */}
        <rect x="3.5" y="1" width="11" height="4" rx="2" fill={midBlue} />
        {/* Left pipe */}
        <rect x="-4" y="14.5" width="7" height="5" rx="1.5" fill={midBlue} />
        {/* Right pipe */}
        <rect x="15" y="14.5" width="7" height="5" rx="1.5" fill={midBlue} />
      </g>

      {/* === Water drops === */}
      <path d="M32 36c0 0-3 5-0.5 7.5 2.5-2.5-0.5-7.5-0.5-7.5z" fill={mainBlue} opacity="0.7" />
      <path d="M44 34c0 0-2.5 4.5-0.3 6.5 2.2-2-0.3-6.5-0.3-6.5z" fill={midBlue} opacity="0.6" />

      {/* === Brand text === */}
      <text
        x="62"
        y="20"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="19"
        fontWeight="700"
        fill={titleFill}
        dominantBaseline="central"
        letterSpacing="-0.3"
      >
        Trecom-Hvac
      </text>
      <text
        x="62"
        y="38"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="12.5"
        fontWeight="600"
        fill={subtitleFill}
        dominantBaseline="central"
        letterSpacing="0.5"
      >
        &amp; Mechanical
      </text>
    </svg>
  );
}
