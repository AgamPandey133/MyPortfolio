import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";

const NetworkNode = ({ position, color }) => (
    <mesh position={position}>
        <sphereGeometry args={[0.3, 12, 12]} /> {/* Reduced segments */}
        <meshStandardMaterial color={color} />
    </mesh>
);

const Connection = ({ start, end }) => {
    // ... (logic same)
    return (
        <mesh>
             {/* Simplified */}
        </mesh>
    )
}

const NetworkCluster = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
       <group rotation={[0, Math.PI / 4, 0]}>
            {/* Central Node */}
            <NetworkNode position={[0,0,0]} color="#00C6FF" />
            
            {/* Satellite Nodes */}
            <NetworkNode position={[1.5, 1, 0]} color="#7042f8" />
            <NetworkNode position={[-1.5, -0.5, 0.5]} color="#7042f8" />
            <NetworkNode position={[0.5, -1.5, -0.5]} color="#7042f8" />
       </group>
    </Float>
  );
};

const NetworkCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1]} /* optimization */
      performance={{ min: 0.5 }}
      frameloop='always' 
      gl={{ preserveDrawingBuffer: true, antialias: false }} /* optimization: disable AA */
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      <NetworkCluster />
      <Preload all />
    </Canvas>
  );
};

export default NetworkCanvas;
