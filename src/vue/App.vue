<template>
  <div id="app">
    <Header/>
    <main>
      <swiper :slides-per-view="2" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide><Landing/></swiper-slide>
        <swiper-slide><PaintingList/></swiper-slide>
      </swiper>
    </main>
    <Footer/>
    <ArControler/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import PaintingList from './PaintingList.vue'
import Landing from './Landing.vue'
import ArControler from './ArControler.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
// https://swiperjs.com/vue/

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PaintingList,
    Landing,
    ArControler,
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      isArSupported: undefined,
      isIOS: undefined,
    }
  },
  created(){
    navigator.xr.isSessionSupported('immersive-ar').then(supported => {
      this.$root.$data.isArNotSupported = supported
    })
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
}
</script>

<style lang="scss">
@import url("/style/components.css");

html, body{
	width: 100%;
	height: 100%;
}
#app{
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.21);
  box-sizing: border-box;
  min-height: 100%;
  overflow-x: hidden;
}
main{
  height: 100%;
}
</style>
