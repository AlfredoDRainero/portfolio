import { useState, useEffect } from "react";
import { Box } from "@react-three/drei";
import { useLayoutEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  N8AO,
  SMAA,
  DepthOfField,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  CameraControls,
  Environment,
  PivotControls,
} from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
//<PivotControls anchor={[-1.1, -1.1, -1.1]} scale={.75} lineWidth={3.5}>

export const BoxR = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const canvasRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Canvas
      shadows
      camera={{ position: [-3, 0.5, 3] }}
      invalidateFrameloop={false}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <Edges />
        <Side rotation={[0, 0, 0]} bg="orange" index={0}>
          <torusGeometry args={[0.65, 0.3, 64]} />
        </Side>
        <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
          <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
        </Side>
        <Side
          rotation={[0, Math.PI / 2, Math.PI / 2]}
          bg="lightgreen"
          index={2}
        >
          <boxGeometry args={[1.15, 1.15, 1.15]} />
        </Side>
        <Side
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          bg="aquamarine"
          index={3}
        >
          <octahedronGeometry />
        </Side>
        <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
          <icosahedronGeometry />
        </Side>
        <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
          <dodecahedronGeometry />
        </Side>
      </mesh>

      <CameraControls makeDefault />
    </Canvas>
  );
};

function Side({ rotation = [0, 0, 0], bg = "#f0f0f0", children, index }) {
  const mesh = useRef();

  const { nodes } = useGLTF("/aobox-transformed.glb");

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta;
  });

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/** A box with baked AO */}
      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          aoMap={nodes.Cube.material.aoMap}
          color={bg}
        />
        <spotLight
          castShadow
          color={bg}
          intensity={2}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
        />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
}

export default BoxR;
