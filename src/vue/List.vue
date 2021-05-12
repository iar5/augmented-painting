<template>
  <div>
    <div id="topInfo" :style="{'opacity': infoOpacity}">
      <p v-if="arWorking===true">Click on a painting to start augmented reality</p>
      <p v-else-if="arWorking===false">Your current browser does not support required technology. Checkout <br> <router-link class="underline pointer" to="/help">help/supported-devices</router-link> section on how to fix it.</p>
    </div>

    <div id="paintings">
      <div :style="{opacity: p._loaded ? 1 : 0}" class="painting" v-for="p in paintings" :key=p.id :class="p.width > p.height ? 'breitBild' : ''"  @click="openXRWithPainting(p)">
        <img :src="p.src_720" :width="p.width" :height="p.height" @load="p._loaded=true">
        <p class="title">{{p.title}}</p>
        <p class="info">{{p.width}} × {{p.height}}</p>
        <p class="info">{{p.publishing_date}}</p>
        <p class="info">{{p.material}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const paintings = require('./../../public/fotos/data.json')
paintings.forEach(element=>{
  element._loaded = false
})


export default {
  data(){
    return {
      arWorking: undefined,
      paintings,
      infoOpacity: 1
    }
  },
  mounted(){
    window.onscroll = () => {
      let s = document.body.scrollTop || document.documentElement.scrollTop
      this.infoOpacity = 1-(s/60)
    }
    this.$root.$data.arApp.isArWorking((ok)=>{
        this.arWorking = ok
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
    openXRWithPainting(p){
      if(this.$root.$data.isArWorking) {
        this.$root.$data.arApp.openXR()
        this.$root.$data.arApp.setPainting(p.src_full, p.width, p.height)
      }
    }
  }
}
</script>

<style scoped lang="scss">

#topInfo{
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  p{
    font-size: 0.6rem;
    margin-top: 50px ;
    margin-bottom: 50px;
    max-width: 80%;
    display: inline-block;
  }
}

#topInfo-sorry{
  font-weight: bold;
  font-family: 'Prata';
}


#paintings{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;

  .painting{
    margin-bottom: 40px;
    width: 45%;
    transition: opacity 1s;

    &.breitBild{
      width: 63%;
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