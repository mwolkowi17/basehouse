import * as THREE from 'three';

const geometry3 = new THREE.CylinderGeometry( 1, 1, 5, 3, 1, false, 0 );
const material3 = new THREE.MeshPhongMaterial( {color: 0xffff00} );
export const cylinder = new THREE.Mesh( geometry3, material3 );
cylinder.rotation.z = 1.57;
cylinder.rotation.x = 4.71;
cylinder.scale.x = 0.7;
cylinder.scale.y = 0.44;
cylinder.scale.z = 0.5;
cylinder.position.y=0.7;
cylinder.castShadow = true;
