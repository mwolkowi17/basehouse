import * as THREE from 'three';

const width = 0.3;
const height = 0.6;
const depth = 0.05;
const geometry5 = new THREE.BoxGeometry(width, height, depth);
const material5 = new THREE.MeshPhongMaterial({ color: 0x713b1c });

export const gate = new THREE.Mesh(geometry5, material5);
gate.position.z = 4.5;
gate.position.x= -0.4;
gate.position.y= -0.19;