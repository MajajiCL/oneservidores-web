"use client";

/**
 * Mini server rack SVG with animated LEDs — fits inside small cards.
 */
export function MiniRack({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mr-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E293B" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="mr-brand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF7800" />
          <stop offset="1" stopColor="#FFA94D" />
        </linearGradient>
      </defs>

      {/* shadow */}
      <ellipse cx="110" cy="186" rx="80" ry="6" fill="#FF7800" opacity="0.18" />

      {/* outer chassis */}
      <rect x="42" y="14" width="136" height="166" rx="10" fill="url(#mr-body)" />

      {/* brand top bar */}
      <rect x="50" y="22" width="120" height="14" rx="3" fill="url(#mr-brand)" />
      <text x="110" y="32" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="900"
            fill="white" textAnchor="middle" letterSpacing="1.5">ONE SERVIDORES</text>

      {/* server units */}
      {[44, 60, 76, 92, 108, 124, 140, 156].map((y, i) => (
        <g key={i}>
          <rect x="50" y={y} width="120" height="12" rx="2" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
          {/* drive slots */}
          {[0, 1, 2, 3, 4, 5].map((j) => (
            <rect key={j} x={58 + j * 14} y={y + 3} width="10" height="6" rx="0.8" fill="#475569" />
          ))}
          {/* status LEDs (animated) */}
          <circle cx={154} cy={y + 6} r="1.6" fill="#FF7800">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur={`${1.2 + i * 0.15}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={160} cy={y + 6} r="1.6" fill="#FFA94D">
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur={`${1.4 + i * 0.17}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* bottom power strip */}
      <rect x="50" y="170" width="120" height="4" rx="1.5" fill="url(#mr-brand)" />
    </svg>
  );
}
