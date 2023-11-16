import Head from "next/head";
import React, { Suspense } from "react";
import { useState, useEffect } from "react";

import { useThree } from "@react-three/fiber";

import { memo } from "react";
import {
  Grid,
  Center,
  Text3D,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import { Html } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Ground } from "@/components/Ground";

import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

import styled from "styled-components";
import ThreeGrid from "../components/boxesGrid";
import BoxR from "@/components/BoxRotating";
import CubeScene from "@/components/CubeTestScenario";

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
`;

function CarShow() {
  return (
    <>
      {/*<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[0, 10, 0]} />

      <color args={[0.9, 0.9, 0.9]} attach="background" />

      <spotLight
        color={[1, 1, 1]}
        intensity={40.5}
        angle={10}
        penumbra={0.5}
        position={[1, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={40}
        angle={10}
        penumbra={0.5}
        position={[-1, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={40}
        angle={10}
        penumbra={0.5}
        position={[-3, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={40}
        angle={10}
        penumbra={0.5}
        position={[3, 5, 4]}
        castShadow
        shadow-bias={-0.0001}
      />

      <EffectComposer>
        <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
      {/*<Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
       <Ground />*/}
    </>
  );
}

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
  return (
    <>
      <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }}>
        <color args={[0.9, 0.9, 0.9]} attach="background" />

        <group position={[0, -0.5, 0]}>
          <Center top></Center>
          <Center top position={[-2, 0, 2]}>
            <mesh castShadow>
              <sphereGeometry args={[0.5, 32, 32]} />
              {/*   <Html
                occlude
                distanceFactor={1.5}
                position={[0, 0, 0.51]}
                transform
              >
                <span>Size</span>

                <a> probando</a>
                <button> asdasd</button>
  </Html>*/}
            </mesh>
          </Center>

          <Center top position={[2.5, 0, 1]}>
            <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[0.7, 0.7, 0.7]} />
            </mesh>
          </Center>
          <Shadows />
          <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
        </group>
        <OrbitControls makeDefault />
         {/*<Environment preset="city" />
       <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
            labelColor="white"
/>
        </GizmoHelper>*/}
      </Canvas>
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
