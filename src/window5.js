import * as THREE from 'three';

const width = 0.3;
const height = 0.3;
const depth = 0.3;
const geometry6 = new THREE.BoxGeometry(width, height, depth);
const material6 = new THREE.MeshPhongMaterial({ color: 0x0080ff });

export const window5 = new THREE.Mesh(geometry6, material6);
window5.position.z = 0;
window5.position.x = 0.9;