<template>
    <div id="custom">

        <h2>Custom painting</h2>
        
        <div id="custom-panel">
            <div id="custom-imgholder">
                <img id="custom-img">
            </div>
            <label id="file-upload">
                <input id="file-upload-input" type="file" accept="image/png, image/jpeg">
                <input id="file-upload-btn" type="button" class="btn" value="Select a image">
            </label>
            
            <label class="customwh">
                <span>Width</span>
                <input type="number" id="custom-width" disabled placeholder="cm">
            </label>
            <label class="customwh">
                <span>Height</span>
                <input type="number" id="custom-height" disabled placeholder="cm">
            </label>

            <input type="button" id="startcustombtn" class="btn" disabled value="Start Augmented Reality">

            <p v-if="arWorking===false" id="customError">Your current browser does not support required technology. Checkout <br> <router-link class="underline pointer" to="/help">help/supported-devices</router-link> section on how to fix it.</p>
        </div>

    </div>
</template>


<script>
export default {
    data(){ 
        return {
            arWorking: undefined,
        }
    },
    mounted() {
        let imgEl = document.getElementById("custom-img")

        let uploadEl = document.getElementById("file-upload-input")
        uploadEl.addEventListener("change", (e) => {
            imgEl.src = URL.createObjectURL(uploadEl.files[0]);
            cw.disabled = false
            ch.disabled = false
            cw.value = ""
            ch.value = ""
        }, false);     
        
        const cw = document.getElementById("custom-width")
        const ch = document.getElementById("custom-height")
        cw.addEventListener("input", () => {
            let v = parseFloat(cw.value) * imgEl.naturalHeight/imgEl.naturalWidth 
            ch.value = Math.round(v*10)/10
            startbtn.disabled = false
        })
        ch.addEventListener("input", () => {
            let v = parseFloat(ch.value) * imgEl.naturalWidth/imgEl.naturalHeight 
            cw.value = Math.round(v*10)/10
            startbtn.disabled = false
        })

        const startbtn = document.getElementById("startcustombtn")
        startbtn.addEventListener("click", () => {
            let w = parseFloat(cw.value)
            let h = parseFloat(ch.value)

            if(this.$root.$data.isArWorking) {
                this.$root.$data.arApp.openXR()  
                this.$root.$data.arApp.setPainting(imgEl.src, w, h)
            }     
        })

        this.$root.$data.arApp.isArWorking((ok)=>{
            this.arWorking = ok
            if(ok == false){
                document.getElementById("file-upload-btn").disabled = true
            }
        })
    }
}
</script>



<style scoped lang="scss">

#custom-panel{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    >*{
        margin-bottom: 10px;
        max-width: 200px;
        width: 100%;
        box-sizing: border-box;
    }


    #custom-imgholder{
        img{
            object-fit: cover;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }

    #file-upload{
        margin-bottom: 20px;
        input[type="file"]{
            display: none;
        }
        p{
            border: 1px solid grey;
            padding: 4px 12px;
            border-radius: 4px;
            vertical-align: center;
            text-align: center;
        }
    }

    .customwh{
        margin-top: 5px !important;
        margin-bottom: 5px !important;
        span{
            display: inline-block;
            width: 60px;
        }
        input{
            display: inline-block;
            width: calc(100% - 60px);
            box-sizing: border-box;
        }
    }
}

.btn{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: auto;
    border: 1px solid grey;
    background: white;
    text-align: center;
    padding: 4px 8px;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
}


#customError{
    margin-top: 20px; 
    font-size: 0.8rem;
    &, * { color: red }
}
</style>