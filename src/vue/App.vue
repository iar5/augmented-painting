<template>
  <div id="app">
    <Header v-show="showHeader"/>
    <div id="headerPlaceholder"></div>
    <main>
      <swiper @slideChange="onSlideChange">
        <swiper-slide><Landing/></swiper-slide>
        <swiper-slide><PaintingList/></swiper-slide>
        <swiper-slide><Help/></swiper-slide>
      </swiper>
    </main>
    <ArControler/>
  </div>
</template>

<script>
import Header from './Header.vue'
import PaintingList from './PaintingList.vue'
import Landing from './Landing.vue'
import Help from './Help.vue'
import ArControler from './ArControler.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'App',
  components: {
    Header,
    PaintingList,
    Landing,
    Help,
    ArControler,
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      showHeader: false,
    }
  },
  methods: {
    onSlideChange(e){
      this.showHeader = e.activeIndex != 0
    }
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
  height: 100%;
}

#headerPlaceholder{
  // weil header sticky bzw absolute ist er aus dom flus raus
  height: 13%
}
main{
  height: 87%;

  .swiper-wrapper, .swiper-container{
    width: 100%;
    height: 100%;
  }
}


</style>
