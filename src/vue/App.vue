<template>
  <div id="app">
    <Header/>
    <div id="headerPlaceholder"></div>
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
}
h3{
  font-size: 1rem;
}

a{
  color: black;
}
</style>
