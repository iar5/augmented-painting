<template>
  <header>
    <h1>Painting Placer</h1>
    <nav>
        <ul>
          <li v-for="(route, i) in routen" :key="i" >
            <a> {{ route.title }}</a>
          </li>
        </ul>
    </nav>  
    <ArButton id="enterBtn"/>
  </header>
</template>

<script>
import ArButton from './ArButton.vue'

export default {
  components: {
    ArButton,
  },
  data(){
    return {
      routen: [
        {title: "A"},
        {title: "B"},
        {title: "C"},
      ],
      currentRouteName: ""
    }
  }
}
</script>

<style scoped lang="scss">
header{
  padding: 1%;
  padding-top: 3%;
  padding-bottom: 20px;
  margin-bottom: 3%;
  
  h1, nav, ul, li {
    display: inline-block;
  }
  
  h1{
    font-size: 2.5em;
    margin-right: 50px;
    margin-bottom: 10px;
  }
  nav{
    ul{
      padding: 0;
      margin: 0;
      li{
        padding-right: 25px;
        a{
          font-size: 1.2em;
          &.highlightA{
            color: rgb(255, 115, 0);
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