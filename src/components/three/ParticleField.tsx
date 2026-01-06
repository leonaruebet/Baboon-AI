"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

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

  // Generate particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const color = new THREE.Color();
    const orangeColors = ["#fb923c", "#fdba74", "#fed7aa", "#f97316", "#ea580c"];

    for (let i = 0; i < count; i++) {
      // Random position in a sphere
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random orange color
      color.set(orangeColors[Math.floor(Math.random() * orangeColors.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Random size
      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, colors, sizes };
  }, [count]);

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

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.3,
      yOffset: (Math.random() - 0.5) * 2,
      size: 0.02 + Math.random() * 0.04,
    }));
  }, [count]);

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
