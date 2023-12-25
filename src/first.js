//import Three
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const guid = new GUI()

const folder = guid.addFolder("Box 1");



var canvas = document.querySelector('canvas.webgl');
//scene
var scene = new THREE.Scene();

//material 
const material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: false})

//mesh

var mesh1 = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), material)
folder.add(mesh1.position, 'x')
    .name("Position x")
    .min(0)
    .max(5)

folder.add(mesh1.position, 'y')
    .name("Position Y")
    .min(0)
    .max(5)

folder.add(mesh1.position, 'z')
    .min(0)
    .max(5)
    .name('Position z')    

folder.add(mesh1.rotation, 'x')
      .name('Rotation on x')
      .min(0)
      .max(Math.PI * 2)
      .step(Math.PI /4)

folder.add(mesh1.rotation, 'y')
      .name('Rotation on Y')
      .min(0)
      .max(Math.PI * 2)
      .step(Math.PI /4)
    
folder.add(mesh1.rotation, 'z')
      .min(0)
      .max(Math.PI * 2)
      .name('Rotation on z')
      .step(Math.PI/4)

//  var mesh2 = new THREE.Mesh(new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({color: 0xf0000ff}))
//  var mesh3 = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshBasicMaterial({color: 0xf00ff00}))
//mesh1.position.setX(5);
//mesh3.position.setX(-5);
//
//  var group = new THREE.Group();
//  group.add(mesh1, mesh2, mesh3)

//  group.position.setX(5)

// group.rotateZ(Math.PI/2)

//scene.add(group)



scene.add(mesh1)

 // mesh1.rotateZ(-Math.PI/4);
//  mesh3.rotateY(2)

//mesh1.scale.set(3,1,1)

var axishelper = new THREE.AxesHelper(3);
scene.add(axishelper)
// scene.add(mesh1);
//  scene.add(mesh2);
//  scene.add(mesh3);
//camera
var sizes = { Width: window.innerWidth, height: window.innerHeight };
var camera = new THREE.PerspectiveCamera(150, sizes.Width/sizes.height);
camera.position.setZ(5)
//camera.position.setX(4)
//camera.position.setY(5)
camera.lookAt(mesh1.position)
//camera.position.setY(13)
//.position.setX(13)
scene.add(camera) 

//render
var render = new THREE.WebGLRenderer({canvas: canvas})

const oribitControl = new OrbitControls(camera, canvas)

render.setSize(sizes.Width, sizes.height)

window.addEventListener("dblclick",()=>{

    if(!document.fullscreenElement)
    {
        canvas.requestFullscreen();
        
    }
    else {
        document.exitFullscreen();
    }
})

window.addEventListener('resize',() => {

    
    sizes.Width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.Width/ sizes.height;
    camera.updateProjectionMatrix();

    render.setSize(sizes.Width, sizes.height)
    
})



function animate()
{  
   
    // console.log(pos)
     mesh1.rotation.y += 0.01;
    
   
    render.render(scene, camera)
    oribitControl.update()
    requestAnimationFrame(animate)

  
}

animate()

