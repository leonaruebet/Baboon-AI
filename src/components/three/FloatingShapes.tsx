"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/**
 * FloatingShapes Component
 *
 * Collection of animated 3D geometric shapes floating around the scene.
 * Includes torus, icosahedron, octahedron, and rounded boxes.
 *
 * @returns JSX element containing floating 3D shapes
 */
export function FloatingShapes() {
  console.log("[FloatingShapes] Rendering floating geometric shapes");

  return (
    <group>
      {/* Torus - Orange primary */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <torusGeometry args={[0.6, 0.25, 16, 32]} />
          <meshStandardMaterial
            color="#fb923c"
            metalness={0.8}
            roughness={0.2}
            emissive="#fb923c"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Icosahedron - Gradient orange */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -1, -3]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <MeshDistortMaterial
            color="#fdba74"
            metalness={0.6}
            roughness={0.3}
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Octahedron - Light orange */}
      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={1}>
        <mesh position={[3, 2.5, -1]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#fed7aa"
            metalness={0.9}
            roughness={0.1}
            emissive="#fb923c"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Rounded Box - Primary */}
      <Float speed={1.2} rotationIntensity={1} floatIntensity={2}>
        <RoundedBox
          position={[-3.5, -2, -1]}
          args={[0.8, 0.8, 0.8]}
          radius={0.1}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#ea580c"
            metalness={0.7}
            roughness={0.2}
          />
        </RoundedBox>
      </Float>

      {/* Small spheres cluster */}
      <SmallSpheresCluster position={[-2, 1, 1]} />
      <SmallSpheresCluster position={[2, -2, 0]} />

      {/* Animated ring */}
      <AnimatedRing position={[0, 3, -2]} />

      {/* Cone */}
      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={1.2}>
        <mesh position={[-1, -2.5, -2]} rotation={[0.5, 0, 0.3]}>
          <coneGeometry args={[0.4, 0.8, 6]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Dodecahedron */}
      <Float speed={1.6} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[1.5, 1.5, -4]}>
          <dodecahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#ffedd5"
            metalness={0.8}
            roughness={0.15}
            emissive="#fb923c"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>
    </group>
  );
}

/**
 * SmallSpheresCluster Component
 *
 * Cluster of small animated spheres.
 */
function SmallSpheresCluster({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  const spheres = [
    { pos: [0, 0, 0], size: 0.15, color: "#fb923c" },
    { pos: [0.3, 0.2, 0.1], size: 0.1, color: "#fdba74" },
    { pos: [-0.2, 0.3, -0.1], size: 0.08, color: "#fed7aa" },
    { pos: [0.1, -0.2, 0.2], size: 0.12, color: "#f97316" },
    { pos: [-0.3, -0.1, 0.15], size: 0.07, color: "#ea580c" },
  ];

  return (
    <group ref={groupRef} position={position}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={sphere.pos as [number, number, number]}>
          <sphereGeometry args={[sphere.size, 16, 16]} />
          <meshStandardMaterial
            color={sphere.color}
            metalness={0.9}
            roughness={0.1}
            emissive={sphere.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * AnimatedRing Component
 *
 * Rotating ring with pulsating effect.
 */
function AnimatedRing({ position }: { position: [number, number, number] }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      ringRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[1, 0.05, 16, 64]} />
      <meshStandardMaterial
        color="#fb923c"
        metalness={1}
        roughness={0}
        emissive="#fb923c"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
