<template>
  <div id="landing">
    <p id="f1">good to see you!</p>
    <p id="f2">this website is using your camera to dislpay paintings <br>on your living room wall</p>
    <p id="f3">in Augmented Reality.</p>
    <div id="landingBoxes">
      <div><div><p>use directly augmented reality</p></div></div>
      <div><div><p>browser paintings first</p></div></div>
    </div>
    <!--p id="f4">... tap to browse paintings ツ</p-->
  </div>
</template>




<style coped lang="scss">
#landing{
  position: relative;
	width: 100%;
  height: 100%;
  animation: 3s fadeInAnimation ease-in-out; 
  font-family: Prata;
  vertical-align: middle;
  text-align: center;


  #f1{
    padding-top: 23vh;
    font-size: 2rem;
  }
  #f2{
    margin-top: 20px;
    font-size: .8rem;
  }
  #f3{
    margin-top: 20px;
    font-size: 1.2rem;
  }
  #f4{
    font-size: .8rem;
    position: absolute;
    bottom: 20px;
    width: 100%;
  }

  #landingBoxes{
    width: 100%;
    margin-top: 60px;
    >div{
      width: 110px;
      height: 110px;
      border: 1px solid black;
      vertical-align: middle;
      text-align: center;
      display: inline-block;
      >div{
        display: flex;
        height: 100%;
        p{
          margin: auto;
        }
      }
      &:nth-of-type(1){
        margin-right: 10px;
      }
    }
  }
}

@keyframes fadeInAnimation { 
    0% { opacity: 0; } 
    100% { opacity: 1; } 
}
</style>