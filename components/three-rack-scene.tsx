"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BRAND = "#FF7800";
const BRAND_DIM = "#FFA94D";
const CHASSIS = "#0B1220";
const CHASSIS_2 = "#1E293B";
const RAIL = "#334155";

function RackUnit({ y, blink = false }: { y: number; blink?: boolean }) {
  const led1 = useRef<THREE.Mesh>(null!);
  const led2 = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    if (!blink) return;
    const t = s.clock.elapsedTime + y * 7;
    const a = (Math.sin(t * 1.6) + 1) / 2;
    const b = (Math.sin(t * 2.4 + 1.5) + 1) / 2;
    const m1 = led1.current.material as THREE.MeshStandardMaterial;
    const m2 = led2.current.material as THREE.MeshStandardMaterial;
    m1.emissiveIntensity = 0.6 + a * 1.2;
    m2.emissiveIntensity = 0.4 + b * 1.0;
  });

  return (
    <group position={[0, y, 0]}>
      {/* server chassis */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.14, 0.95]} />
        <meshStandardMaterial color={CHASSIS_2} roughness={0.55} metalness={0.5} />
      </mesh>
      {/* front face accent */}
      <mesh position={[0, 0, 0.475]}>
        <boxGeometry args={[2.4, 0.14, 0.02]} />
        <meshStandardMaterial color={CHASSIS} roughness={0.4} metalness={0.6} />
      </mesh>
      {/* LEDs */}
      <mesh ref={led1} position={[-1.05, 0, 0.49]}>
        <boxGeometry args={[0.06, 0.06, 0.03]} />
        <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={1.0} toneMapped={false} />
      </mesh>
      <mesh ref={led2} position={[-0.93, 0, 0.49]}>
        <boxGeometry args={[0.06, 0.06, 0.03]} />
        <meshStandardMaterial color={BRAND_DIM} emissive={BRAND_DIM} emissiveIntensity={0.8} toneMapped={false} />
      </mesh>
      {/* drive slots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} position={[-0.55 + i * 0.25, 0, 0.49]}>
          <boxGeometry args={[0.18, 0.08, 0.02]} />
          <meshStandardMaterial color={"#475569"} roughness={0.7} />
        </mesh>
      ))}
      {/* handle */}
      <mesh position={[1.08, 0, 0.49]}>
        <boxGeometry args={[0.16, 0.04, 0.04]} />
        <meshStandardMaterial color={"#94A3B8"} metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Rack() {
  const group = useRef<THREE.Group>(null!);
  // gentle auto-rotation
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.18) * 0.45 - 0.35;
    group.current.position.y = Math.sin(t * 0.6) * 0.04;
  });

  const units = useMemo(() => {
    // Distribute server units along Y inside the rack
    const slots: number[] = [];
    for (let i = -1.6; i < 1.6; i += 0.22) slots.push(i);
    return slots;
  }, []);

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* outer rack frame */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[2.7, 3.7, 1.25]} />
        <meshStandardMaterial color={CHASSIS} roughness={0.6} metalness={0.4} />
      </mesh>
      {/* hollow interior */}
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[2.5, 3.55, 1.18]} />
        <meshStandardMaterial color={"#0F172A"} roughness={0.9} />
      </mesh>
      {/* side rails */}
      {[-1.2, 1.2].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.63]}>
          <boxGeometry args={[0.05, 3.55, 0.02]} />
          <meshStandardMaterial color={RAIL} metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
      {/* top panel */}
      <mesh position={[0, 1.86, 0]}>
        <boxGeometry args={[2.72, 0.04, 1.27]} />
        <meshStandardMaterial color={"#0B1220"} metalness={0.5} roughness={0.5} />
      </mesh>
      {/* base panel */}
      <mesh position={[0, -1.86, 0]}>
        <boxGeometry args={[2.72, 0.04, 1.27]} />
        <meshStandardMaterial color={"#0B1220"} metalness={0.5} roughness={0.5} />
      </mesh>
      {/* top brand bar */}
      <mesh position={[0, 1.75, 0.64]}>
        <boxGeometry args={[2.4, 0.18, 0.02]} />
        <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={0.4} toneMapped={false} />
      </mesh>
      {/* server units */}
      {units.map((y, i) => (
        <RackUnit key={i} y={y} blink={i % 2 === 0} />
      ))}
    </group>
  );
}

export default function ThreeRackScene() {
  return (
    <div className="relative h-[460px] lg:h-[560px] w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [3.4, 1.2, 4.6], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 4]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color={BRAND_DIM} />
        <Environment preset="city" />
        <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.25}>
          <Rack />
        </Float>
        <ContactShadows position={[0, -1.95, 0]} opacity={0.45} scale={8} blur={2.6} far={4} />
      </Canvas>
      {/* soft brand glow behind the canvas */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.35), transparent 60%)" }}
      />
    </div>
  );
}
