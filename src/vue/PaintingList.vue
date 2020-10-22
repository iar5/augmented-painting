<template>
  <div id="paintings">
    <div class="painting" v-for="p in paintingdata" :key=p.id>
      <img :src="p.src_720">
      <p class="title">{{p.title}}</p>
      <p class="info">{{p.width}} × {{p.height}}</p>
      <p class="info">{{p.publishing_date}}</p>
      <p class="info">{{p.material}}</p>
    </div>
  </div>
</template>

<script>
import paintingdata from './../../public/fotos/data.json'

export default {
  data(){
    return {
      paintingdata
    }
  },
}
</script>

<style scoped lang="scss">
#paintings{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .painting{
    width: 48%;
    margin-bottom: 30px;
    font-family: sans-serif;

    img{
      max-width: 100%;
      max-height: 100%;
    }

    .title{

    }
    .info{
      font-weight: light;
      font-size: 0.8em;
      color: rgba(0, 0, 0, .8)
    }
  }
}

</style>