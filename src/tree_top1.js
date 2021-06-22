import * as THREE from 'three';

const radius =  0.4; 
const detail = 2; 
const geometry = new THREE.DodecahedronGeometry(radius, detail);
const material = new THREE.MeshPhongMaterial({ color: 0x006700 });

export const treetop1 = new THREE.Mesh(geometry, material);

treetop1.position.x=-2;
treetop1.position.z=2;
treetop1.position.y=0.6;
treetop1.castShadow = true;

export const treetop2 = new THREE.Mesh(geometry, material);

treetop2.position.x=-2.7;
treetop2.position.z=2.5;
treetop2.position.y=0.6;
treetop2.castShadow = true;