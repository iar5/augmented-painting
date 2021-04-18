

export default class PhoneErrorGui{

    constructor(){
        let div = document.createElement("div")
        div.id = "debuginfo"
        div.style.color = "black"
        div.style. backgroundColor = "rgba(255, 255, 255, 0.6)"
        document.body.append(div)
        window.onerror = (error, url, line) => {
            this.clear()
            this.log(error)
        }
    }

    log(s){
        let e = document.querySelector("#debuginfo")
        if(e) e.innerHTML = document.querySelector("#debuginfo").innerHTML += s + "<br>"
    }
    
    clear(){
        let e = document.querySelector("#debuginfo")
        if(e) e.innerHTML = ""
    }
}