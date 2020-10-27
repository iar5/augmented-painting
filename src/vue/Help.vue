<template>
    <div id="help">
        <h2>FAQ</h2>

        <h3>Description</h3>
        <div>
            <p>
            Painting Placer requires the webxr api which is a pretty new technology, only supported by latest mobile devices and latest browser versions. 
            If your device comply with the requirements and the website is completly loaded, there should appear a button to start the application.
            By <a href="https://tomwendland.de/">Tom Wendland</a>
            </p>
        </div>

        <h3>Supported Devices</h3>
        <div v-if="!$root.isArSupported && $root.isIOS">
            <p>
                <br>
                <span style="text-decoration: underline;">Sorry</span>,
                unfortunately most iPhone and iPad browser did not implement the webxr standard yet.
                Since so, we suggest to use the WevXR Viewer browser by Mozilla. 
                You can <a href="https://apps.apple.com/us/app/webxr-viewer/id1295998056">download it from you App Store</a>
            </p>
        </div>

        <h3>Contact</h3>
        <div>
            <p>App development<a href="https://tomwendland.de">Tom Wendland</a></p>
            <p>Drawing artist<a href="https://www.instagram.com/dion.ateliero/">DION</a></p>
        </div>
    </div>
</template>



<style scoped lang="scss">

h3{
    font-family: Prata;
}
p, a{
    font-family: sans-serif;
    font-size: 0.8em
}
</style>