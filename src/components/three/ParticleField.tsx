"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Generates seeded random particle data outside of render cycle
 * Uses deterministic seed-based generation for stable results
 */
function generateParticleData(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const color = new THREE.Color();
  const orangeColors = ["#fb923c", "#fdba74", "#fed7aa", "#f97316", "#ea580c"];

  // Use deterministic seeded values based on index
  for (let i = 0; i < count; i++) {
    // Deterministic pseudo-random using golden ratio
    const phi1 = (i * 0.618033988749895) % 1;
    const phi2 = ((i * 2) * 0.618033988749895) % 1;
    const phi3 = ((i * 3) * 0.618033988749895) % 1;

    const radius = 15 + phi1 * 10;
    const theta = phi2 * Math.PI * 2;
    const phi = Math.acos(2 * phi3 - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    // Deterministic color selection
    color.set(orangeColors[i % orangeColors.length]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    // Deterministic size
    sizes[i] = phi1 * 0.5 + 0.1;
  }

  return { positions, colors, sizes };
}

/**
 * ParticleField Component
 *
 * Animated particle system creating a field of floating points.
 * Particles move and pulse with time-based animations.
 *
 * @param count - Number of particles to render
 * @returns JSX element containing the particle field
 */
export function ParticleField({ count = 200 }: { count?: number }) {
  console.log("[ParticleField] Rendering particle field with", count, "particles");

  const pointsRef = useRef<THREE.Points>(null);

  // Use useState with lazy initializer for stable particle data
  const [particles] = useState(() => generateParticleData(count));

  useFrame((state) => {
    if (pointsRef.current) {
      // Rotate the entire particle field
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;

      // Animate individual particles
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Generates deterministic orbital particle data
 */
function generateOrbitalParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    // Deterministic pseudo-random using golden ratio
    const phi1 = (i * 0.618033988749895) % 1;
    const phi2 = ((i * 2) * 0.618033988749895) % 1;
    const phi3 = ((i * 3) * 0.618033988749895) % 1;

    return {
      angle: (i / count) * Math.PI * 2,
      speed: 0.2 + phi1 * 0.3,
      yOffset: (phi2 - 0.5) * 2,
      size: 0.02 + phi3 * 0.04,
    };
  });
}

/**
 * OrbitalParticles Component
 *
 * Particles that orbit around a central point.
 */
export function OrbitalParticles({
  radius = 3,
  count = 50,
  color = "#fb923c",
}: {
  radius?: number;
  count?: number;
  color?: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Use useState with lazy initializer for stable particle data
  const [particles] = useState(() => generateOrbitalParticles(count));

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => {
        const x = Math.cos(particle.angle) * radius;
        const z = Math.sin(particle.angle) * radius;
        return (
          <mesh key={i} position={[x, particle.yOffset, z]}>
            <sphereGeometry args={[particle.size, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
        );
      })}
    </group>
  );
}
