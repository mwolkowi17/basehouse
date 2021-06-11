import * as THREE from 'three';

const width = 0.3;
const height = 0.3;
const depth = 0.3;
const geometry5 = new THREE.BoxGeometry(width, height, depth);
const material5 = new THREE.MeshPhongMaterial({ color: 0x0080ff });

export const window2 = new THREE.Mesh(geometry5, material5);
window2.position.z = -0.4;
window2.position.x= 0.4;