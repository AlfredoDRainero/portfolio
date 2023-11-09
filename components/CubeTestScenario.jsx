import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const CubeScene = () => {
  
  return (
    <Canvas
      style={{ background: '#dddddd' }}
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.5} penumbra={1} intensity={1} castShadow />
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default CubeScene;
