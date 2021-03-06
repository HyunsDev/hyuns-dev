import { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from 'styled-components'
import Model from './assets/Rocket'

import * as THREE from 'three'

const Div = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  height: 500px;
  width: 500px;
`

function getRadian(degree: number) {
  console.log(degree)
  return degree * Math.PI / 180
}

function Rig({ children }:any) {
  const outer = useRef<any>()
  const inner = useRef<any>()
  useFrame(({ clock }) => {
    inner.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  )
}

function App() {
  return (
    <Div>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 150], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage
            contactShadow={false}
            intensity={0.3}
            rotation={[0, 0, getRadian(45)]}
            position={[0,70,0]}
          >
            <Rig>
              <Model />
            </Rig>
            
          </Stage>
        </Suspense>
      </Canvas>
    </Div>
  );
}

export default App;

