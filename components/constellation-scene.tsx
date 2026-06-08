"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";
import { KernelSize, ToneMappingMode } from "postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BRAND = "#FF7800";
const BRAND_DIM = "#FFA94D";
const ACCENT = "#FFC785";

/* Generate node positions on a wobbly sphere with structured pockets */
function useNodes() {
  return useMemo(() => {
    const nodes: { p: THREE.Vector3; hub: boolean; phase: number; r: number }[] = [];
    const N = 28;

    // Outer ring of nodes
    for (let i = 0; i < 18; i++) {
      const t = (i / 18) * Math.PI * 2;
      const wobble = 0.2 * Math.sin(i * 1.7);
      const r = 2.6 + wobble;
      const y = Math.cos(i * 0.9) * 1.1;
      nodes.push({
        p: new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r * 0.8),
        hub: i % 6 === 0,
        phase: i * 0.4,
        r: i % 6 === 0 ? 0.16 : 0.08
      });
    }
    // Inner sphere
    for (let i = 0; i < 10; i++) {
      const t = (i / 10) * Math.PI * 2 + 0.5;
      const r = 1.3;
      const y = Math.sin(i * 1.3) * 0.7;
      nodes.push({
        p: new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r),
        hub: i === 0,
        phase: i * 0.7 + 3,
        r: i === 0 ? 0.2 : 0.07
      });
    }
    return nodes.slice(0, N);
  }, []);
}

/* Build line connections between nearest nodes */
function useLineGeometry(nodes: ReturnType<typeof useNodes>) {
  return useMemo(() => {
    const positions: number[] = [];
    const MAX_DIST = 2.4;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].p.distanceTo(nodes[j].p);
        if (d < MAX_DIST) {
          positions.push(nodes[i].p.x, nodes[i].p.y, nodes[i].p.z);
          positions.push(nodes[j].p.x, nodes[j].p.y, nodes[j].p.z);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, [nodes]);
}

function Node({ p, hub, phase, r }: { p: THREE.Vector3; hub: boolean; phase: number; r: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.elapsedTime + phase;
    const intensity = hub ? 4 + Math.sin(t * 1.4) * 1.2 : 2 + Math.sin(t * 2.1) * 0.8;
    const m = ref.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = intensity;
  });

  return (
    <mesh ref={ref} position={p}>
      <sphereGeometry args={[r, 24, 24]} />
      <meshStandardMaterial
        color={hub ? BRAND : BRAND_DIM}
        emissive={hub ? BRAND : BRAND_DIM}
        emissiveIntensity={2.4}
        toneMapped={false}
      />
    </mesh>
  );
}

function DustParticles() {
  const ref = useRef<THREE.Points>(null!);
  const geom = useMemo(() => {
    const positions = new Float32Array(220 * 3);
    for (let i = 0; i < 220; i++) {
      const r = 3.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.6;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((s) => {
    ref.current.rotation.y = s.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        color={ACCENT}
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

function MouseParallaxRig() {
  const { camera, pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    target.current.x += (pointer.x * 0.5 - target.current.x) * 0.04;
    target.current.y += (pointer.y * 0.3 - target.current.y) * 0.04;
    camera.position.x = target.current.x;
    camera.position.y = 0.6 + target.current.y;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Constellation() {
  const nodes = useNodes();
  const lineGeom = useLineGeometry(nodes);
  const group = useRef<THREE.Group>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.18) * 0.06;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial
          color={BRAND}
          transparent
          opacity={0.28}
          toneMapped={false}
        />
      </lineSegments>
      {nodes.map((n, i) => (
        <Node key={i} {...n} />
      ))}
    </group>
  );
}

export default function ConstellationScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.6, 6.5], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMappingExposure: 1.0
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <Constellation />
        <DustParticles />
        <MouseParallaxRig />
        <EffectComposer multisampling={0}>
          <Bloom
            mipmapBlur
            intensity={1.4}
            luminanceThreshold={0.4}
            luminanceSmoothing={0.85}
            kernelSize={KernelSize.LARGE}
          />
          <ToneMapping mode={ToneMappingMode.AGX} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
