import * as THREE from "three";
import { useState, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import { LayerMaterial, Base, Depth, Fresnel, Noise } from "lamina/vanilla";
import { useRef } from "react";

const colorA = new THREE.Color("#2032A5").convertSRGBToLinear();
const colorB = new THREE.Color("#0F1C4D").convertSRGBToLinear();
const fresnel = new THREE.Color("#E7B473").convertSRGBToLinear();

const material = new LayerMaterial({
  layers: [
    new Base({ color: colorA }),
    new Depth({
      colorA: colorA,
      colorB: colorB,
      alpha: 0.5,
      mode: "normal",
      near: 0,
      far: 2,
      origin: [1, 1, 1],
    }),
    new Depth({
      colorA: "purple",
      colorB: colorB,
      alpha: 0.5,
      mode: "add",
      near: 3,
      far: 2,
      origin: [1, 1, 1],
    }),
    new Fresnel({
      mode: "add",
      color: fresnel,
      intensity: 0.3,
      power: 2.5,
      bias: 0.0,
    }),
    new Noise({
      mapping: "local",
      type: "simplex",
      scale: 5000,
      intensity: 0.3,
      colorA: "#ffaf40",
      colorB: "black",
      mode: "overlay",
    }),
  ],
});

function Noodle() {
  const noodle = useRef();
  const { viewport, camera } = useThree();
  const { nodes } = useGLTF("/worms-transformed.glb");
  const [geometry] = useState(
    () => nodes[`noodle_${Math.ceil(Math.random() * 4)}`].geometry
  );
  const [z] = useState(Math.random() * -30);
  const bounds = viewport.getCurrentViewport(camera, [0, 0, z]);
  const position = useMemo(() => {
    return [
      THREE.MathUtils.randFloatSpread(bounds.width),
      THREE.MathUtils.randFloatSpread(bounds.height * 0.75),
      z,
    ];
  }, [viewport, z]);

  const handleClick = () => {
    noodle.current.rotation.x += -1;
  };

  return (
    <Float
      position={position}
      speed={0.1 + Math.random() / 10}
      rotationIntensity={10}
      floatIntensity={40}
      dispose={null}
    >
      <mesh
        scale={5}
        geometry={geometry}
        material={material}
        ref={noodle}
        onClick={handleClick}
      />
    </Float>
  );
}

export default function Noodles() {
  return Array.from({ length: 16 }, (i) => <Noodle key={i} />);
}

useGLTF.preload("/worm-transformed.glb");
