import * as THREE from 'three'
import paintingsData from './../../public/fotos/data.json'

var texLoader = new THREE.TextureLoader();
texLoader.setPath( '/' );

function findPaintingData(id){
    for(let p of paintingsData){
        if(p.id == id) return p
    }
}

export default class Painting extends THREE.Object3D{

    constructor(id){
        super()

        let data = findPaintingData(id)
        let w = parseInt(data.width)/100
        let h = parseInt(data.width)/100

        let sidematerial = new THREE.MeshBasicMaterial({color: "#EEEEEE"})

        let materials = [
            sidematerial.clone(),
            sidematerial.clone(),
            new THREE.MeshBasicMaterial({map: texLoader.load(data.src_full)}),
            sidematerial.clone(),
            sidematerial.clone(),
            sidematerial.clone(),
        ];
        let geometry = new THREE.BoxBufferGeometry(w, 0.1, h).translate(0, -0.05, 0)
        let mesh = new THREE.Mesh(geometry, materials)
        this.add(mesh)


        //let spgeo = new THREE.PlaneBufferGeometry(w*1.1, h*1.1)
        //let spmat = new THREE.MeshBasicMaterial({color: "#CCCCCC"})
        //let shadowplane = new THREE.Mesh(spgeo, spmat)
        //this.add(shadowplane)
    }
}
