<template>
    <div id="introduction">

        <h2>Showcase</h2>
        
        <div id="guide">
            <div id="video-wrapper" :style="{opacity: videoloaded? 1 : 0}" >
                <video id="guide-video" :loaded="this.videoloaded=true" width="590px" height="1280px" controls muted>
                    <source src="/media/video1_1.mp4?sad" type="video/mp4">
                </video>
            </div>
            <div id="img-wrapper">
                <img src="/assets/s9handcenterbg.png" width="887px" height="887px">
            </div>
        </div>

    </div>
</template>


<script>
import { log } from 'three'

export default {
    data(){
        return {
            videoloaded: false
        }
    }
}
</script>



<style scoped lang="scss">
p, a{
    font-size: 0.8rem;
    text-align: justify;
    font-weight: lighter;
}

#introduction{

    #guide{
        height: calc(100vh - 175px); 
        max-height: 1000px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        #video-wrapper{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-content: center;
            transition: opacity 1s;

            video{
                height: 88%;
                width: auto;
                max-width: 100%;
                margin: auto;
                margin-top: 10px;
            }
        }

        #img-wrapper{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;

            img{
                object-fit: cover;
                width: auto;
                height: auto;
                min-width: 100%;
                min-height: 100%;
                box-sizing: border-box;
                pointer-events: none;
            }
        }
    }
}
</style>