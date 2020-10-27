<template>
  <header>

    <div v-show="showNav" id="headerbg" @click="showNav = false"></div>

    <div id="headercontent">
      <div id="headerline">
        <span @click="showNav = !showNav">=</span>
        <h1>Painting Placer</h1>
        <span @click="openXR()">AR</span>
      </div>

      <nav v-show="showNav">
        <ul>
          <li v-for="(n, i) in nav" :key="i" >
            <a href=""> {{ n.title }}</a>
          </li>
        </ul>
      </nav>  
    </div>

  </header>
</template>

<script>

export default {
  data(){
    return {
      nav: [
        {title: "splash screen"},
        {title: "help"},
        {title: "contact"},
      ],
      currentRouteName: "",
      showNav: false,
    }
  },
  methods:{
    openXR(){
      this.$root.$data.arApp.openXR()
    },
  }
}
</script>

<style lang="scss">
header{
  font-family: 'Prata', serif;
  font-weight: normal;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  #headerbg{
      background: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100%;
  }

  #headercontent{ // extra container damit nicht z indizieren für bg muss
    position: absolute;
    top: 0;
    width: 100%;

    #headerline{
      padding: 20px 0 20px; // kein margin weil sonst baxshade runter zieht
      background: white;

      >*{
        vertical-align: middle;
        text-align: center  
      }   
      span {
        display: inline-block;
        width: 10%;
      }
      h1{
        display: inline-block;
        width: 80%;
        font-size: 1.5em;
      }
    }

    nav{
      display: inline-block;
      width: 100%;
      text-align: center;
      background: white;

      ul{
        padding: 0 0 10px 0;
        li{
          a{
            font-size: 1em;
          }
        }
      }
    }
  }
}

#enterBtn{
  border-radius: 0;
}
  
</style>