<template>
  <header>

    <div v-show="showNav" id="headerbg" @click="showNav = false"></div>

    <div id="headercontent">
      <div id="headerline">
        <div @click="showNav = !showNav" class="pointer">=</div>
        <h1 class="underline">Painting Placer</h1>
        <div class="pointer"><img src="/aricon.png" @click="openXR()"></div>
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
  z-index: 10;

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