"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FacetedForm() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.15) * 0.15;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.3;
      inner.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#C9A15A" wireframe transparent opacity={3.55} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#3E6259" wireframe transparent opacity={10.25} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <FacetedForm />
    </Canvas>
  );
}
