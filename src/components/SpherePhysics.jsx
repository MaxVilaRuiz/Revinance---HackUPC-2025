import * as THREE from 'three';

export default class SphereObject {
  constructor(amount = 1) {
    this.velocity = new THREE.Vector3(0, 0, 0); // Default velocity
    this.position = new THREE.Vector3(0, 0, 0);
    this.grounded = false;
    this.radius = Math.log10(amount) * 3 + 2;
    this.gravity = new THREE.Vector3(0, -9.8, 0);

    // Create mesh
    const geometry = new THREE.SphereGeometry(this.radius, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff });
    this.mesh = new THREE.Mesh(geometry, material);

    // Sync mesh with position
    this.mesh.position.copy(this.position);
  }

  update(deltaTime) {
    // Update position based on velocity
    if(this.position.y < -10) this.velocity = new THREE.Vector3(0, 0, 0);
    const gravityEffect = this.gravity.clone().multiplyScalar(deltaTime);
    this.velocity.add(gravityEffect);

    // Update position
    this.position.addScaledVector(this.velocity, deltaTime);
    this.mesh.position.copy(this.position);
  }

  getMesh() {
    return this.mesh;
  }

  getVelocity() {
    return this.velocity;
  }

  getRadius() {
    return this.radius;
  }

  setVelocity(vec3) {
    this.velocity = vec3;
  }

  setPosition(vec3)
  {
    this.position.copy(vec3);
    this.mesh.position.copy(vec3);
  }

  isGrounded() {
    return this.grounded;
  }
}