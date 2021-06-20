import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { Scene } from 'three';
import {cube} from './cube.js';
import {line} from './line.js';
import {light} from './hemi_light.js';
import {light2} from  './directional_light.js';
import {cylinder} from './roof.js';
import {window1} from './window1.js';
import {window2} from './window2.js';
import { window3 } from './window3.js';
import { doors } from './doors.js';
import { window4 } from './window4.js';
import { window5 } from './window5.js';
import { earth } from './eartth.js';
import { komin } from './komin.js';
import { treebottom1 } from './tree_bottom1.js';
import { treebottom2 } from './tree_bottom2.js';


// input segment
const btn = document.getElementById("action");

btn.addEventListener("click", function () {
    //Do something here
    let boxwidthinput = document.getElementById("myInput").value;
    let boxwidthinputnumber = parseFloat(boxwidthinput);
    if (boxwidthinputnumber != 0) {
        cube.scale.x = boxwidthinputnumber;
    }

    //cube.position.x=2;
});
// position segment

const btnposition = document.getElementById("actionPosition");

btnposition.addEventListener("click", function(){
    let boxpositionxinput = document.getElementById("positionInput").value;
    let boxpositionxinputnumber = parseFloat(boxpositionxinput);
    if (boxpositionxinputnumber != 0) {
        cube.position.x = boxpositionxinputnumber;
    }
})
//cube.position.x=2; do zrobienia




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

//cube.add(line);
cube.add(cylinder);
cube.add(window1);
cube.add(window2);
cube.add(window3);
cube.add(window4);
cube.add(window5);
cube.add(doors);
cube.add(komin);
cube.add(earth);
cube.add(treebottom1);
cube.add(treebottom2);
scene.add(cube);
scene.add(light);
scene.add(light2);
scene.add(light2.target);

camera.position.z = 5;

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
controls.update();
controls.autoRotate=true;

const animate = function () {
    requestAnimationFrame(animate);

    //cube.rotation.x += 0.02;
    //cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    
    controls.update();

};

animate();