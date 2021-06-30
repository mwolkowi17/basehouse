import * as THREE from 'three';

//const width = 5;
const width = 2.4;
//const height = 0.4; 
const height = 0.4; 
//const depth = 0.01;
const depth = 0.01;
const geometry = new THREE.BoxGeometry(width, height,depth);
const material = new THREE.MeshPhongMaterial({ color: 0xb5651d });

export const wallfront = new THREE.Mesh(geometry, material);

wallfront.position.z = 4.5;
//wallfront.position.x= -0.4;
wallfront.position.x= -1.7;
wallfront.position.y= -0.26;
wallfront.castShadow = true;

export const wallfrontB = new THREE.Mesh(geometry, material);

wallfrontB.position.z = 4.5;
//wallfront.position.x= -0.4;
wallfrontB.position.x= 0.905;
wallfrontB.position.y= -0.26;
wallfrontB.castShadow = true;