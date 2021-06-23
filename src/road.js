import * as THREE from 'three';

const width = 0.4;
const height = 5; 
const geometry = new THREE.PlaneGeometry(width, height);
const material = new THREE.MeshPhongMaterial({ color: 0x808080 });

export const road = new THREE.Mesh(geometry, material);

road.rotation.x = -1.57;
road.position.y = -0.44;
road.position.x = -0.40;
road.position.z = 2;