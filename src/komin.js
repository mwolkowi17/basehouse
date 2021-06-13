import * as THREE from 'three';

const width = 0.2;
const height = 0.3;
const depth = 0.2;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });

export const komin = new THREE.Mesh(geometry, material);
komin.position.y = 1.2;
komin.position.x = 0.4;