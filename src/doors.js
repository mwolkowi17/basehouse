import * as THREE from 'three';

const width = 0.3;
const height = 0.6;
const depth = 0.3;
const geometry5 = new THREE.BoxGeometry(width, height, depth);
const material5 = new THREE.MeshPhongMaterial({ color: 0x0080ff });

export const doors = new THREE.Mesh(geometry5, material5);
doors.position.z = 0.4;
doors.position.x= -0.4;
doors.position.y= -0.19;