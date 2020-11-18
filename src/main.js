/// <reference path='../node_modules/babylonjs/babylon.module.d.ts'/>

//const { Camera } = require("babylonjs");


// Get Canvas (Needed)
const canvas = document.getElementById('renderCanvas');

// Create BabylonJS Engine (Needed)
const engine = new BABYLON.Engine(canvas, true);

// Variable for rotation
//const RotAxis = new BABYLON.Vector3(1, 0, 0);

// Create scene (Needed)
function createScene() {
    
    // Local scene used in other functions
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Black(); //Change to black later

    // Create Camera (Needed)
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -1000), scene);
    camera.attachControl(canvas, true);
    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);

    
    
    // Create light (Needed)-> Different variations

    let light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 200, 0), scene);
    //let light = new BABYLON.PointLight('light', new BABYLON.Vector3(-50, 25, 20), scene);     !!!OUTDATED


    var planetMaterial = new BABYLON.StandardMaterial(scene);
    planetMaterial.alpha = 1;
    planetMaterial.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.0);
    

    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments: 8 , diameter: 500}, scene);
    sphere.position = new BABYLON.Vector3(0, 0, 0); 
    sphere.material = planetMaterial;
    //sphere.rotate(RotAxis, 0.1);
    

    return scene;
}



//Scene that we observe in browser
const scene = createScene();

// This runs the renderloop, which makes it so the scene is rendered out (and also so it isnt static but can change over time with techniques)
engine.runRenderLoop(() => {
    scene.render();
});




// Custom materials and colors