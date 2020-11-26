<template>
  <div>
    <div id="topInfo">
      <p v-if="arWorking==false">Sorry your browser does <br>not support Augmented reality<br> checkout <router-link class="underline pointer" to="/help">help</router-link> section to see why</p>
      <p v-else-if="arWorking==true">Click on a painting to start augmented reality</p>
      <p v-else>?</p>
    </div>

    <div id="paintings">
      <div class="painting" v-for="p in paintings" :key=p.id :class="p.width > p.height ? 'breitBild' : ''"  @click="openXRWithPainting(p.id)">
        <img :src="p.src_720" :width="p.width" :height="p.height">
        <p class="title">{{p.title}}</p>
        <p class="info">{{p.width}} × {{p.height}}</p>
        <p class="info">{{p.publishing_date}}</p>
        <p class="info">{{p.material}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from 'three';
export default {
  data(){
    return {
      arWorking: undefined,
      paintings: require('./../../public/fotos/data.json')
    }
  },
  created(){
    navigator.xr.isSessionSupported('immersive-ar').then(supported => {
      this.arWorking = !!supported // supported
    })
  },
  methods: {
    filterPaintings(paintings, format){
      return paintings.filter((p)=>{
        switch(this.format){
          case "w": return p.width > p.height; 
          case "h": return p.width < p.height; 
          case "q": return p.width == p.height;
        }
      })
    },
    openXRWithPainting(pid){
      if(this.arWorking) this.$root.$data.arApp.openXR(pid)
    }
  }
}
</script>

<style scoped lang="scss">

#topInfo{
  width: 100%;
  display: flex;
  justify-content: center;
  display: inline-block;
  font-size: 0.6rem;
  text-align: center;
  margin: 15px 0 25px 0;

  p{
      padding: 12px;
      border-radius: 24px;
      display: inline-block;
      border: 1px solid black;
  }
}


#paintings{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;

  .painting{
    margin-bottom: 20px;
    width: 45%;
    padding: 2%;

    &.breitBild{
      width: 63%
    }

    img{
      width: 100%;
      height: auto;
    }

    .title{
      font-size: 0.6rem;
      line-height: 1.2rem;
      line-height: 20px;
      font-weight: bold;;
    }

    .info{
      font-weight: light;
      font-size: 0.6rem;
      color: rgba(0, 0, 0, .8)
    }
  }
}

</style>