import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
  const ref = useRef();
  
  // Create random points in a sphere (Reduced count for performance)
  const [sphere] = useState(() => {
     const positions = new Float32Array(700 * 3); // Reduced from 3000 to 700
     for (let i = 0; i < 700; i++) {
       const r = 1.2; 
       const theta = 2 * Math.PI * Math.random();
       const phi = Math.acos(2 * Math.random() - 1);
       const x = r * Math.sin(phi) * Math.cos(theta);
       const y = r * Math.sin(phi) * Math.sin(theta);
       const z = r * Math.cos(phi);
       positions[i*3] = x;
       positions[i*3+1] = y;
       positions[i*3+2] = z;
     }
     return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20; // Slower rotation
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.003} // Slightly larger since there are fewer
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1]} performance={{ min: 0.5 }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
