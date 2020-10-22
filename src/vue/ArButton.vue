<template>
  <input type="button" @click="enterArClick" value="enter AR">
</template>

<script>
export default {
    methods: {
        enterArClick(){
            require('../three/App.js').clickXRButton()
        } 
    }
}
</script>