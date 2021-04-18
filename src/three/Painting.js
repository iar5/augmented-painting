import * as THREE from 'three'

const texLoader = new THREE.TextureLoader();

export default class Painting extends THREE.Mesh{

    constructor(src, width, height){

        console.log(src);

        var materials = [
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( { map: texLoader.load(src) } ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
        ];
        var geometry = new THREE.BoxBufferGeometry(parseInt(width)/100, 0.1, parseInt(height)/100).translate(0, -0.05, 0)

        super(geometry, materials)
    }
}