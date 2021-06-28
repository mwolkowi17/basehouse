import * as THREE from 'three';

const width = 0.01;
const height = 0.4; 
const depth = 6;
const geometry = new THREE.BoxGeometry(width, height,depth);
const material = new THREE.MeshPhongMaterial({ color: 0xb5651d });

export const wallleft = new THREE.Mesh(geometry, material);

wallleft.position.z = 1.5;
wallleft.position.x= -2.9;
wallleft.position.y= -0.26;
wallleft.castShadow = true;
wallleft.receiveShadow = true

export const wallright = new THREE.Mesh(geometry, material);

wallright.position.z = 1.5;
wallright.position.x= 2.1;
wallright.position.y= -0.26;
wallright.castShadow = true;