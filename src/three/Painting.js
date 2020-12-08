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
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( { map: texLoader.load(data.src_full) } ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
            new THREE.MeshBasicMaterial( {color: "white"} ),
        ];
        var geometry = new THREE.BoxBufferGeometry(parseInt(data.width)/100, 0.1, parseInt(data.height)/100).translate(0, -0.05, 0)

        super(geometry, materials)
    }
}