/**
 * https://github.com/mrdoob/three.js/blob/master/examples/webxr_ar_hittest.html
 * https://github.com/immersive-web/webxr
 */
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton'
import { Vector3, Quaternion, Matrix4, Euler } from 'three'
import Painting from './Painting.js'

var camera
var scene 
var renderer
var arbutton
var controller
var reticle

var hitTestSource = null
var hitTestSourceRequested = false

var painting = null


function createSession(GUIOvelayElement){
    initialiseWebXRThree(GUIOvelayElement)
    createDebugGUI()
    window.addEventListener('resize', onWindowResize, false);
    renderer.setAnimationLoop(render);
}

function initialiseWebXRThree(GUIOvelayElement) {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;

    let root = document.getElementById('arOverlay')
    arbutton = ARButton.createButton(renderer, { 
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: GUIOvelayElement } 
    })

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

    var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    reticle = new THREE.Mesh(new THREE.RingBufferGeometry(0.15, 0.2, 32).rotateX(-Math.PI/2), new THREE.MeshBasicMaterial());
    reticle.matrixAutoUpdate = false; // wenn false ändert position, rotation etc properties die matrix propertie nicht automatisch
    reticle.visible = false;
    scene.add(reticle);
    //reticle.add(new THREE.AxesHelper(0.5));

    controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect);
    scene.add(controller);
    //scene.add(new THREE.AxesHelper(1));
}

function onWindowResize() {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onSelect() {
    // called on camera/screen tap
}

function placePainting() {
    let ok = reticle.visible
    if(ok) {
        painting = new Painting();
        painting.position.setFromMatrixPosition(reticle.matrix);
        painting.rotation.setFromRotationMatrix(reticle.matrix);

        scene.add(painting);
        reticle.visible = false
    }
    return ok
}

function removePainting(){
    if(painting) scene.remove(painting)
    painting=null
}


let quat = new Quaternion()
let euler = new Euler()
let aX = new Vector3()
let aY = new Vector3()
let aZ = new Vector3()
let yUp = new Vector3(0,1,0)
let xUp = new Vector3(1,0,0)
let i = 0

function render(timestamp, frame) {
    if(XROnOffCallback) XROnOffCallback(!!frame);

    if(frame){
        clearDebugLog()
        i++

        if(!painting){
            var referenceSpace = renderer.xr.getReferenceSpace();
            var session = renderer.xr.getSession();

            // init hittest on vr enter
            if (hitTestSourceRequested === false) {
                session.requestReferenceSpace('viewer').then(function (referenceSpace) {
                    session.requestHitTestSource({ space: referenceSpace }).then(function (source) {
                        hitTestSource = source;
                    });
                });
                session.addEventListener('end', function () {
                    hitTestSourceRequested = false;
                    hitTestSource = null;
                });
                hitTestSourceRequested = true;
            }

            if (hitTestSource) {
                var hitTestResults = frame.getHitTestResults(hitTestSource);
                if (hitTestResults.length) {
                    var hit = hitTestResults[0];
                    reticle.visible = true;
       
                    reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix);
                    
                    reticle.matrix.extractBasis(aX, aY, aZ)
                    let alpha = Math.asin(aX.dot(yUp)) // assumes that both vec3`s are normalized

                    if(Math.abs(alpha) > 0.17){
                        let m = new Matrix4()
                        m.makeRotationY(Math.PI+alpha)
                        reticle.matrix.multiply(m)                    
                    }
                } else {
                    reticle.visible = false;
                }
            }
        }
    }
    renderer.render(scene, camera);
}



function createDebugGUI(){
    let div = document.createElement("div")
    div.id = "debuginfo"
    div.style.color = "black"
    div.style. backgroundColor = "rgba(255, 255, 255, 0.6)"
    document.body.append(div)
    window.onerror = (error, url, line) => debugLog(error)
}
function debugLog(s){
    let e = document.querySelector("#debuginfo")
    if(e) e.innerHTML = document.querySelector("#debuginfo").innerHTML += s + "<br>"
}
function clearDebugLog(){
    let e = document.querySelector("#debuginfo")
    if(e) e.innerHTML = ""
}
function clickXRButton(){
    arbutton.click()
}

var XROnOffCallback
function registerXROnOffCallback(callback){
    XROnOffCallback = callback
}

export {
    createSession,
    clickXRButton,
    registerXROnOffCallback,
    placePainting,
    removePainting,
}

