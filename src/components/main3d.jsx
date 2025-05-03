import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function MainScene()
{
    const containerRef = useRef();

    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize( width, height );
        container.appendChild( renderer.domElement );

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 10, 0);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xffffff, Math.PI);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        loader.load('/importmodels/TwistedTree_1.gltf', 
            (gltf) => {
                scene.scale.set(0.2, 0.2, 0.2);
                scene.position.y = -2;
                scene.add(gltf.scene);
            }
        );

        camera.position.z = 5;
        const cameraStartPosition = new THREE.Vector3().copy(camera.position);

        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () =>
        {
            requestAnimationFrame(animate);
            
            const { x, y } = mouseRef.current;
            camera.position.x = cameraStartPosition.x + x * 1;
            camera.position.y = cameraStartPosition.y + y * 1;
            //camera.lookAt(glftmodel.position);
            camera.updateProjectionMatrix();

            renderer.render( scene, camera );
        }
        animate();

        return () => {
            if(container && renderer.domElement)
            {
                container.removeChild(renderer.domElement); 
            }
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}