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
      {/* === 3-blade propeller fan === */}
      <g transform="translate(4, 2)">
        {/* Top-right blade - curved like a propeller */}
        <path
          d="M24 18 C26 14, 30 6, 34 2 C37 -1, 40 0, 39 4 C38 8, 32 14, 28 18 C26 20, 24 20, 24 18Z"
          fill={lightBlue}
        />
        <path
          d="M24 18 C20 14, 14 8, 8 4 C4 2, 2 4, 4 7 C7 11, 16 16, 22 18 C24 19, 25 19, 24 18Z"
          fill={lightBlue}
          opacity="0.85"
        />

        {/* Bottom-left blade */}
        <path
          d="M20 24 C16 26, 8 30, 2 34 C-1 36, -1 39, 3 38 C7 37, 16 32, 20 28 C22 26, 22 24, 20 24Z"
          fill={mainBlue}
        />
        <path
          d="M20 24 C16 28, 10 36, 8 42 C7 46, 9 47, 12 44 C15 41, 18 32, 20 26 C21 24, 21 23, 20 24Z"
          fill={mainBlue}
          opacity="0.85"
        />

        {/* Right blade */}
        <path
          d="M28 26 C32 28, 40 30, 46 30 C50 30, 50 27, 46 26 C42 25, 34 24, 28 24 C26 24, 26 25, 28 26Z"
          fill={midBlue}
        />
        <path
          d="M28 26 C30 30, 34 38, 38 44 C40 47, 42 46, 42 42 C41 38, 34 30, 30 26 C28 25, 27 25, 28 26Z"
          fill={midBlue}
          opacity="0.85"
        />

        {/* Hub */}
        <circle cx="24" cy="24" r="5.5" fill={mainBlue} />
        <circle cx="24" cy="24" r="2.8" fill={lightBlue} />
      </g>

      {/* === Tap / Faucet === */}
      <g transform="translate(50, 4)">
        {/* Handle bar */}
        <rect x="3" y="0" width="18" height="5" rx="2.5" fill={midBlue} />
        {/* Stem */}
        <rect x="8.5" y="4.5" width="7" height="11" rx="1.5" fill={midBlue} />
        {/* Valve body */}
        <rect x="1" y="14" width="22" height="14" rx="3" fill={midBlue} />
        {/* Left pipe */}
        <rect x="-7" y="17" width="9" height="8" rx="2" fill={midBlue} />
        {/* Right pipe */}
        <rect x="22" y="17" width="9" height="8" rx="2" fill={midBlue} />
        {/* Pipe flanges */}
        <rect x="-9" y="16.5" width="3.5" height="9" rx="1.2" fill={mainBlue} />
        <rect x="29.5" y="16.5" width="3.5" height="9" rx="1.2" fill={mainBlue} />
      </g>

      {/* === Water drops === */}
      <path
        d="M56 40 Q52 48, 54 52 Q56 55, 60 52 Q62 48, 58 40Z"
        fill={mainBlue}
      />
      <path
        d="M70 38 Q67 44, 68.5 47 Q70 49.5, 73 47 Q74.5 44, 72 38Z"
        fill={midBlue}
        opacity="0.75"
      />

      {/* === Brand text === */}
      <text
        x="98"
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
        x="98"
        y="48"
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
