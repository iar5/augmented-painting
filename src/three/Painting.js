import * as THREE from 'three'

const texLoader = new THREE.TextureLoader();

export default class Painting extends THREE.Group{

    constructor(src, width, height){
        super()
        height = parseFloat(height)/100
        width = parseFloat(width)/100

        const paintingMats = [
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {map: texLoader.load(src)} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
        ];

        const d = (width+height)/40
        const paintingGeo = new THREE.BoxBufferGeometry(width, d, height).translate(0, d / 2, 0)
        const paintingMesh = new THREE.Mesh(paintingGeo, paintingMats)
        this.add(paintingMesh)

        const shadowMat = new THREE.MeshBasicMaterial({ color: "black", transparent: true, opacity: 0.2 })
        const shadowGeo = new THREE.PlaneBufferGeometry(width * 1.02, height * 1.02).rotateX(THREE.MathUtils.degToRad(-90))
        const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat)
        this.add(shadowMesh)
    }
}