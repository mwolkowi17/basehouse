import * as THREE from 'three';

const color1 = 0xFFFFFF;
const intensity1 = 1;
export const light2 = new THREE.DirectionalLight(color1, intensity1);
light2.position.set(15, 15, 10);
light2.target.position.set(-5, 0, 0);
//light2.castShadow = true;
