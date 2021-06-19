import * as THREE from 'three';

const radiusTop =  0.1;
const radiusBottom =  0.1;
const height =  1;
const radialSegments = 27; 
const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
const material = new THREE.MeshPhongMaterial({ color: 0x713b1c });

export const treebottom1 = new THREE.Mesh(geometry, material);

treebottom1.position.x=-2;
treebottom1.position.z=2;