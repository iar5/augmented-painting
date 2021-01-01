<template>
    <div id="contact"> 
        <h2>Contact</h2>

        <section>
            <p>Paintings by <a class="underline" href="https://www.instagram.com/dion.ateliero/">DION</a></p>
            <br>
            <p>Webapp development by <a class="underline" href="https://tomwendland.de">Tom Wendland</a></p>
        </section>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#contact{
    width: 90%;
    margin: auto
}
p, a{
    font-size: 0.8rem;
    text-align: justify;
}
#contact{
    box-sizing: border-box;
    height: 100%;


    section{
        margin-top: 20px;
        width: 100%;

        p{
            text-align: center;
        }
    }
}
</style>
