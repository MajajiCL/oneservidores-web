"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

/**
 * Interactive 3D globe (cobe) with OneServidores brand colors,
 * pinned to datacenter cities and connected with arcs.
 */
export default function CobeGlobeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(2.6); // Start rotated towards South America
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const options = {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: 0,
      theta: -0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 5.4,
      baseColor: [1, 1, 1] as [number, number, number],
      markerColor: [1, 0.47, 0] as [number, number, number],
      glowColor: [1, 0.69, 0.31] as [number, number, number],
      markers: [
        { location: [-33.45, -70.66] as [number, number], size: 0.10 },
        { location: [-34.61, -58.38] as [number, number], size: 0.08 },
        { location: [-12.04, -77.04] as [number, number], size: 0.06 },
        { location: [4.71,  -74.07] as [number, number], size: 0.06 },
        { location: [-15.78, -47.93] as [number, number], size: 0.06 },
        { location: [19.43, -99.13] as [number, number], size: 0.05 },
        { location: [25.76, -80.19] as [number, number], size: 0.05 },
        { location: [40.41,  -3.70] as [number, number], size: 0.04 }
      ],
      onRender: (state: Record<string, unknown>) => {
        if (pointerInteracting.current === null) phiRef.current += 0.0025;
        state.phi = phiRef.current + pointerInteractionMovement.current / 200;
        state.width = width * dpr;
        state.height = width * dpr;
      }
    };
    // cobe types miss `onRender`; cast to bypass at call site
    const globe = createGlobe(canvas, options as Parameters<typeof createGlobe>[1]);

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "1";
    }, 0);

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          (e.currentTarget as HTMLCanvasElement).style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 0.6s ease"
        }}
      />
      {/* subtle backdrop glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl opacity-70 pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.25), transparent 60%)" }}
      />
    </div>
  );
}
