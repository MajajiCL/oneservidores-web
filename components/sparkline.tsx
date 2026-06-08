"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  fillColor?: string;
  strokeWidth?: number;
  className?: string;
};

/**
 * Animated SVG sparkline — used inside stat cards for live data feel.
 */
export function Sparkline({
  data,
  width = 120,
  height = 36,
  color = "#FF7800",
  fillColor = "rgba(255,120,0,0.12)",
  strokeWidth = 1.6,
  className = ""
}: Props) {
  const { path, area, lastPoint } = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const stepX = width / (data.length - 1);

    const pts = data.map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * (height - 6) - 3;
      return [x, y];
    });

    const path = pts.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
    const area = `${path} L${width},${height} L0,${height} Z`;
    const lastPoint = pts[pts.length - 1];
    return { path, area, lastPoint };
  }, [data, width, height]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <linearGradient id="sparkfill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#sparkfill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
      />
      <circle cx={lastPoint[0]} cy={lastPoint[1]} r="3" fill={color}>
        <animate attributeName="r" values="3;4.5;3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={lastPoint[0]} cy={lastPoint[1]} r="6" fill={color} opacity="0.3">
        <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
