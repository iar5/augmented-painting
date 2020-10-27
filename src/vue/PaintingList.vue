<template>
  <div id="paintings">
    <div class="painting" v-for="p in paintings" :key=p.id @click="()=>openXRWithPainting(p.id)">
      <img :src="p.src_720" :width="p.width" :height="p.height" >
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
  justify-content: center;
  height: 100%;
  overflow-y: scroll;


  .painting{
    width: 44%;
    margin: 0 2%;
    margin-bottom: 30px;
    font-family: sans-serif;

    img{
      width: 100%;
      height: auto;
    }

    .title{
      font-size: 1rem;
    }

    .info{
      font-weight: light;
      font-size: 0.6rem;
      color: rgba(0, 0, 0, .8)
    }
  }
}

</style>