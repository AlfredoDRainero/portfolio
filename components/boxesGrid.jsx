import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, N8AO, SMAA, DepthOfField } from '@react-three/postprocessing';

const Cubes = ({ numCubes }) => {
  const cubes = [];

  for (let i = 0; i < numCubes; i++) {
    for (let j = 0; j < numCubes; j++) {
      cubes.push(
        <Box
          key={`${i}-${j}`}
          args={[1, 1, 1]}
          position={[
            (i - numCubes / 2) * 1.2,
            (j - numCubes / 2) * 1.2,
            Math.random() * 0.8 - 0
          ]}
        >
          <meshPhongMaterial attach="material" color={0xffffff} />
        </Box>
      );
    }
  }

  return <>{cubes}</>;
};

const ThreeGrid = () => {
  const [numCubes, setNumCubes] = useState(10); // Valor predeterminado

  useEffect(() => {
    const handleResize = () => {
      setNumCubes(Math.floor(window.innerWidth / 30));
    };

    if (typeof window !== 'undefined') {
      setNumCubes(Math.floor(window.innerWidth / 30));
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {typeof window !== 'undefined' && (
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 80], fov: 35, near: 1, far: 80 }}
      >
        <OrbitControls />
        <EffectComposer>
          <N8AO />
          <SMAA />
          <DepthOfField target={[0, 0, -6]} focusRange={0.1} bokehScale={10} />
        </EffectComposer>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 1]} intensity={1} />
        <directionalLight position={[1, 0, 1]} intensity={0.5} />
        <directionalLight position={[-1, 0, 1]} intensity={0.5} />
        <Cubes numCubes={numCubes} />
      </Canvas>)}
    </div>
  );
};



export default ThreeGrid;
