"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, RoundedBox, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BRAND = "#FF7800";
const BRAND_DIM = "#FFA94D";
const CHASSIS = "#101725";
const CHASSIS_2 = "#1B2333";
const RAIL = "#2A3A52";
const STEEL = "#94A3B8";

function ServerUnit({ y, variant = 0 }: { y: number; variant?: number }) {
  const led1 = useRef<THREE.Mesh>(null!);
  const led2 = useRef<THREE.Mesh>(null!);
  const led3 = useRef<THREE.Mesh>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime + y * 11;
    const a = (Math.sin(t * 1.8) + 1) / 2;
    const b = (Math.sin(t * 2.7 + 1.7) + 1) / 2;
    const c = (Math.sin(t * 3.4 + 0.4) + 1) / 2;
    (led1.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.0 + a * 1.6;
    (led2.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6 + b * 1.4;
    (led3.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.4 + c * 1.0;
  });

  // 3 variant designs: storage unit, network switch, blade
  return (
    <group position={[0, y, 0]}>
      {/* main chassis */}
      <RoundedBox args={[2.2, 0.18, 0.95]} radius={0.015} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color={CHASSIS_2} roughness={0.45} metalness={0.6} />
      </RoundedBox>

      {/* front face inset (darker) */}
      <mesh position={[0, 0, 0.476]}>
        <boxGeometry args={[2.18, 0.16, 0.012]} />
        <meshStandardMaterial color={CHASSIS} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* brand bar on left */}
      <mesh position={[-1.04, 0, 0.485]}>
        <boxGeometry args={[0.03, 0.13, 0.012]} />
        <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={1.2} toneMapped={false} />
      </mesh>

      {/* LEDs cluster */}
      <mesh ref={led1} position={[-0.95, 0.04, 0.49]}>
        <boxGeometry args={[0.045, 0.045, 0.015]} />
        <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
      <mesh ref={led2} position={[-0.95, -0.04, 0.49]}>
        <boxGeometry args={[0.045, 0.045, 0.015]} />
        <meshStandardMaterial color={BRAND_DIM} emissive={BRAND_DIM} emissiveIntensity={1.0} toneMapped={false} />
      </mesh>
      <mesh ref={led3} position={[-0.88, 0, 0.49]}>
        <boxGeometry args={[0.025, 0.025, 0.012]} />
        <meshStandardMaterial color={"#FFC785"} emissive={"#FFC785"} emissiveIntensity={0.8} toneMapped={false} />
      </mesh>

      {/* drive bays / ports — varies by unit */}
      {variant === 0 && (
        // Storage bays
        Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[-0.7 + i * 0.18, 0, 0.49]}>
            <boxGeometry args={[0.15, 0.11, 0.012]} />
            <meshStandardMaterial color={"#3B475E"} roughness={0.5} metalness={0.55} />
          </mesh>
        ))
      )}
      {variant === 1 && (
        // Network ports
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <mesh key={i} position={[-0.55 + (i % 6) * 0.16 + (i >= 6 ? 0.55 : 0), 0.025 + (i % 2 === 0 ? 0 : -0.05), 0.49]}>
              <boxGeometry args={[0.09, 0.04, 0.012]} />
              <meshStandardMaterial color={"#0A1019"} roughness={0.4} metalness={0.5} />
            </mesh>
          ))}
          {/* small LEDs per port */}
          {Array.from({ length: 4 }).map((_, i) => (
            <mesh key={`pl${i}`} position={[-0.45 + i * 0.6, 0.04, 0.49]}>
              <boxGeometry args={[0.012, 0.012, 0.008]} />
              <meshStandardMaterial color={"#FFA94D"} emissive={"#FFA94D"} emissiveIntensity={0.8} toneMapped={false} />
            </mesh>
          ))}
        </>
      )}
      {variant === 2 && (
        // Blades — vertical slits
        Array.from({ length: 6 }).map((_, i) => (
          <mesh key={i} position={[-0.55 + i * 0.22, 0, 0.49]}>
            <boxGeometry args={[0.16, 0.14, 0.012]} />
            <meshStandardMaterial color={"#1F2A3F"} roughness={0.5} metalness={0.55} />
          </mesh>
        ))
      )}

      {/* handle right */}
      <mesh position={[1.0, 0, 0.49]}>
        <boxGeometry args={[0.07, 0.05, 0.025]} />
        <meshStandardMaterial color={STEEL} metalness={0.85} roughness={0.25} />
      </mesh>
    </group>
  );
}

function Rack() {
  const group = useRef<THREE.Group>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    // gentle rotation showing front + right side
    group.current.rotation.y = -0.55 + Math.sin(t * 0.22) * 0.35;
    group.current.position.y = Math.sin(t * 0.6) * 0.04;
  });

  // 14 server units stacked
  const slotsY = useMemo(() => {
    const ys: number[] = [];
    const step = 0.25;
    const count = 13;
    const totalHeight = (count - 1) * step;
    for (let i = 0; i < count; i++) ys.push(-totalHeight / 2 + i * step);
    return ys;
  }, []);

  const RAIL_H = 4.0;
  const HALF_W = 1.18;
  const HALF_D = 0.55;

  return (
    <group ref={group}>
      {/* 4 corner vertical rails */}
      {[
        [-HALF_W, HALF_D],
        [HALF_W,  HALF_D],
        [-HALF_W, -HALF_D],
        [HALF_W,  -HALF_D]
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0, z]} castShadow>
          <boxGeometry args={[0.09, RAIL_H, 0.09]} />
          <meshStandardMaterial color={RAIL} metalness={0.65} roughness={0.35} />
        </mesh>
      ))}

      {/* top plate */}
      <RoundedBox args={[2.55, 0.12, 1.25]} radius={0.02} smoothness={3} position={[0, RAIL_H / 2 + 0.06, 0]} castShadow>
        <meshStandardMaterial color={CHASSIS} metalness={0.55} roughness={0.45} />
      </RoundedBox>

      {/* cooling fans on top */}
      {[-0.7, 0, 0.7].map((x, i) => (
        <group key={i} position={[x, RAIL_H / 2 + 0.13, 0]}>
          <mesh>
            <cylinderGeometry args={[0.18, 0.18, 0.02, 24]} />
            <meshStandardMaterial color={"#0A1019"} metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.012, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 0.006, 24]} />
            <meshStandardMaterial color={"#1B2333"} metalness={0.4} roughness={0.6} />
          </mesh>
          {/* Spinning blades */}
          <FanBlades />
        </group>
      ))}

      {/* bottom plate */}
      <RoundedBox args={[2.55, 0.12, 1.25]} radius={0.02} smoothness={3} position={[0, -RAIL_H / 2 - 0.06, 0]} castShadow>
        <meshStandardMaterial color={CHASSIS} metalness={0.55} roughness={0.45} />
      </RoundedBox>

      {/* Top brand bar with OneServidores text */}
      <group position={[0, RAIL_H / 2 - 0.12, HALF_D + 0.001]}>
        <mesh>
          <boxGeometry args={[2.0, 0.22, 0.02]} />
          <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={0.6} toneMapped={false} />
        </mesh>
        <Text
          position={[0, 0, 0.015]}
          fontSize={0.14}
          color="white"
          anchorX="center"
          anchorY="middle"
          fontWeight={900}
          letterSpacing={0.05}
        >
          ONE SERVIDORES
        </Text>
      </group>

      {/* Server units */}
      {slotsY.map((y, i) => (
        <ServerUnit key={i} y={y} variant={i % 3} />
      ))}

      {/* Subtle back panel (dark, behind units) */}
      <mesh position={[0, 0, -HALF_D + 0.005]}>
        <boxGeometry args={[2.3, RAIL_H - 0.4, 0.02]} />
        <meshStandardMaterial color={"#070C16"} roughness={0.9} />
      </mesh>
    </group>
  );
}

function FanBlades() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 6;
  });
  return (
    <mesh ref={ref} position={[0, 0.02, 0]}>
      <torusGeometry args={[0.09, 0.012, 6, 16]} />
      <meshStandardMaterial color={STEEL} metalness={0.6} roughness={0.4} />
    </mesh>
  );
}

export default function ThreeRackScene() {
  return (
    <div className="relative h-[460px] lg:h-[580px] w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [4.2, 1.0, 5.0], fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 6, 4]} intensity={1.25} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-4, 3, -2]} intensity={0.45} color={BRAND_DIM} />
        <pointLight position={[2, 0, 3]} intensity={0.7} color={BRAND} distance={6} decay={2} />
        <Environment preset="city" />
        <Float speed={0.7} rotationIntensity={0.05} floatIntensity={0.18}>
          <Rack />
        </Float>
        <ContactShadows position={[0, -2.15, 0]} opacity={0.5} scale={9} blur={2.8} far={5} />
      </Canvas>
      {/* soft brand glow behind */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(255,120,0,0.30), transparent 60%)" }}
      />
    </div>
  );
}
