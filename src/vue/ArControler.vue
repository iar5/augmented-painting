<template>
    <div id="arControler" v-show="showGUI">
        <div id="arOverlay">
            <input type="button" id="exit" value="✕" @click="exit">

            <div id="moveTipp">
                <img src="/assets/s9icon.svg">
                <span>move your smartphone slightly around <br> to scan the room</span>
            </div>

            <div id="bottomUpPanel">
                <!--ArPaintingSlider/-->

                <div id="buttonPane">
                    <input type="button" id="placeBtn" value="place">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArApp from '../three/App.js'
import ArPaintingSlider from './ArPaintingSlider.vue'

/**
 * Idee: wenn man painting platziert hat kann man rauf drücken (raycast) dann öffnet sich menu wo man das nochmal auswechseln kann, verschieben und infos angezeigt werden
 */

export default {
    components:{
        ArPaintingSlider
    },
    data(){
        return {
            showGUI: false
        }
    },
    mounted(){
        console.log("WebXR controler created")

        this.$root.$data.isInsideAr = false
        this.$root.$data.arApp = new ArApp(document.querySelector("#arOverlay"))
        this.$root.$data.arApp.isArWorking((ok)=>{
            this.$root.$data.isArWorking = ok
        })
        this.$root.$data.arApp.setOpenCloseCallback(insideXR => {
            this.showGUI = insideXR
            if(insideXR == false) placeBtn.value = "place"
        })


        const arApp =  this.$root.$data.arApp 

        const moveTipp = document.getElementById("moveTipp")
        arApp.setOnFirstReticleCallback(()=>{
            moveTipp.classList.add("hideTipp")
        })

        const placeBtn = document.getElementById("placeBtn")
        placeBtn.addEventListener("click", ()=>{
            let p = arApp.isPaintingPlaced() 
            let r = arApp.isReticle() 

            if(p){
                arApp.removePainting()
                placeBtn.value = "place"
            }
            else if(!p && r){
                arApp.placePainting()
                placeBtn.value = "reset"
            }
        })
    },
    methods:{
        exit(){
            this.$root.$data.arApp.closeXR()
        }
    }
}
</script>

<style scoped lang="scss">
/* #arControler{
    visibility: hidden;
    &.isInsideAr{
        // visibility: visible; // mit v-show klappt nicht richtig
    }
}*/

#arOverlay{
    #exit{
        position: absolute;
        font-size: 1.2rem;
        right: 15px;
        top: 15px;
        background: none;
        overflow: visible;
        border: none;
    }

    #bottomUpPanel{ 	
        position: absolute;	
        bottom: 20px;
        width: 100%;
        text-align: center;

        #buttonPane{
            display: flex;
            align-items: center;
            justify-content: center; 
        }
    }

    #place{
        width: 160px;
        border: 1px solid white
    }

    input[type=button]{
        padding: 8px 20px; 
        margin: 2px;
        background: transparent;
        color: white; 
        font-family: 13px; 
        text-align: center; 
        outline: none; 
        text-transform: uppercase;
        border: 1px solid white; 
        border-radius: 0 !important;
        cursor: pointer;
        z-index: 100;
        display: inline-block;
    }
}

#moveTipp{
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .9;
    transition: 0.3s opacity;
    text-align: center;

    &.hideTipp{
        opacity: 0
    }

    >span{
        display: inline-block;
        width: 500px;
        color: white;
        font-size: 0.8rem;
    }

    >img{
        width: 30px;
        display: inline-block;
        animation: moveAnimation 8s infinite linear;

        @keyframes moveAnimation {
            0% {  transform: translateX(0px)    }
            25%   {  transform: translateX(-30px) }
            50%   {  transform: translateX(0) }
            75%   {  transform: translateX(30px) }
            0%   {  transform: translateX(0) }
        }
    }
}
</style>