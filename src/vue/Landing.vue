<template>
  <div id="landing">
    <p id="f1">good to see you!</p>
    <p id="f2">this website is using your camera to dislpay paintings <br>on your living room wall</p>
    <p id="f3">in Augmented Reality.</p>
    <p id="f4">... swipe to browser paintings :-)</p>
  </div>
</template>




<style coped lang="scss">
#landing{
  position: relative;
	width: 100%;
  height: 100vh;
  animation: 3s fadeInAnimation ease-in-out; 
  font-family: Prata;
  vertical-align: middle;
  text-align: center;

  #f1{
    padding-top: 40vh;
    font-size: 2.2rem;
  }
  #f2{
    margin-top: 20px;
    font-size: 1rem;
  }
  #f3{
    margin-top: 20px;
    font-size: 1.4rem;
  }
  #f4{
    margin-top: 100px;
    font-size: .8rem;
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
  
}

@keyframes fadeInAnimation { 
    0% { opacity: 0; } 
    100% { opacity: 1; } 
}
</style>