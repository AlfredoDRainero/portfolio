import Head from "next/head";
import React, { Suspense, useRef, useTransition } from "react";
import { useState, useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

import { useLoader } from "@react-three/fiber";

import { memo } from "react";
import {
  Grid,
  Center,
  Text3D,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  useGLTF
} from "@react-three/drei";
import { useControls } from "leva";
import { Html } from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import { Ground } from "@/components/Ground";
import { BoxGeometry, MeshBasicMaterial, TextureLoader } from "three";

import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

import styled from "styled-components";
import ThreeGrid from "../components/boxesGrid";
import BoxR from "@/components/BoxRotating";
import CubeScene from "@/components/CubeTestScenario";

import { useTexture } from "@react-three/drei";

import { SpotLightHelper } from "three";

import { BoxHelper, useHelper } from "@react-three/drei";
import { Underlay, Overlay } from "./Texto"

const MainContainer = styled.div`
  /* background: rgb(73, 72, 77);
  background: radial-gradient(
    circle at 50% 10%,
    rgba(73, 72, 77, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );*/
  //display: grid;
  //grid-template-columns: repeat(1, 1fr);
  //grid-template-rows: repeat(1, 1fr);
  //left: 0;
  //top: 0;
  // position: absolute;
  //z-index: 1;
  background-color: #dddddd;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: black;
  z-index: -1;
`;

const Main = styled.div`
  position: absolute;
  //z-index: 5;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;

const Cont3D = styled.div`
  //overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0;
  padding: 0;
  display: grid;
  z-index: 2;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    //background-color: black;
  }
`;

const ContText = styled.div`
  //overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0;
  padding: 0;
  display: grid;
  z-index: 3;
  background-color: yellow;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    //background-color: black;
  }
  
`;

export default function Home() {
  const { gridSize, ...gridConfig } = useControls({
    gridSize: [10.5, 10.5],
    cellSize: { value: 10.0, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 0.8, min: 0, max: 5, step: 0.1 },
    cellColor: "#6f6f6f",
    sectionSize: { value: 0.0, min: 0, max: 10, step: 1.0 },
    sectionThickness: { value: 0.0, min: 0, max: 5, step: 0.1 },
    sectionColor: "#ffffff",
    fadeDistance: { value: 32, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 0.9, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  });

  const [hovered, hover] = useState(false);
  const [hovered2, hover2] = useState(false);
  const ref = useRef();
  const ref2 = useRef();

  const spot = useRef();

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  /*useEffect(() => {
    
    setMouseX(event.clientX / window.innerWidth) * 2 - 1);
    setMouseX(-(event.clientY / window.innerHeight) * 2 + 1);*/

  /*const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load("/1C.JPG", (texture) => {
      setTexture(texture);
      // Define la repetición y el desplazamiento de la textura
      const textureRepeat = { x: 1, y: 1 }; // Repetición en ambas direcciones
      const textureOffset = { x: 1, y: 1 }; // Desplazamiento en ambas direcciones

      // Aplica las propiedades al material de la textura
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Configura la repetición de la textura
      texture.repeat.set(textureRepeat.x, textureRepeat.y); // Establece la repetición de la textura
      texture.offset.set(textureOffset.x, textureOffset.y); // Establece el desplazamiento de la textura
    });
  }, []);
*/
  return (
    <>
    <Underlay />
        <Overlay />
        <MainContainer>
      <Canvas
        shadows
        camera={{
          position: [10, 12, 12],
          fov: 25,
          
        }}
      >
        
        <spotLight
          ref={spot}
          color={[1, 1, 1]}
          intensity={40.5}
          angle={10}
          penumbra={0.5}
          position={[1, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        {/* helper spot */}
        <Center top position={[1, 5, 0]}>
          <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
            <sphereGeometry args={[0.1, 4, 4]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </Center>

            <ambientLight intensity={0.5} color="#ffffff" />

            {/*<color args={[0.9, 0.9, 0.9]} attach="background" />*/}

            <group position={[0, -0.5, 0]}>
              <Center top></Center>

              <Center bottom right position={[-3.7, 0.25, 0]}>
                <Text3D
                  castShadow
                  curveSegments={32}
                  bevelEnabled
                  bevelSize={0.01}
                  bevelThickness={0.1}
                  height={0.05}
                  lineHeight={0.5}
                  letterSpacing={-0.01}
                  size={0.7}
                  font="/Inter_Bold.json"
                  rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
                >
                  Rainero Alfredo
                  <meshStandardMaterial color={hovered2 ? "white" : "white"} />
                </Text3D>
              </Center>

              <Center bottom right position={[0, 0.17, -0.7]}>
                <Text3D
                  castShadow
                  curveSegments={32}
                  bevelEnabled
                  bevelSize={0.01}
                  bevelThickness={0.1}
                  height={0.001}
                  lineHeight={0.1}
                  letterSpacing={-0.01}
                  size={0.4}
                  font="/Inter_Bold.json"
                  rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
                >
                  PORTFOLIO
                  <meshStandardMaterial color={hovered2 ? "white" : "white"} />
                </Text3D>
              </Center>

              {/* <Center bottom right position={[3, 0.1, 0]}>
            <Text3D
              curveSegments={30}
              bevelEnabled
              bevelSize={0}
              bevelThickness={0}
              height={0}
              lineHeight={0.1}
              letterSpacing={-0.01}
              size={1}
              font="/Inter_Bold.json"
              rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
            >
              JavaScript
              <meshStandardMaterial color={hovered2 ? "yellow" : "yellow"} />
            </Text3D>
          </Center>*/}

              <Shadows />
              <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
            </group>
            <OrbitControls
              autoRotate
              autoRotateSpeed={1}
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 3.1}
              maxPolarAngle={Math.PI / 3.1}
            />
            {/*  <OrbitControls   autoRotate autoRotateSpeed={1} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1}  /> */}
          </Canvas>
        </Cont3D>
      </Main>
    </>
  );
}

const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    colorBlend={0.5}
    alphaTest={0.5}
    scale={10}
  >
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
));

{
  /*<Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>*/
}
{
  /*<MainContainer>
       <ThreeGrid />
        <BoxR/>
        <CubeScene/>

      

      </MainContainer>
      <Suspense fallback={null}>
          <Canvas shadows>
            <CarShow />
          </Canvas>
        </Suspense>*/
}
