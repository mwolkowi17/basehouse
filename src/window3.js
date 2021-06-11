import * as THREE from 'three';

const width = 0.3;
const height = 0.3;
const depth = 0.3;
const geometry6 = new THREE.BoxGeometry(width, height, depth);
const material6 = new THREE.MeshPhongMaterial({ color: 0x0080ff });

export const window3 = new THREE.Mesh(geometry6, material6);
window3.position.z = 0.4;
window3.position.x= 0.4;