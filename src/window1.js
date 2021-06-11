import * as THREE from 'three';

const width = 0.3;
const height = 0.3;
const depth = 0.3;
const geometry4 = new THREE.BoxGeometry(width, height, depth);
const material4 = new THREE.MeshPhongMaterial({ color: 0x0080ff });

export const window1 = new THREE.Mesh(geometry4, material4);
window1.position.z = -0.4;
window1.position.x= -0.4;