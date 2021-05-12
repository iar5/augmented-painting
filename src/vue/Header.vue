<template>
  <header :class="showNav ? 'showNav': ''" >

    <div id="headerbg" @click="showNav = false"></div>

    <div id="headercontent">
      <div id="headerline">
        <div @click="showNav = !showNav" class="pointer">
          {{showNav ? "×" : "="}}</div>
        <h1><router-link to="/">Painting Place | AR</router-link></h1>
        <!--div class="pointer"><img src="/assets/aricon.png" @click="openXR()"></div-->
      </div>

      <nav>
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
        {title: "Browse Paintings", path: "/"},
        {title: "Showcase", path: "/guide"},
        {title: "Help", path: "/help"},
        {title: "Contact", path: "/contact"},
        {title: "Custom AR Painting", path: "/custom"},
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
  height: 75px;
  font-weight: normal;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  #headerbg{
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
  }

  #headercontent{ // extra container damit nicht z indizieren für bg muss
    width: 100%;
    position: absolute;
    top: 0;
    transition: opacity 1s;

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
  

header{
  &, * {
    transition: all 0.5s;
  }
  #headerbg{
    opacity: 0;
    display: none
  }
  #headerline{
    background-color: rgba(255, 255, 255, 0.9);
  }
  nav{
    opacity: 0;
    display: none
  }
}

header.showNav{
  #headerbg{
    display: initial;
    opacity: 1;
  }
  #headerline{
    background-color: white
  }
  nav{
    display: inline-block;
    opacity: 1;
    background-color: white
  }
}
</style>