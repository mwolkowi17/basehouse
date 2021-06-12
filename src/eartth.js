import * as THREE from 'three';

const radius = 7;
const segments = 24;
const geometry = new THREE.CircleGeometry(radius, segments);
const material = new THREE.MeshPhongMaterial({ color: 0x38761d });

export const earth = new THREE.Mesh(geometry, material);
earth.rotation.x = -1.57;
earth.position.y = -0.5;