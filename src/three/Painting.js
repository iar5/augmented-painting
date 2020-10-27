import * as THREE from 'three'
import paintingsData from './../../public/fotos/data.json'

var texLoader = new THREE.TextureLoader();
texLoader.setPath( '/' );

function findPaintingData(id){
    for(let p of paintingsData){
        if(p.id == id) return p
    }
}

export default class Painting extends THREE.Mesh{

    constructor(id){
        let data = findPaintingData(id)
        var materials = [
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/xpos.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/xneg.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load(data.src_full) } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/yneg.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/zpos.png') } ),
            new THREE.MeshBasicMaterial( { map: texLoader.load('test/zneg.png') } )
        ];
        var geometry = new THREE.BoxBufferGeometry(1.2, 0.1, 1.5).translate(0, -0.05, 0)

        super(geometry, materials)
    }
}
