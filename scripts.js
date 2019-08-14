const FRAMESIZE = 880;
createButton()
const containerDiv = document.createElement('div')
createContainer()

function createContainer(){
    containerDiv.classList.add('flex-container')
    containerDiv.setAttribute('style',`width: ${FRAMESIZE}px; height: ${FRAMESIZE}px`)
    for(let i = 0; i < 16; i++){
        for(let i = 0; i < 16; i++){
            const div = document.createElement('div')
            div.classList.add("box")
            div.addEventListener("mouseover", hover)
            containerDiv.appendChild(div)
        }
    }
    document.body.appendChild(containerDiv)
}

function clearAndNew(){
    containerDiv.childNodes.forEach(div => {
        div.style.background = "black"
    })
    let rows = Number(prompt("How big the next board should be?"))
    containerDiv.innerHTML = '';
    for(let i = 0; i < rows; i++){
        for(let i = 0; i < rows; i++){
            const div = document.createElement('div')
            div.classList.add("box")
            div.addEventListener("mouseover", hover)
            div.setAttribute('style', `width:${Math.round(FRAMESIZE/rows)}px; height:${Math.round(FRAMESIZE/rows)}px`)
            containerDiv.appendChild(div)
        }
    }
}

function createButton(){
    const buttonDiv = document.createElement('button')
    buttonDiv.classList.add('buttons') 
    const button1 = document.createElement('button')
    button1.innerHTML = "Clear"
    button1.addEventListener("click", clearAndNew)
    buttonDiv.appendChild(button1)
    document.body.appendChild(buttonDiv)
}

function hover(e){
    this.style.background  = "white";
}