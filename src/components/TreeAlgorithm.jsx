import React, { useEffect, useRef } from "react";
import * as THREE from 'three';

function GenerateAttractors(count, radius = 2)
{
    const attractors = [];
    for(let i = 0; i < count; i++)
    {
        const x = (Math.random() * 2 - 1) * radius;
        const y = (Math.random() * 2 - 1) * radius;
        const z = (Math.random() * 2 - 1) * radius;

        attractors.push(new THREE.Vector3(x, y, z));
    }

    return attractors;
}

export default function ThreeAlgorithm()
{
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const width = container.clientWidth;
        const heigth = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / heigth, 0.1, 1000);
        camera.position.set(0, 0, 5);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const attractors = generateAttractors(150);
        let nodes = [new THREE.Vector3(0, 0, 0)];

        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ color: 0x22aa44 });
        const lines = new THREE.LineSegments(geometry, material);
        scene.add(lines);

        const segmentLength = 0.1;
        const attractionDistance = 0.5;
        const killDistance = 0.05;

        const grow = () => {
            const newNodes = [];
            attractors.forEach((attractor, index) => {
            let closestNode = null;
            let minDist = Infinity;
      
            nodes.forEach(node => {
            const dist = node.distanceTo(attractor);
            if (dist < attractionDistance && dist < minDist) {
                minDist = dist;
                closestNode = node;
            }
            });
      
            if (closestNode) {
                const dir = new THREE.Vector3().subVectors(attractor, closestNode).normalize();
                const newPos = closestNode.clone().add(dir.multiplyScalar(segmentLength));
                newNodes.push([closestNode.clone(), newPos]);
      
                if (minDist < killDistance) {
                  attractors.splice(index, 1); // remove attractor
                }
      
                nodes.push(newPos);
            }
        });

        const positions = [];
        newNodes.forEach(([a, b]) => {
            positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        });

        const positionAttr = new Float32Array(positions);
        geometry.setAttribute('position', new THREE.BufferAttribute(positionAttr, 3));
        geometry.computeBoundingSphere();
        };

        function animate()
        {
            requestAnimationFrame(animate);
            if(attractors.length > 0)
            {
                grow();
            }

            renderer.render(scene, camera);
        }

        animate();

    }, []);
}