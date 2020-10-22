<template>
  <div id="app">
    <Header/>
    <main>
        <PaintingList/>
    </main>
    <footer></footer>
    <ArOverlay/>
  </div>
</template>

<script>
import Header from './Header.vue'
import PaintingList from './PaintingList.vue'
import ArOverlay from './ArOverlay.vue'

export default {
  name: 'App',
  components: {
    ArOverlay,
    Header,
    PaintingList
  },
  data(){
    return {
      isArSupported: undefined,
      isIOS: undefined
    }
  },
  created(){
    navigator.xr.isSessionSupported('immersive-ar').then(supported => {
      this.isArNotSupported = supported
    })

    this.isIOS = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
  }
}
</script>

<style lang="scss">
@import "/style/reset.css";
@import "/style/font.css";

html, body{
	width: 100%;
	height: 100%;
}
#app{
  position: relative;
  min-height: 100%;
  width: 100%;
  max-width: 500px;
  font-family: 'Prata', serif;
  font-weight: normal;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.21);
  box-sizing: border-box;
}
</style>
