import * as THREE from 'three'

var texLoader = new THREE.TextureLoader();
texLoader.setPath( '/' );

export default class Painting extends THREE.Mesh{

    // title, größe, beschreibung, preis, ...

    constructor(){

        var materials = [
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/xpos.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/xneg.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('fotos/2. Frau mit Mantel.jpg') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/yneg.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/zpos.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/zneg.png') } )
        ];
        var geometry = new THREE.BoxBufferGeometry(1.2, 0.1, 1.5).translate(0, -0.05, 0)

        super(geometry, materials)
    }
}
