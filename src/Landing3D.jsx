import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, useGLTF, Text, Html } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/models/cs.glb');
  return <primitive object={scene} scale={0.5} />; // Scale down if needed
}

function FloatingSign({ onEnter }) {
  return (
    <group position={[-0.2, 2.7, 0.3]}>
      {/* 3D Sign Background */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.7, 0.9, 0.01]} />
        <meshStandardMaterial color="#B8D4E3" opacity={0.9} transparent />
      </mesh>
      
      {/* Sign Border */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[2.5, 0.7, 0.02]} />
        <meshStandardMaterial color="#8FB3C9" />
      </mesh>
      
      {/* Floating Animation */}
      <group position={[0, Math.sin(Date.now() * 0.002) * 0, 0]}>
        {/* Text on the sign */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          VISIT PORTFOLIO
        </Text>
        
        {/* Clickable HTML overlay */}
        <Html
          position={[0, 0, 0.1]}
          center
          distanceFactor={10}
          zIndexRange={[100, 0]}
        >
          <button
            onClick={onEnter}
            style={{
              background: 'transparent',
              border: 'none',
              width: '250px',
              height: '80px',
              cursor: 'pointer',
              position: 'absolute',
              top: '-40px',
              left: '-125px',
              zIndex: 1000,
            }}
            aria-label="Visit portfolio"
          />
        </Html>
      </group>
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Landing3D({ onEnter }) {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 50%, #666666 75%, #999999 100%)',
      position: 'relative' 
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ 
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 50%, #666666 75%, #999999 100%)'
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={<LoadingFallback />}>
          <Center>
            <Model />
            <FloatingSign onEnter={onEnter} />
          </Center>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      

    </div>
  );
} 