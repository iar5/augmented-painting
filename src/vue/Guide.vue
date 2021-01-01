<template>
    <div id="introduction">

        <h2>Introduction by example</h2>
        
        <div id="video-wrapper">
            <video src="/media/video1.mp4" width="590px" height="1280px" controls muted></video>
        </div>
        <img src="/assets/s9handcenter.png" width="887px" height="887px">
    </div>
</template>



<style scoped lang="scss">
p, a{
    font-size: 0.8rem;
    text-align: justify;
    font-weight: lighter;
}

#introduction{
    position: relative;

    img{
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
        pointer-events: none;
    }

    #video-wrapper{
        position: absolute;
        bottom: 50px;
        display: flex;
        width: 100%;
        justify-content: center;

        video{
            width: 40%;
            height: auto;
        }
    }
}



</style>