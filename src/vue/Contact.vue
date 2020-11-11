<template>
    <div id="contact"> 
        <h2>Contact</h2>

        <section>
            <h3>Artist</h3>
            <p><a href="https://www.instagram.com/dion.ateliero/">DION</a></p>
        </section>

        <section>
            <h3>Developer</h3>
            <p><a href="https://tomwendland.de">Tom Wendland</a></p>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
p, a{
    font-family: sans-serif;
    font-size: 0.8rem;
    text-align: justify;
    font-weight: lighter;

}
#contact{
    box-sizing: border-box;
    height: 100%;


    section{
        margin-top: 20px;
        h3{
            margin-bottom: 5px;
            font-family: Prata;
        }
    }

    img{
        position: absolute;
        bottom: 0;
    }
}
</style>