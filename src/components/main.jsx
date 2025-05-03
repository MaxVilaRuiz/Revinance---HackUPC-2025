import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Main()
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

        const ambientLight = new THREE.AmbientLight(0xffffff, Math.PI);
        scene.add(ambientLight);

        camera.position.z = 50;
        const cameraStartPosition = new THREE.Vector3().copy(camera.position);

        // PHYSICS SPHERES
        const geometry = new THREE.SphereGeometry(5, 16, 16);
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        const sphere = new THREE.Mesh( geometry, material );
        let velocity = 0;
        scene.add( sphere );

        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const clock = new THREE.Clock();

        const animate = () =>
        {
            const delta = clock.getDelta();
            
            if(sphere.position.y > -20)
            {
                velocity += 20 * delta;
                sphere.position.y -= velocity * delta;
            }
            else if(velocity != 0) velocity = 0;

            const { x, y } = mouseRef.current;
            camera.position.x = cameraStartPosition.x + x * 1;
            camera.position.y = cameraStartPosition.y + y * 1;
            camera.updateProjectionMatrix();
            
            renderer.render( scene, camera );
            requestAnimationFrame(animate);
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