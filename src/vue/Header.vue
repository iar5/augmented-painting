<template>
  <header>

    <div v-show="showNav" id="headerbg" @click="showNav = false"></div>

    <div id="headercontent" :style="showNav ? 'background-color: white': ''">
      <div id="headerline">
        <div @click="showNav = !showNav" class="pointer">=</div>
        <h1><router-link to="/">Painting Place | AR</router-link></h1>
        <!--div class="pointer"><img src="/assets/aricon.png" @click="openXR()"></div-->
      </div>

      <nav v-show="showNav">
        <ul>
          <li v-for="(n, i) in nav" :key="i" @click="showNav=false">
            <router-link :class="{'activeNavLink': isActiveNavLink(n.path)}" :to="n.path">{{n.title}}</router-link>
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
        //{title: "splash screen", path: "/splash"},
        {title: "browse paintings", path: "/"},
        //{title: "introduction", path: "/introduction"},
        {title: "help", path: "/help"},
        {title: "contact", path: "/contact"},
      ],
      currentRouteName: "",
      showNav: false,
    }
  },
  methods:{
    openXR(){
      this.$root.$data.arApp.openXR()
    },
    isActiveNavLink(route){
        return this.$route.path == route;
    },
    scrollToTop() {
        window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss">
header{
  font-weight: normal;
  width: 100%;
  position: sticky;
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
    //background: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;

    #headerline{
      padding-top: 35px; // kein margin weil sonst baxshade runter zieht
      padding-bottom: 20px;
      >*{
        vertical-align: middle;
        text-align: center  
      }   
      div{
        display: inline-block;
        width: 50px;

        img{
          width: 25px;
        }
      }
      h1{
        display: inline-block;
        width: calc(100% - 100px);
        font-size: 1.6em;
        font-family: 'Prata', serif;
      }
    }

    nav{
      display: inline-block;
      width: 100%;
      text-align: center;

      ul{
        padding: 0 0 20px 0;
        li{
          margin: 5px 0;
          a{
            font-size: 1em;
            color: black;
            text-decoration: none;
    
            //&.activeNavLink{}
          }
        }
      }
    }
  }
}
  
</style>