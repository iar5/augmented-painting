<template>
    <div id="arOverlay" :class="isInsideAr ? 'isInsideAr' : ''">
        <div id="tipps">
            <!--p>Bewege zuerst die Kamera im Raum, um diesen zu scannen</p-->
        </div>

        <input type="button" id="exit" value="✕" @click="exit">
        <div id="controlPanel">
            <input type="button" id="prev" value="prev">
            <input type="button" id="place" @click="place" value="place">
            <input type="button" id="next" value="next">
        </div>
    </div>
</template>

<script>
import ArApp from '../three/App.js'

export default {
    data(){
        return {
            isInsideAr: false
        }
    },
    mounted(){
        let overlay = document.querySelector("#arOverlay")
        this.$root.$data.arApp = new ArApp(overlay, (isInsideAr) => {
            this.isInsideAr = isInsideAr
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
#arOverlay{
    visibility: hidden;
    &.isInsideAr{
        visibility: visible; // mit v-show klappt nicht richtig
    }

    #exit{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
    }

    #controlPanel{ 	
        position: absolute;	
        bottom: 20px;
        display: flex;
        position: absolute;
        bottom: 20px;
        width: 100%;
        align-items: center;
        justify-content: center; 

        #place{
            width: 160px;
        }
    }

    #exit{
        background: none;
        overflow: visible;
    }

    input[type=button]{
        padding: 8px 20px; 
        margin: 2px;
        border: 0; 
        background: rgba(0, 0, 0, 0.4); 
        color: white; 
        font: 13px sans-serif; 
        text-align: center; 
        opacity: 0.5; 
        outline: none; 
        text-transform: uppercase;
        border-radius: 0 !important;
        cursor: pointer;
        z-index: 100;
    }
}
</style>