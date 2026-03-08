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
      viewBox="0 0 380 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Trecom-Hvac & Mechanical"
    >
      {/* === Fan / Propeller (3 bold blades) === */}
      <g transform="translate(6, 4)">
        {/* Top blade */}
        <path
          d="M22 20 C22 20, 14 4, 6 2 C-2 0, 0 10, 6 14 C12 18, 22 20, 22 20Z"
          fill={lightBlue}
        />
        {/* Bottom-left blade */}
        <path
          d="M20 24 C20 24, 4 26, 0 34 C-4 42, 6 40, 12 36 C18 32, 20 24, 20 24Z"
          fill={mainBlue}
        />
        {/* Bottom-right blade */}
        <path
          d="M24 24 C24 24, 32 38, 40 38 C48 38, 44 28, 38 26 C32 24, 24 24, 24 24Z"
          fill={midBlue}
        />
        {/* Hub */}
        <circle cx="22" cy="22" r="5" fill={mainBlue} />
        <circle cx="22" cy="22" r="2.5" fill={lightBlue} />
      </g>

      {/* === Tap / Faucet === */}
      <g transform="translate(46, 4)">
        {/* Handle bar */}
        <rect x="4" y="0" width="16" height="4.5" rx="2.2" fill={midBlue} />
        {/* Stem */}
        <rect x="9" y="4" width="6" height="10" rx="1.5" fill={midBlue} />
        {/* Valve body */}
        <rect x="2" y="13" width="20" height="13" rx="3" fill={midBlue} />
        {/* Left pipe */}
        <rect x="-6" y="16" width="9" height="7" rx="2" fill={midBlue} />
        {/* Right pipe */}
        <rect x="21" y="16" width="9" height="7" rx="2" fill={midBlue} />
        {/* Pipe ends (flanges) */}
        <rect x="-8" y="15.5" width="3" height="8" rx="1" fill={mainBlue} />
        <rect x="29" y="15.5" width="3" height="8" rx="1" fill={mainBlue} />
      </g>

      {/* === Water drops === */}
      {/* Large drop */}
      <path
        d="M52 36 C52 36, 47 44, 49 48 C50.5 51, 55.5 51, 57 48 C59 44, 54 36, 52 36Z"
        fill={mainBlue}
      />
      {/* Small drop */}
      <path
        d="M66 34 C66 34, 62.5 40, 64 43 C65 45, 69 45, 70 43 C71.5 40, 68 34, 66 34Z"
        fill={midBlue}
        opacity="0.8"
      />

      {/* === Brand text === */}
      <text
        x="90"
        y="22"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill={titleFill}
        dominantBaseline="central"
        letterSpacing="-0.5"
      >
        Trecom-Hvac
      </text>
      <text
        x="90"
        y="44"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill={subtitleFill}
        dominantBaseline="central"
        letterSpacing="0.8"
      >
        &amp; Mechanical
      </text>
    </svg>
  );
}
