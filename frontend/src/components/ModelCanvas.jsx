import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Html } from "@react-three/drei";
import { Suspense, useEffect } from "react";

// Model loader
const Model = ({ url, wireframe }) => {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, wireframe]);

  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  );
};

const ModelCanvas = ({ modelUrl, backgroundColor, wireframe }) => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 60 }}
      gl={{ antialias: true }}
      style={{ background: backgroundColor }}
    >
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <hemisphereLight skyColor={"white"} groundColor={"gray"} intensity={0.3} />

      {/* Controls */}
      <OrbitControls enablePan enableZoom enableRotate />

      {/* Model */}
      <Suspense fallback={<Html center>Loading model...</Html>}>
        {modelUrl && <Model url={modelUrl} wireframe={wireframe} />}
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;