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
  const subtitleFill = isDark ? midBlue : "rgba(255,255,255,0.85)";

  return (
    <svg
      viewBox="0 0 400 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Trecom-Hvac & Mechanical"
    >
      {/* === 3-blade propeller fan (wide rounded blades) === */}
      <g transform="translate(26, 28)">
        {/* Top-right blade */}
        <ellipse
          cx="0" cy="-14"
          rx="7" ry="14"
          transform="rotate(-30)"
          fill={lightBlue}
        />
        {/* Bottom-left blade */}
        <ellipse
          cx="0" cy="-14"
          rx="7" ry="14"
          transform="rotate(90)"
          fill={mainBlue}
        />
        {/* Bottom-right blade */}
        <ellipse
          cx="0" cy="-14"
          rx="7" ry="14"
          transform="rotate(210)"
          fill={midBlue}
        />
        {/* Hub */}
        <circle cx="0" cy="0" r="5" fill={mainBlue} />
        <circle cx="0" cy="0" r="2.5" fill={lightBlue} />
      </g>

      {/* === Tap / Faucet === */}
      <g transform="translate(52, 6)">
        {/* Handle bar */}
        <rect x="3" y="0" width="18" height="5" rx="2.5" fill={midBlue} />
        {/* Stem */}
        <rect x="8.5" y="4.5" width="7" height="10" rx="1.5" fill={midBlue} />
        {/* Valve body */}
        <rect x="1" y="13" width="22" height="14" rx="3" fill={midBlue} />
        {/* Left pipe */}
        <rect x="-7" y="16" width="9" height="8" rx="2" fill={midBlue} />
        {/* Right pipe */}
        <rect x="22" y="16" width="9" height="8" rx="2" fill={midBlue} />
        {/* Pipe flanges */}
        <rect x="-9" y="15.5" width="3.5" height="9" rx="1.2" fill={mainBlue} />
        <rect x="29.5" y="15.5" width="3.5" height="9" rx="1.2" fill={mainBlue} />
      </g>

      {/* === Water drops === */}
      <path
        d="M58 42 Q54 50, 56 53 Q58 56, 62 53 Q64 50, 60 42Z"
        fill={mainBlue}
      />
      <path
        d="M72 40 Q69 46, 70.5 48.5 Q72 51, 75 48.5 Q76.5 46, 74 40Z"
        fill={midBlue}
        opacity="0.75"
      />

      {/* === Brand text === */}
      <text
        x="100"
        y="24"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill={titleFill}
        dominantBaseline="central"
        letterSpacing="-0.5"
      >
        Trecom-Hvac
      </text>
      <text
        x="100"
        y="47"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill={subtitleFill}
        dominantBaseline="central"
        letterSpacing="0.3"
      >
        &amp; Mechanical
      </text>
    </svg>
  );
}
