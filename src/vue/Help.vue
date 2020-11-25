<template>
    <div id="help">

        <h2>Help</h2>

        <section>
            <h3>Description</h3>
            <p>
                Painting Placer is an augmented reality web app which brings paintings into your room through your mobile device camera. 
                First it needs to detect your room structure sparely. When you see a reticle, this part of your room is successfully tracked an you can place the painting!
                While you can move in you room, the position of the painting will remain and you can take a look from different perspectives and hopefully it will fit perfectly into you interior.
            </p>
        </section>

        <section>
            <h3>Supported devices</h3>
            <p>
                Using augented reality directly in the browser requires a modern mobile device with latest browser versions.
                In detail: your need a browser which implemnted the WebXR standard, which can be seen as pretty new software technologie.  
            </p>
            <p>
                <span style="font-weight: normal">Unfortunately Painting Placer is not working on common Apple device browsers yet. </span>
                Until its working there in Safari, Chrome or Firefox I suggest using the WevXR Viewer browser by Mozilla. 
                You can <a href="https://apps.apple.com/us/app/webxr-viewer/id1295998056">download it from your App Store</a>.
            </p>
        </section>
    </div>
</template>



<style scoped lang="scss">
p, a{
    font-family: sans-serif;
    font-size: 0.8rem;
    text-align: justify;
    font-weight: light;
}

#help{
    position: relative;

    section{
        margin-top: 20px;
        h3{
            margin-bottom: 5px;
            font-family: Prata;
        }
    }

    a{
        color: initial !important;
        text-decoration: underline;
    }
}



</style>