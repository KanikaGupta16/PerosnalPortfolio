import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

function CroissantModel() {
  const { scene } = useGLTF('/models/croissant.glb');
  return <primitive object={scene} scale={0.3} />;
}

function StaticObjects() {
  // Define static objects with croissant models
  const objects = [
    { type: 'croissant', model: CroissantModel, position: [4, -2, 0] },
    { type: 'croissant', model: CroissantModel, position: [-3, -1, 0] },
    { type: 'croissant', model: CroissantModel, position: [0, -3, 0] },
  ];

  return (
    <group>
      {objects.map((obj, index) => {
        const ModelComponent = obj.model;
        return (
          <group key={index} position={obj.position}>
            <ModelComponent />
          </group>
        );
      })}
    </group>
  );
}

export default function Hero3DObjects() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }} camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Suspense fallback={null}>
        <StaticObjects />
      </Suspense>
    </Canvas>
  );
} 