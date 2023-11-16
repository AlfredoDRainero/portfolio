import Head from "next/head";
import React, { Suspense } from "react";
import { useState, useEffect } from "react";


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
  color:black;
`;

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
     
      <PerspectiveCamera makeDefault fov={50} position={[0, 10, 0]} />

      <color args={[0, 0, 0]} attach="background" />

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
        {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
        <Bloom
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
      <Ground />
    </>
  );
}

export default function Home() {
  return (
    <>
      {/*<Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>*/}
      <MainContainer>
        {/*<ThreeGrid />
        <BoxR/>
        <CubeScene/>*/}

      

      </MainContainer>
      <Suspense fallback={null}>
          <Canvas shadows>
            <CarShow />
          </Canvas>
        </Suspense>
    </>
  );
}