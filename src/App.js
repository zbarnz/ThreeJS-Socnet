import styles from "./App.module.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function App() {
    function Sphere(props) {
    // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef();
        // Hold state for hovered and clicked events
        const [hovered, hover] = useState(false);
        const [clicked, click] = useState(false);
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (ref.current.rotation.y += 0.01));

        const colorMap = useLoader(TextureLoader, 'socnet.png');
        const normalMap = useLoader(TextureLoader, 'NormalMap.png');
        const displacementMap = useLoader(TextureLoader, 'DisplacementMap.png');
        // Return the view, these are regular Threejs elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={ref}
                position={[0, 0, 0]}
                scale={clicked ? 1.5 : 1}
                onClick={(event) => click(!clicked)}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}
            >
                <sphereGeometry attach="geometry" args={[1, 128]} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} displacementMap={displacementMap} displacementScale={0.1}/>

            </mesh>
        );
    }

    return (
        <div className={styles.container}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Sphere />
            </Canvas>
        </div>
    );
}

export default App;
