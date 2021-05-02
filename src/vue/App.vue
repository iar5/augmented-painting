<template>
  <div id="app">
    <!-- für crawler -->
    <div style="display: none">
      <p>View and place paintings in your home using augmented reality in the browser and see if you like them in the environment and position.</p>
    </div>
    <ArControler/>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
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
  display: flex;
  flex-flow: column;
}

@media (min-width: 500px){
  body{
    padding: 20px 0
  }
}

main{
  flex: 1;
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
  width: 100%;
  text-align: center;
  font-family: 'Prata', serif;
  margin-top: 20px;
  margin-bottom: 20px;
}

h3{
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}

</style>
