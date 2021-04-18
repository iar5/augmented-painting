import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton'
import { Vector3, Quaternion, Matrix4, Euler } from 'three'
import Painting from './Painting.js'

/**
 * https://github.com/mrdoob/three.js/blob/master/examples/webxr_ar_hittest.html
 * https://github.com/immersive-web/webxr
 */


 /**
  * 
  * @param {DOMOElement} GUIOvelayElement 
  */
export default function(GUIOvelayElement){
    
    console.log("AR App created")

    var controller
    var reticle
    var isArRunning = false
    var painting = null

    var firstReticleFound = false

    var firstReticleCallback
    var XROnOffCallback



    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    renderer.setAnimationLoop(render);

    const arbutton = ARButton.createButton(renderer, {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay', 'dom-overlay-for-handheld-ar'],
        domOverlay: { root: GUIOvelayElement } 
    })

    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);


    const scene = new THREE.Scene();
    //scene.add(new THREE.AxesHelper(1));


    reticle = new THREE.Mesh(new THREE.RingBufferGeometry(0.15, 0.2, 32).rotateX(-Math.PI/2), new THREE.MeshBasicMaterial());
    reticle.matrixAutoUpdate = false; // wenn false ändert position, rotation etc properties die matrix propertie nicht automatisch
    reticle.visible = false;
    scene.add(reticle);
    //reticle.add(new THREE.AxesHelper(0.5));

    controller = renderer.xr.getController(0);
    controller.addEventListener('select', ()=>{
        // called on camera/screen tap
        placePainting() 
    });
    scene.add(controller);





    function isInsideXR(){
        return isArRunning
    }

    function openXR(){
        if(!isArRunning) {
            arbutton.click()
            if(XROnOffCallback) XROnOffCallback(true);
        }
    }

    function closeXR(){
        if(isArRunning) {
            arbutton.click()
            if(XROnOffCallback) XROnOffCallback(false);
        }
    }

    function setPainting(src, width, height){
        if(painting) removePainting()
        painting = new Painting(src, width, height);
    }

    function placePainting(){
        if(!isArRunning) return
        
        let ok = isReticle()
        if(ok) {
            painting.position.setFromMatrixPosition(reticle.matrix);
            painting.rotation.setFromRotationMatrix(reticle.matrix);

            scene.add(painting);
            reticle.visible = false
        }
        return ok
    }

    function removePainting(){
        scene.remove(painting)
    }

    function isPaintingPlaced(){
        if(painting){
            return painting.parent == scene
        }
        else return false
    }

    function isReticle(){
        return reticle.visible
    }


    let aX = new Vector3()
    let aY = new Vector3()
    let aZ = new Vector3()
    let yUp = new Vector3(0,1,0)
    let xUp = new Vector3(1,0,0)

    var hitTestSource = null
    var hitTestSourceRequested = false

    function render(timestamp, frame) {

        isArRunning = !!frame

        if(isArRunning){
            
            if (!isPaintingPlaced()){
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

                        if(!firstReticleFound){
                            firstReticleFound = true
                            if (firstReticleCallback) firstReticleCallback()
                        }
        
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
        openXR,
        closeXR,
        isInsideXR,
        isReticle,
        isPaintingPlaced,
        setPainting,
        placePainting,
        removePainting,
        setOnFirstReticleCallback(c){
            firstReticleCallback = c
        },
        isArWorking(c){
            navigator.xr.isSessionSupported('immersive-ar').then(supported => {
                 c(!!supported)
            })
        },
        setOpenCloseCallback(c){
            XROnOffCallback = c
        }
    }
}


