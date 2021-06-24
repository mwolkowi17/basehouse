import * as THREE from 'three';

const width = 0.4;
const height = 5; 
const geometry = new THREE.PlaneGeometry(width, height);
const material = new THREE.MeshPhongMaterial({ color: 0x808080 });

export const wallfront = new THREE.Mesh(geometry, material);