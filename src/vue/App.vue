<template>
  <div id="app">
    <Header/>
    <div id="headerPlaceholder"></div>
    <main>
      <router-view></router-view>
    </main>
    <ArControler/>
    <div id="bgShadow"></div>
    <p id="beta">beta version</p>
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
  box-sizing: border-box;
  min-height: 100vh;
}

#headerPlaceholder{
  height: 75px  // weil header sticky bzw absolute ist er aus dom flus raus
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
  font-family: sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
h3{
  font-size: 1rem;
  font-family: sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}

a{
  color: black;
}

#bgShadow{
  position: fixed;
  top: 0;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.21);
  z-index: -100;
  pointer-events: none;
}	

#beta{
  font-family: sans-serif;
  font-size: 0.6rem;
  position: fixed;
  left: 0; 
  bottom: 0;
  padding: 2px;
  margin: 1%;
  background-color: rgba(255,255,255, 0.4);
  color: black;
  border: 1px solid  black;
}
</style>
