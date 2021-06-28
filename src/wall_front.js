import * as THREE from 'three';

const width = 5;
const height = 0.4; 
const depth = 0.01;
const geometry = new THREE.BoxGeometry(width, height,depth);
const material = new THREE.MeshPhongMaterial({ color: 0xb5651d });

export const wallfront = new THREE.Mesh(geometry, material);

wallfront.position.z = 4.5;
wallfront.position.x= -0.4;
wallfront.position.y= -0.26;
wallfront.castShadow = true;