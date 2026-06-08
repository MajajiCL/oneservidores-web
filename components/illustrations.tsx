// Original SVG illustrations — simple isometric-style graphics drawn from primitives.
// Drawn with OneServidores orange. No raster traces of third-party artwork.

export function IllusDatacenter({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="dc-rack" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FF7800" stopOpacity="0.9" />
          <stop offset="1" stopColor="#E66B00" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="dc-light" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFE4C2" />
          <stop offset="1" stopColor="#FFF3E6" />
        </linearGradient>
      </defs>
      {/* floor shadow */}
      <ellipse cx="120" cy="178" rx="92" ry="9" fill="#FF7800" opacity="0.08" />
      {/* rack body */}
      <rect x="58" y="40" width="124" height="130" rx="10" fill="url(#dc-light)" stroke="#FFC785" />
      <rect x="68" y="50" width="104" height="110" rx="6" fill="white" />
      {/* slots */}
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <rect x="74" y={56 + i * 14} width="92" height="10" rx="2" fill="#F4F6F9" />
          <circle cx="80" cy={61 + i * 14} r="1.6" fill="#FF7800" />
          <circle cx="86" cy={61 + i * 14} r="1.6" fill="#FFC785" />
          <rect x="100" y={59 + i * 14} width="50" height="3" rx="1.5" fill="#CBD5E1" />
        </g>
      ))}
      {/* base */}
      <rect x="48" y="168" width="144" height="8" rx="4" fill="url(#dc-rack)" />
      {/* status leds */}
      <circle cx="120" cy="32" r="6" fill="#FF7800" opacity="0.2" />
      <circle cx="120" cy="32" r="3" fill="#FF7800" />
    </svg>
  );
}

export function IllusCloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="cloud-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFA94D" />
          <stop offset="1" stopColor="#FF7800" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="178" rx="92" ry="9" fill="#FF7800" opacity="0.08" />
      {/* cloud */}
      <path d="M70,80 a30,30 0 0 1 56,-10 a26,26 0 0 1 48,18 a22,22 0 0 1 -4,43 H78 a26,26 0 0 1 -8,-51 Z"
        fill="white" stroke="#FFC785" strokeWidth="2" />
      <path d="M70,80 a30,30 0 0 1 56,-10 a26,26 0 0 1 48,18 a22,22 0 0 1 -4,43 H78 a26,26 0 0 1 -8,-51 Z"
        fill="url(#cloud-g)" opacity="0.10" />
      {/* down arrows */}
      <path d="M100,140 v18 m0,0 l-5,-5 m5,5 l5,-5" stroke="#FF7800" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M120,140 v22 m0,0 l-5,-5 m5,5 l5,-5" stroke="#FF7800" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M140,140 v18 m0,0 l-5,-5 m5,5 l5,-5" stroke="#FF7800" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* server below */}
      <rect x="84" y="162" width="72" height="22" rx="4" fill="#FFE4C2" stroke="#FFC785" />
      <circle cx="92" cy="173" r="2" fill="#FF7800" />
      <rect x="100" y="171" width="48" height="4" rx="1.5" fill="white" />
    </svg>
  );
}

export function IllusNetwork({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="120" cy="178" rx="92" ry="9" fill="#FF7800" opacity="0.08" />
      {/* center router */}
      <rect x="98" y="78" width="44" height="32" rx="6" fill="#FF7800" />
      <rect x="106" y="86" width="28" height="4" rx="1.5" fill="white" opacity="0.6" />
      <rect x="106" y="94" width="20" height="4" rx="1.5" fill="white" opacity="0.6" />
      <circle cx="134" cy="100" r="2" fill="#FFE4C2" />
      {/* nodes */}
      {[
        { x: 40, y: 56 }, { x: 200, y: 56 },
        { x: 30, y: 130 }, { x: 210, y: 130 }
      ].map((n, i) => (
        <g key={i}>
          <line x1="120" y1="94" x2={n.x + 20} y2={n.y + 14} stroke="#FFC785" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x={n.x} y={n.y} width="40" height="28" rx="5" fill="white" stroke="#FFC785" strokeWidth="1.5" />
          <circle cx={n.x + 8}  cy={n.y + 8} r="2" fill="#FF7800" />
          <rect  x={n.x + 14}   y={n.y + 6} width="20" height="3" rx="1" fill="#CBD5E1" />
          <rect  x={n.x + 8}    y={n.y + 14} width="26" height="3" rx="1" fill="#E2E8F0" />
          <rect  x={n.x + 8}    y={n.y + 20} width="20" height="3" rx="1" fill="#E2E8F0" />
        </g>
      ))}
      {/* travelling packets */}
      <circle cx="80" cy="76" r="2.5" fill="#FF7800">
        <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="76" r="2.5" fill="#FF7800">
        <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
