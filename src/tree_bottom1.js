import * as THREE from 'three';

const radiusTop =  0.2;
const radiusBottom =  0.2;
const height =  2.3;
const radialSegments = 27; 
const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
const material = new THREE.MeshPhongMaterial({ color: 0x38761d });

export const treebottom1 = new THREE.Mesh(geometry, material);

treebottom1.position.x=-2;