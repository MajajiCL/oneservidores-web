"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const BRAND = "#FF7800";
const BRAND_SOFT = "#FFB070";
const BRAND_PASTEL = "#FFE4C2";
const WHITE = "#FFFFFF";
const FACE = "#F1F5F9";
const FACE_2 = "#E2E8F0";
const EDGE = "#CBD5E1";

/* --- Clean isometric server tower (illustrative, light) --- */
function ServerTower({ position = [0, 0, 0] as [number, number, number] }) {
  const blink = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const m = blink.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = 1.0 + (Math.sin(t * 1.8) + 1) * 0.7;
  });

  return (
    <group position={position}>
      {/* Main body */}
      <RoundedBox args={[1.4, 2.6, 1.0]} radius={0.08} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color={WHITE} roughness={0.45} metalness={0.05} />
      </RoundedBox>

      {/* Top cap (slight darker) */}
      <RoundedBox args={[1.42, 0.05, 1.02]} radius={0.04} smoothness={3} position={[0, 1.33, 0]} castShadow>
        <meshStandardMaterial color={FACE_2} roughness={0.5} />
      </RoundedBox>

      {/* Front face panels — 3 horizontal sections */}
      {[0.8, 0.0, -0.8].map((y, i) => (
        <group key={i} position={[0, y, 0.501]}>
          {/* recessed face */}
          <mesh>
            <boxGeometry args={[1.18, 0.55, 0.01]} />
            <meshStandardMaterial color={FACE} roughness={0.6} />
          </mesh>
          {/* small slits */}
          {Array.from({ length: 5 }).map((_, j) => (
            <mesh key={j} position={[-0.4 + j * 0.2, 0.06, 0.008]}>
              <boxGeometry args={[0.14, 0.025, 0.005]} />
              <meshStandardMaterial color={EDGE} roughness={0.7} />
            </mesh>
          ))}
          {/* status LED */}
          <mesh
            ref={i === 0 ? blink : undefined}
            position={[0.46, -0.16, 0.012]}
          >
            <boxGeometry args={[0.06, 0.06, 0.008]} />
            <meshStandardMaterial
              color={BRAND}
              emissive={BRAND}
              emissiveIntensity={i === 0 ? 1.4 : 0.6}
              toneMapped={false}
            />
          </mesh>
          {/* badge */}
          <mesh position={[-0.45, -0.16, 0.008]}>
            <boxGeometry args={[0.1, 0.07, 0.005]} />
            <meshStandardMaterial color={BRAND_PASTEL} roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Side accent bar (right edge of front face) */}
      <mesh position={[0.7, 0, 0.503]}>
        <boxGeometry args={[0.04, 2.4, 0.005]} />
        <meshStandardMaterial color={EDGE} roughness={0.4} />
      </mesh>

      {/* Bottom base */}
      <mesh position={[0, -1.31, 0]} castShadow>
        <boxGeometry args={[1.5, 0.06, 1.1]} />
        <meshStandardMaterial color={FACE_2} roughness={0.5} />
      </mesh>
    </group>
  );
}

/* --- Cylindrical storage stack (drum / database look) --- */
function StorageDrum({ position = [0, 0, 0] as [number, number, number] }) {
  const accent = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const m = accent.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = 0.4 + (Math.sin(t * 1.2 + 0.6) + 1) * 0.5;
  });

  // 4 stacked disks
  const discY = [-0.9, -0.3, 0.3, 0.9];
  return (
    <group position={position}>
      {discY.map((y, i) => (
        <group key={i} position={[0, y, 0]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.78, 0.78, 0.42, 48]} />
            <meshStandardMaterial color={WHITE} roughness={0.45} metalness={0.06} />
          </mesh>
          {/* top rim (darker) */}
          <mesh position={[0, 0.21, 0]}>
            <cylinderGeometry args={[0.785, 0.785, 0.02, 48]} />
            <meshStandardMaterial color={FACE_2} roughness={0.5} />
          </mesh>
          {/* dot grid pattern around the side */}
          {Array.from({ length: 14 }).map((_, j) => {
            const a = (j / 14) * Math.PI * 1.4 - Math.PI * 0.7;
            return (
              <mesh
                key={j}
                position={[Math.cos(a) * 0.79, 0, Math.sin(a) * 0.79]}
                rotation={[0, -a + Math.PI / 2, 0]}
              >
                <boxGeometry args={[0.04, 0.04, 0.01]} />
                <meshStandardMaterial color={i === 0 ? BRAND : EDGE} roughness={0.6} />
              </mesh>
            );
          })}
          {/* brand stripe on one of the disks */}
          {i === 1 && (
            <mesh ref={accent} position={[0, 0, 0.785]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.22, 0.05, 0.005]} />
              <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={1.0} toneMapped={false} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

/* --- Floating icon badge (like a card with an icon) --- */
function IconBadge({
  position,
  color = BRAND_PASTEL,
  iconColor = BRAND,
  delay = 0
}: {
  position: [number, number, number];
  color?: string;
  iconColor?: string;
  delay?: number;
}) {
  const group = useRef<THREE.Group>(null!);
  useFrame((s) => {
    const t = s.clock.elapsedTime + delay;
    group.current.position.y = position[1] + Math.sin(t * 1.1) * 0.08;
    group.current.rotation.z = Math.sin(t * 0.7) * 0.05;
  });

  return (
    <group ref={group} position={position}>
      {/* card background */}
      <RoundedBox args={[0.7, 0.7, 0.08]} radius={0.08} smoothness={4} castShadow>
        <meshStandardMaterial color={WHITE} roughness={0.4} />
      </RoundedBox>
      {/* pastel chip */}
      <RoundedBox args={[0.42, 0.42, 0.02]} radius={0.06} smoothness={3} position={[0, 0, 0.05]}>
        <meshStandardMaterial color={color} roughness={0.5} />
      </RoundedBox>
      {/* icon (abstract glyph) */}
      <mesh position={[0, 0.04, 0.07]}>
        <boxGeometry args={[0.18, 0.04, 0.012]} />
        <meshStandardMaterial color={iconColor} />
      </mesh>
      <mesh position={[0, -0.04, 0.07]}>
        <boxGeometry args={[0.18, 0.04, 0.012]} />
        <meshStandardMaterial color={iconColor} />
      </mesh>
      <mesh position={[-0.07, 0.04, 0.075]}>
        <boxGeometry args={[0.025, 0.025, 0.012]} />
        <meshStandardMaterial color={WHITE} />
      </mesh>
      <mesh position={[-0.07, -0.04, 0.075]}>
        <boxGeometry args={[0.025, 0.025, 0.012]} />
        <meshStandardMaterial color={WHITE} />
      </mesh>
    </group>
  );
}

function Scene() {
  const root = useRef<THREE.Group>(null!);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    root.current.rotation.y = Math.sin(t * 0.18) * 0.18;
  });

  return (
    <group ref={root}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.25}>
        <group position={[-1.05, 0, 0]}>
          <ServerTower />
        </group>
      </Float>

      <Float speed={1.4} rotationIntensity={0.06} floatIntensity={0.3}>
        <group position={[1.05, -0.05, 0.25]}>
          <StorageDrum />
        </group>
      </Float>

      {/* Floating icon badges around the scene */}
      <Float speed={1.6} rotationIntensity={0.1} floatIntensity={0.3}>
        <IconBadge position={[-2.0, 1.7, 0.4]} color={BRAND_PASTEL} iconColor={BRAND} delay={0} />
      </Float>
      <Float speed={1.3} rotationIntensity={0.1} floatIntensity={0.3}>
        <IconBadge position={[2.4, 1.3, 0.3]} color="#EEF4FF" iconColor="#6B7DFA" delay={0.8} />
      </Float>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <IconBadge position={[-2.4, -0.4, -0.2]} color="#FFE4C2" iconColor={BRAND_SOFT} delay={1.4} />
      </Float>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <IconBadge position={[2.6, -0.6, -0.1]} color="#F1F5F9" iconColor="#475569" delay={2.0} />
      </Float>
    </group>
  );
}

export default function ThreeRackScene() {
  return (
    <div className="relative h-[460px] lg:h-[560px] w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [3.6, 2.4, 5.0], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight
          position={[6, 7, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-4, 3, -2]} intensity={0.4} color={BRAND_SOFT} />
        <hemisphereLight args={[WHITE, BRAND_PASTEL, 0.45]} />
        <Environment preset="apartment" />
        <Scene />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.4}
          scale={10}
          blur={3.0}
          far={4}
          color={"#FF7800"}
        />
      </Canvas>
      {/* soft brand wash behind */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-80"
        style={{
          background:
            "radial-gradient(closest-side at 60% 50%, rgba(255,120,0,0.18), transparent 60%)"
        }}
      />
    </div>
  );
}
