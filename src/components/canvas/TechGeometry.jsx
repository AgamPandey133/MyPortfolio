import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";

const TechCore = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
            <icosahedronGeometry args={[2.5, 0]} />
            <meshStandardMaterial color="#00C6FF" wireframe />
        </mesh>
        <mesh>
            <octahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#7042f8" wireframe />
        </mesh>
    </Float>
  );
};

const TechGeometryCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1]} /* optimization: force 1x resolution */
      shadows={false} /* optimization: disable shadows */
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: false }} /* optimization: disable AA */
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <TechCore />
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00C6FF" />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TechGeometryCanvas;
