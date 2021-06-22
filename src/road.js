import * as THREE from 'three';

const width = 9;
const height = 9; 
const geometry = new THREE.PlaneGeometry(width, height);
const material = new THREE.MeshPhongMaterial({ color: 0x006700 });

export const road = new THREE.Mesh(geometry, material);