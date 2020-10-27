<template>
    <div id="arOverlay" v-show="isInsideAr">
        <div id="exit" @click="exit">✕</div>
        <div id="tipps">
            <!--p>Bewege zuerst die Kamera im Raum, um diesen zu scannen</p-->
        </div>

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
      this.$root.$data.arApp = new ArApp(overlay, bool => {
          this.isInsideAr = bool
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

    #exit{
        position: absolute;
        right: 0;
        top: 0;
        color: white;
        margin: 10px;
        font-size: 20px;
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
            width: 150px;
        }
    }

    input[type=button]{
        padding: 12px 6px; 
        margin: 2px;
        border: 0; 
        background: rgba(0, 0, 0, 0.4); 
        color: rgb(255, 255, 255); 
        font: 13px sans-serif; 
        text-align: center; 
        opacity: 0.5; 
        outline: none; 
        text-transform: uppercase;
        border-radius: 0 !important;
    }
}
</style>