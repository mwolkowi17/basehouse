import * as THREE from 'three';

const width = 5;
const height = 0.4; 
const depth = 0.01;
const geometry = new THREE.BoxGeometry(width, height,depth);
const material = new THREE.MeshPhongMaterial({ color: 0xb5651d });

export const wallback = new THREE.Mesh(geometry, material);

wallback.position.z = -1.5;
wallback.position.x= -0.4;
wallback.position.y= -0.26;
wallback.castShadow = true;