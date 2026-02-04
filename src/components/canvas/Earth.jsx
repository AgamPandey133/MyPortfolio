import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  // Since we don't have an external GLTF, we'll create a stylized tech earth
  return (
    <group>
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial color="#00C6FF" wireframe />
        </mesh>
        <mesh>
             <sphereGeometry args={[2.4, 32, 32]} />
             <meshStandardMaterial color="#030014" />
        </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <ambientLight intensity={0.5} />

        {/* Added point light for visibility */}
        <pointLight position={[10, 10, 10]} intensity={2} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
