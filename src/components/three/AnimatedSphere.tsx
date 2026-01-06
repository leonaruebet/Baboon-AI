"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

/**
 * AnimatedSphere Component
 *
 * Central animated sphere with distortion effect and gradient coloring.
 * Responds to time with morphing animation.
 *
 * @param position - 3D position of the sphere
 * @returns JSX element containing the animated sphere
 */
export function AnimatedSphere({ position }: { position: [number, number, number] }) {
  console.log("[AnimatedSphere] Rendering animated central sphere");

  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;

      // Pulsating scale
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={position}>
      <MeshDistortMaterial
        color="#fb923c"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#ea580c"
        emissiveIntensity={0.15}
      />
    </Sphere>
  );
}

/**
 * GlowingSphere Component
 *
 * Smaller glowing sphere with emissive material.
 */
export function GlowingSphere({
  position,
  color = "#fb923c",
  size = 0.3,
}: {
  position: [number, number, number];
  color?: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = intensity;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}
