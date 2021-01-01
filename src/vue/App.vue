<template>
  <div id="app">
    <Header/>
    <div id="header-placeholder"></div>
    <main>
      <router-view></router-view>
    </main>
    <ArControler/>
  </div>
</template>

<script>
import Header from './Header.vue'
import ArControler from './ArControler.vue'

export default {
  name: 'App',
  components: {
    Header,
    ArControler,
  },
  data(){
    return {
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
@import url("../style/reset.css");
@import url("../style/font.css");
@import url("../style/components.css");


html, body{
	width: 100%;
	min-height: 100%;
}

#app{
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.21);
}

@media (min-width: 500px){
  body{
    padding: 20px 0
  }
}

#header-placeholder{
  height: 75px  // weil header sticky bzw absolute ist er aus dom flus raus und ich hier die höhe brauch um minheight 100vh zu berechnen
}

main{
  min-height: calc(100vh - 75px);
  padding: 0 4%;
  box-sizing: border-box;

  >div{
    min-height: inherit;
    box-sizing: border-box;
    height: inherit;
  }
}

h2{
  font-size: 1.4rem;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}

h3{
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}

</style>
