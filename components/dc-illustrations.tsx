"use client";

/**
 * Original datacenter infographic SVGs — each one a stylized
 * geometric illustration. Drawn from primitives in OneServidores
 * brand palette. Not traces or copies of any third-party asset.
 */

export function PowerIllu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pwr-a" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FF7800" />
          <stop offset="1" stopColor="#E66B00" />
        </linearGradient>
        <linearGradient id="pwr-b" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFA94D" />
          <stop offset="1" stopColor="#FF8C1A" />
        </linearGradient>
      </defs>
      {/* Two power paths converging */}
      <g stroke="#FF7800" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.5">
        <path d="M 20 40 L 80 40 L 80 90 L 120 90">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.4s" repeatCount="indefinite" />
        </path>
        <path d="M 20 140 L 80 140 L 80 90 L 120 90">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.6s" repeatCount="indefinite" />
        </path>
        <path d="M 120 90 L 220 90">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
      {/* Source A — utility line */}
      <g transform="translate(0 24)">
        <rect x="2" y="0" width="40" height="32" rx="4" fill="url(#pwr-a)" />
        <text x="22" y="20" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700" fill="white" textAnchor="middle">A+</text>
      </g>
      {/* Source B — generator */}
      <g transform="translate(0 124)">
        <rect x="2" y="0" width="40" height="32" rx="4" fill="url(#pwr-b)" />
        <text x="22" y="20" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700" fill="white" textAnchor="middle">B+</text>
      </g>
      {/* UPS in middle */}
      <g transform="translate(102 72)">
        <rect x="0" y="0" width="36" height="36" rx="6" fill="rgba(255,120,0,0.10)" stroke="#FF7800" strokeWidth="1.5" />
        <path d="M 13 8 L 9 20 H 17 L 13 28 L 26 14 H 18 L 22 8 Z" fill="#FF7800" />
      </g>
      {/* Load — server */}
      <g transform="translate(196 64)">
        <rect x="0" y="0" width="36" height="52" rx="4" fill="rgba(255,255,255,0.04)" stroke="#FFA94D" strokeWidth="1" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="4" y={4 + i * 11} width="28" height="8" rx="1.5" fill="rgba(255,255,255,0.08)" />
        ))}
        <circle cx="32" cy="9" r="1.5" fill="#FF7800">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* N+1 badge */}
      <text x="120" y="170" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="2">N + 1 REDUNDANCY</text>
    </svg>
  );
}

export function CoolingIllu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Hot/cold aisles */}
      {/* Cold aisle (top) */}
      <rect x="20" y="32" width="200" height="40" rx="6" fill="rgba(120,180,255,0.10)" stroke="rgba(120,180,255,0.30)" strokeDasharray="3 3" />
      <text x="120" y="56" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#9BC4FF" textAnchor="middle" letterSpacing="2">COLD AISLE</text>
      {/* Hot aisle (bottom) */}
      <rect x="20" y="108" width="200" height="40" rx="6" fill="rgba(255,120,0,0.12)" stroke="rgba(255,120,0,0.30)" strokeDasharray="3 3" />
      <text x="120" y="132" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="2">HOT AISLE</text>
      {/* Server racks (vertical bars dividing aisles) */}
      {[40, 80, 120, 160, 200].map((x, i) => (
        <g key={i}>
          <rect x={x - 8} y="75" width="16" height="30" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
          {/* LEDs */}
          <circle cx={x} cy={82} r="1" fill="#FF7800">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.4 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy={88} r="1" fill="#FFC785" />
        </g>
      ))}
      {/* Air flow arrows */}
      {[40, 80, 120, 160, 200].map((x, i) => (
        <g key={i}>
          {/* cold descending */}
          <path d={`M ${x - 12} 72 L ${x - 12} 75 M ${x - 12} 75 L ${x - 14} 73 M ${x - 12} 75 L ${x - 10} 73`} stroke="#9BC4FF" strokeWidth="1" fill="none" />
          {/* hot ascending */}
          <path d={`M ${x + 12} 108 L ${x + 12} 105 M ${x + 12} 105 L ${x + 14} 107 M ${x + 12} 105 L ${x + 10} 107`} stroke="#FFA94D" strokeWidth="1" fill="none" />
        </g>
      ))}
      {/* PUE badge */}
      <text x="120" y="170" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="2">PUE &lt; 1.4 · CONFINADO</text>
    </svg>
  );
}

export function SecurityIllu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Concentric security rings */}
      {[80, 60, 40, 20].map((r, i) => (
        <circle
          key={i}
          cx="120" cy="90"
          r={r}
          fill="none"
          stroke={i === 0 ? "rgba(255,120,0,0.2)" : "rgba(255,255,255,0.08)"}
          strokeWidth="1"
          strokeDasharray={i === 0 ? "0" : "3 4"}
        >
          {i === 0 && (
            <animate attributeName="r" values={`${r};${r + 4};${r}`} dur="3s" repeatCount="indefinite" />
          )}
        </circle>
      ))}
      {/* Center shield */}
      <g transform="translate(106 78)">
        <path d="M 14 0 L 28 6 L 28 16 Q 28 26 14 30 Q 0 26 0 16 L 0 6 Z" fill="rgba(255,120,0,0.15)" stroke="#FF7800" strokeWidth="1.5" />
        <path d="M 7 15 L 12 20 L 21 11" stroke="#FF7800" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Access points on outer ring */}
      {[
        { angle: 0,   label: "BIO" },
        { angle: 90,  label: "CAM" },
        { angle: 180, label: "KEY" },
        { angle: 270, label: "MAN" }
      ].map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const cx = 120 + Math.cos(rad) * 80;
        const cy = 90 + Math.sin(rad) * 80;
        return (
          <g key={i} transform={`translate(${cx - 14} ${cy - 8})`}>
            <rect x="0" y="0" width="28" height="16" rx="3" fill="#090909" stroke="#FF7800" strokeWidth="1" />
            <text x="14" y="11" fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="1">{p.label}</text>
          </g>
        );
      })}
      <text x="120" y="170" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="2">5 CAPAS · ACCESO BIOMÉTRICO</text>
    </svg>
  );
}

export function NetworkIllu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Central AS / router */}
      <g transform="translate(108 78)">
        <rect x="0" y="0" width="24" height="24" rx="4" fill="#FF7800" />
        <text x="12" y="16" fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#090909" textAnchor="middle">AS</text>
      </g>
      {/* Outer carriers */}
      {[
        { x: 30,  y: 30,  label: "TIER 1" },
        { x: 210, y: 30,  label: "PEER" },
        { x: 30,  y: 150, label: "NAP.CL" },
        { x: 210, y: 150, label: "CDN" },
        { x: 120, y: 14,  label: "IXP" },
        { x: 120, y: 156, label: "DC2" }
      ].map((c, i) => (
        <g key={i}>
          <line x1="120" y1="90" x2={c.x} y2={c.y} stroke="rgba(255,120,0,0.25)" strokeWidth="1" strokeDasharray="3 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur={`${1.6 + i * 0.18}s`} repeatCount="indefinite" />
          </line>
          <rect x={c.x - 22} y={c.y - 8} width="44" height="16" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,120,0,0.4)" strokeWidth="1" />
          <text x={c.x} y={c.y + 3} fontSize="8" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="1">{c.label}</text>
        </g>
      ))}
      {/* Travelling packets */}
      <circle cx="120" cy="90" r="2" fill="#FF7800">
        <animateMotion path="M 0 0 L -90 -60" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="90" r="2" fill="#FFA94D">
        <animateMotion path="M 0 0 L 90 60" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text x="120" y="172" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#FFA94D" textAnchor="middle" letterSpacing="2">RED PROPIA · MULTI-CARRIER</text>
    </svg>
  );
}
