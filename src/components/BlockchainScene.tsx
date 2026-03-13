'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ACCENT_PINK = '#FF4DA6';
const ACCENT_MINT = '#5CE6A0';

function Tetrahedron({ onClick }: { onClick?: () => void }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const pulseRef = useRef(0);

  const vertices = useMemo(() => {
    const v = [
      new THREE.Vector3(0, 1.5, 0),
      new THREE.Vector3(-1.2, -0.8, 1),
      new THREE.Vector3(1.2, -0.8, 1),
      new THREE.Vector3(0, -0.8, -1.4),
    ];
    return v;
  }, []);

  const edges = useMemo(() => {
    return [
      [vertices[0], vertices[1]],
      [vertices[0], vertices[2]],
      [vertices[0], vertices[3]],
      [vertices[1], vertices[2]],
      [vertices[2], vertices[3]],
      [vertices[3], vertices[1]],
    ];
  }, [vertices]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
    pulseRef.current += delta;
  });

  const handleClick = () => {
    setClicked(true);
    onClick?.();
    setTimeout(() => setClicked(false), 500);
  };

  const glowIntensity = hovered ? 1.5 : 1;
  const scale = clicked ? 1.1 : hovered ? 1.05 : 1;

  return (
    <group
      ref={meshRef}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {edges.map((edge, i) => (
        <Line
          key={i}
          points={edge}
          color={i % 2 === 0 ? ACCENT_PINK : ACCENT_MINT}
          lineWidth={3 * glowIntensity}
          transparent
          opacity={0.9}
        />
      ))}

      {vertices.map((v, i) => (
        <mesh key={i} position={v}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? ACCENT_PINK : ACCENT_MINT}
            transparent
            opacity={0.9 + Math.sin(pulseRef.current * 2 + i) * 0.1}
          />
          <pointLight
            color={i % 2 === 0 ? ACCENT_PINK : ACCENT_MINT}
            intensity={glowIntensity * 0.5}
            distance={3}
          />
        </mesh>
      ))}

      {clicked && (
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial
            color={ACCENT_MINT}
            transparent
            opacity={0.2}
            wireframe
          />
        </mesh>
      )}
    </group>
  );
}

function FloatingNodes({ count = 50 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const pink = new THREE.Color(ACCENT_PINK);
    const mint = new THREE.Color(ACCENT_MINT);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      const color = Math.random() > 0.5 ? pink : mint;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        vertexColors
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </Points>
  );
}

function SmallTetrahedrons({ count = 8 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const tetrahedrons = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
      scale: 0.2 + Math.random() * 0.3,
      rotationSpeed: 0.005 + Math.random() * 0.01,
      color: i % 2 === 0 ? ACCENT_PINK : ACCENT_MINT,
    }));
  }, [count]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {tetrahedrons.map((t, i) => (
        <MiniTetrahedron key={i} {...t} />
      ))}
    </group>
  );
}

function MiniTetrahedron({
  position,
  scale,
  rotationSpeed,
  color
}: {
  position: [number, number, number];
  scale: number;
  rotationSpeed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
      ref.current.rotation.x += rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 8; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      const end = new THREE.Vector3(
        start.x + (Math.random() - 0.5) * 5,
        start.y + (Math.random() - 0.5) * 5,
        start.z + (Math.random() - 0.5) * 5
      );
      lines.push({ start, end, color: i % 2 === 0 ? ACCENT_PINK : ACCENT_MINT });
    }
    return lines;
  }, []);

  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={linesRef}>
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[conn.start, conn.end]}
          color={conn.color}
          lineWidth={1}
          transparent
          opacity={0.3}
          dashed
          dashSize={0.3}
          dashOffset={0}
          gapSize={0.2}
        />
      ))}
    </group>
  );
}

function Scene({ onBlockConfirm }: { onBlockConfirm?: () => void }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color={ACCENT_PINK} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={ACCENT_MINT} />

      <Tetrahedron onClick={onBlockConfirm} />
      <FloatingNodes count={40} />
      <SmallTetrahedrons count={6} />
      <ConnectionLines />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />
    </>
  );
}

interface BlockchainSceneProps {
  className?: string;
  onBlockConfirm?: () => void;
}

export default function BlockchainScene({ className = '', onBlockConfirm }: BlockchainSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene onBlockConfirm={onBlockConfirm} />
      </Canvas>
    </div>
  );
}
