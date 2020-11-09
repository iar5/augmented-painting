<template>
  <header>

    <div v-show="showNav" id="headerbg" @click="showNav = false"></div>

    <div id="headercontent">
      <div id="headerline">
        <div @click="showNav = !showNav" class="pointer">=</div>
        <h1>Painting Placer</h1>
        <div class="pointer"><img src="/assets/aricon.png" @click="openXR()"></div>
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
        {title: "about"},
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
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;

  #headerbg{
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
  }

  #headercontent{ // extra container damit nicht z indizieren für bg muss
    width: 100%;
    background: white;
    position: absolute;
    top: 0;

    #headerline{
      padding-top: 25px; // kein margin weil sonst baxshade runter zieht

      >*{
        vertical-align: middle;
        text-align: center  
      }   
      div{
        display: inline-block;
        width: 50px;

        img{
          width: 30px;
        }
      }
      h1{
        display: inline-block;
        width: calc(100% - 100px);
        font-size: 1.6em;
      }
    }

    nav{
      display: inline-block;
      width: 100%;
      text-align: center;

      ul{
        padding: 10px 0 10px 0;
        li{
          margin: 5px 0;
          a{
            font-size: 1em;
            color: black;
            text-decoration: none;
          }
        }
      }
    }
  }
}
  
</style>