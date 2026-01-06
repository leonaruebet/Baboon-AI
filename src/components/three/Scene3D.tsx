"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Float, Environment, Stars } from "@react-three/drei";
import { FloatingShapes } from "./FloatingShapes";
import { AnimatedSphere } from "./AnimatedSphere";
import { ParticleField } from "./ParticleField";

/**
 * Scene3D Component
 *
 * Main 3D canvas wrapper for the About page hero section.
 * Contains floating geometric shapes, animated sphere, and particle effects.
 *
 * @param className - Optional CSS class for styling the canvas container
 * @returns JSX element containing the 3D scene
 */
export function Scene3D({ className = "" }: { className?: string }) {
  console.log("[Scene3D] Rendering 3D scene");

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#fff7ed" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fb923c" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            color="#fdba74"
          />

          {/* Environment for reflections */}
          <Environment preset="sunset" />

          {/* Stars background */}
          <Stars
            radius={50}
            depth={50}
            count={1000}
            factor={4}
            saturation={0.5}
            fade
            speed={1}
          />

          {/* Main animated sphere */}
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
          >
            <AnimatedSphere position={[0, 0, 0]} />
          </Float>

          {/* Floating geometric shapes */}
          <FloatingShapes />

          {/* Particle field */}
          <ParticleField count={200} />

          {/* Subtle orbit controls for interactivity */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
