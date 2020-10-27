<template>
  <div id="app">
    <Header/>
    <main>
        <Landing/>
        <!--PaintingList/-->
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

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PaintingList,
    Landing,
    ArControler,
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
}
</script>

<style lang="scss">
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
}
main{
  height: 100%;
}
</style>
