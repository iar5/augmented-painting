<template>
  <div id="paintings">
    <div class="painting" v-for="p in paintings" :key=p.id :class="p.width > p.height ? 'breitBild' : ''"  @click="openXRWithPainting(p.id)">
      <img :src="p.src_720" :width="p.width" :height="p.height">
      <p class="title">{{p.title}}</p>
      <p class="info">{{p.width}} × {{p.height}}</p>
      <p class="info">{{p.publishing_date}}</p>
      <p class="info">{{p.material}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      paintings: require('./../../public/fotos/data.json')
    }
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
      this.$root.$data.arApp.openXR(pid)
    }
  }
}
</script>

<style scoped lang="scss">
#paintings{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;

  .painting{
    margin-bottom: 0;
    font-family: sans-serif;
    width: 40%;
    padding: 4%;

    &.breitBild{
      width: 57%
    }

    img{
      width: 100%;
      height: auto;
    }

    .title{
      font-size: 0.8rem;
      line-height: 20px;
      font-weight: bold;;
    }

    .info{
      font-weight: light;
      font-size: 0.8rem;
      line-height: 14px;
      color: rgba(0, 0, 0, .8)
    }
  }
}

</style>