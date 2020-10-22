<template>
  <div id="welcomePage">
    <div id="welcomeContent">
      <h2>Dion Painting Placer</h2>
      <p>Welcome</p>
      <div>
        <p>
          This augmented reality application requires the webxr api which is a pretty new technology, only supported by latest mobile devices and latest browser versions. 
          If your device comply with the requirements and the website is completly loaded, there should appear a button to start the application.
          By <a href="https://tomwendland.de/">Tom Wendland</a>
        </p>
      </div>

      <div v-if="!$root.isArSupported && $root.isIOS">
          <p>
            <br>
            <span style="text-decoration: underline;">Sorry</span>,
            unfortunately most iPhone and iPad browser did not implement the webxr standard yet.
            Since so, we suggest to use the WevXR Viewer browser by Mozilla. 
            You can <a href="https://apps.apple.com/us/app/webxr-viewer/id1295998056">download it from you App Store</a>
          </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
}
</script>


<style coped lang="scss">
#welcomePage{
  font-family: 'Prata', serif;
  font-weight: normal;

  display: grid;
	place-items: center;
	width: 100%;
  height: 100%;
  animation: 3s fadeInAnimation ease-in-out; 

  #welcomeContent{
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