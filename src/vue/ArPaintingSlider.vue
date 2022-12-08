<template>
  <div id="arPaintingSlider">
      <!-- <swiper :options="swiperOption" @slideChange="onSlideChange">
        <swiper-slide v-for="p of paintings" :key="p.id">
            <img :src="p.src_720" :width="p.width" :height="p.height">
        </swiper-slide>
      </swiper> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'

export default {
    // components:{
    //     Swiper,
    //     SwiperSlide
    // },
    data(){
        return{
            paintings: require('./../../public/fotos/data.json'),
            swiperOption: {
                slidesPerView: 3,
                slidesPerColumn: 1,
                spaceBetween: 10,
                centeredSlides: true,
            }
        }
    },
    methods:{
        onSlideChange(){

        }
    }
}
</script>

<style scoped lang="scss">
#arPaintingSlider{
    display: block;
    width: 100%;
    //background: rgba(0, 0, 0, 0.2); 
}


</style>