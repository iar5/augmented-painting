import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton'
import { Vector3, Quaternion, Matrix4, Euler } from 'three'
import Painting from './Painting.js'
import ErrorGui from './ErrorGui.js'

/**
 * https://github.com/mrdoob/three.js/blob/master/examples/webxr_ar_hittest.html
 * https://github.com/immersive-web/webxr
 */


 /**
  * 
  * @param {DOMOElement} GUIOvelayElement 
  * @param {Callback?} XROnOffCallback 
  */
export default function(GUIOvelayElement, XROnOffCallback){
    
    var camera
    var scene 
    var renderer
    var arbutton
    var controller
    var reticle
    
    var isArRunning = false
    var default_pid = 0
    var painting = null
    
    new ErrorGui()
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;

    arbutton = ARButton.createButton(renderer, { 
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: GUIOvelayElement } 
    })

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

    var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light); // TODO brauch ich das?

    reticle = new THREE.Mesh(new THREE.RingBufferGeometry(0.15, 0.2, 32).rotateX(-Math.PI/2), new THREE.MeshBasicMaterial());
    reticle.matrixAutoUpdate = false; // wenn false ändert position, rotation etc properties die matrix propertie nicht automatisch
    reticle.visible = false;
    scene.add(reticle);
    //reticle.add(new THREE.AxesHelper(0.5));

    controller = renderer.xr.getController(0);
    controller.addEventListener('select', ()=>{
        // called on camera/screen tap
    });

    scene.add(controller);
    //scene.add(new THREE.AxesHelper(1));

    renderer.setAnimationLoop(render);




    function isInsideXR(){
        return isArRunning
    }

    function openXR(pid){
        removePainting()
        if(pid) default_pid = pid
        if(!isArRunning) {
            arbutton.click()
            if(XROnOffCallback) XROnOffCallback(true);
        }
    }

    function closeXR(){
        removePainting()
        if(isArRunning) {
            arbutton.click()
            if(XROnOffCallback) XROnOffCallback(false);
        }
    }

    function placePainting(pid = default_pid){
        if(!isArRunning) return
        
        let ok = reticle.visible
        if(ok) {
            painting = new Painting(pid);
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





    let aX = new Vector3()
    let aY = new Vector3()
    let aZ = new Vector3()
    let yUp = new Vector3(0,1,0)
    let xUp = new Vector3(1,0,0)
    var i = 0

    var hitTestSource = null
    var hitTestSourceRequested = false

    function render(timestamp, frame) {

        isArRunning = !!frame

        if(isArRunning){
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


    return {
        isInsideXR,
        openXR,
        closeXR,
        placePainting,
        removePainting,
    }
}


