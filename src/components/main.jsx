import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import SphereObject from './SpherePhysics.jsx';

export default function Main()
{
    const containerRef = useRef();
    const isDragging = useRef(false);
    const previousMouse = useRef({ x: 0, y: 0 });

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

        function onMouseDown(e) {
            isDragging.current = true;
            previousMouse.current = { x: e.clientX, y: e.clientY };
        }

        function onMouseMove(e) {
            if (!isDragging.current) return;

            const deltaX = e.clientX - previousMouse.current.x;
            const deltaY = e.clientY - previousMouse.current.y;

            const panSpeed = 0.1;

            // Move camera (or camera.target if using OrbitControls)
            const newCamPosX = camera.position.x - deltaX * panSpeed;
            const newCamPosY = camera.position.y + deltaY * panSpeed;

            if(newCamPosX < 50 && newCamPosX > -50) camera.position.x = newCamPosX;
            if(newCamPosY < 20 && newCamPosY > -20) camera.position.y = newCamPosY;

            previousMouse.current = { x: e.clientX, y: e.clientY };
        }

        function onMouseUp() {
            isDragging.current = false;
        }

        renderer.domElement.addEventListener('mousedown', onMouseDown);
        renderer.domElement.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        // PHYSICS SPHERES
        let spheres = [];
        for(let i = 0; i < 30; i++)
        {
            const sphere = new SphereObject(100);
            const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 20,
            20
            );
            sphere.position.copy(pos);
            sphere.mesh.position.copy(pos);
            spheres.push(sphere);
            scene.add(sphere.getMesh());
        }

        const clock = new THREE.Clock();
        const minX = -100;
        const maxX = 100;

        const animate = () =>
        {
            const delta = clock.getDelta();

            spheres.forEach(s => s.update(delta));

            for (let i = 0; i < spheres.length; i++) {
                const a = spheres[i];
                for (let j = i + 1; j < spheres.length; j++) {
                  const b = spheres[j];
            
                  const dir = new THREE.Vector3().subVectors(b.position, a.position);
                  const distance = dir.length();
                  const minDistance = a.radius + b.radius;
            
                  if (distance < minDistance) {
                    // Overlap detected
            
                    // 1. Normalize direction
                    const normal = dir.clone().normalize();
            
                    // 2. Compute overlap
                    const overlap = minDistance - distance;
            
                    // 3. Push spheres apart (equally)
                    const correction = normal.multiplyScalar(overlap / 2);
                    a.position.add(correction.clone().negate());
                    b.position.add(correction);
                    a.mesh.position.copy(a.position);
                    b.mesh.position.copy(b.position);
            
                    // 4. Simple elastic collision response
                    a.setVelocity(new THREE.Vector3(0, 0, 0));
                    b.setVelocity(new THREE.Vector3(0, 0, 0));
                  }
                }

                const r = a.radius;
                const pos = a.position;

                // Left wall collision
                if (pos.x - r < minX) {
                    pos.x = minX + r;
                    a.velocity.x *= -0.8; // reverse X velocity with damping
                }

                // Right wall collision
                if (pos.x + r > maxX) {
                    pos.x = maxX - r;
                    a.velocity.x *= -0.8;
                }

                a.setPosition(new THREE.Vector3(pos.x, pos.y, 20));

                if(a.position.y < -15) a.setPosition(new THREE.Vector3(
                    a.position.x, -15, a.position.z
                ));
            }

            // const { x, y } = mouseRef.current;
            // camera.position.x = cameraStartPosition.x + x * 10;
            // camera.position.y = cameraStartPosition.y + y * 10;
            // camera.updateProjectionMatrix();
            
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