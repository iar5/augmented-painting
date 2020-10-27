<template>
  <div id="landing">
    <div id="lcontent1">
      <p>Welcome</p>
      <p>to Painting Placer</p>
      <p>This website is using your camera to dislpay paintings on your living room wall</p>
      <p>
        by <a href="https://tomwendland.de">Tom Wendland</a> &#38;
        <a href="https://www.instagram.com/dion.ateliero/">DION</a>
      </p>
      <p>Swipe to browser paintings</p>
      <p></p>
    </div>
  </div>
</template>


<script>
export default {
}
</script>


<style coped lang="scss">
#landing{
  font-family: sans-serif;
  font-weight: normal;

  display: grid;
	place-items: center;
	width: 100%;
  height: 100vh;
  animation: 3s fadeInAnimation ease-in-out; 

  text-align: center;

  #lcontent1{
    vertical-align: middle;
    max-width: 350px;
    padding-bottom: 100px;

    h1{
      font-weight: 100;
    }
    p { 
      font-size: 0.8em;
    }
  }
}

@keyframes fadeInAnimation { 
    0% { opacity: 0; } 
    100% { opacity: 1; } 
}
</style>