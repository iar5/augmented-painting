<template>
    <div id="arControler" :class="$root.$data.isInsideAr ? 'isInsideAr' : 'isInsideAr'">
        <div id="arOverlay">
            <input type="button" id="exit" value="✕" @click="exit">
        
            <div id="bottomUpPanel">
                <ArPaintingSlider/>

                <div id="buttonPane">
                    <input type="button" id="place" @click="place" value="place">
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
            
        }
    },
    mounted(){
        navigator.xr.isSessionSupported('immersive-ar').then(supported => {
            this.$root.$data.isArSupported = supported
        })

        this.$root.$data.arApp = new ArApp(document.querySelector("#arOverlay"), (isInsideAr) => {
            this.$root.$data.isInsideAr = isInsideAr
        })
    },
    methods:{
        place(){
            this.$root.$data.arApp.placePainting()
        },
        exit(){
            this.$root.$data.arApp.closeXR()
        }
    }
}
</script>

<style scoped lang="scss">
#arControler{
    visibility: hidden;
    &.isInsideAr{
        visibility: visible; // mit v-show klappt nicht richtig
    }
}

#arOverlay{
    #exit{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        background: none;
        overflow: visible;
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
    }

    input[type=button]{
        padding: 8px 20px; 
        margin: 2px;
        border: 0; 
        background: rgba(0, 0, 0, 0.2); 
        color: white; 
        font: 13px sans-serif; 
        text-align: center; 
        outline: none; 
        text-transform: uppercase;
        border-radius: 0 !important;
        cursor: pointer;
        z-index: 100;
        display: inline-block;
    }
}
</style>