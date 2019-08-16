const FRAMESIZE = 810;
const BORDERSIZE = 5;
createButtons()
const containerDiv = document.createElement('div')
createContainer()

function createContainer(){
    containerDiv.classList.add('flex-container')
    containerDiv.setAttribute('style',`width: ${FRAMESIZE}px; height: ${FRAMESIZE}px`)
    for(let i = 0; i < 256; i++){
            const div = document.createElement('div')
            div.classList.add("box")
            div.addEventListener("mouseover", hover)
            containerDiv.appendChild(div)
    }
    document.body.appendChild(containerDiv);
}

function clear(){
    containerDiv.childNodes.forEach(div => {
        div.style.background = "black"
    })
}
function resize(){
    let rows = Number(prompt("How big the next board should be?"))
    if(rows > 100 || rows < 1){
        alert("Allowed range 1-100")
        return
    }
    containerDiv.innerHTML = '';
    const boxSize = FRAMESIZE/rows;
    let containerSize = boxSize*rows+BORDERSIZE*2;
    containerDiv.setAttribute('style', `width: ${containerSize}px; height: ${containerSize}px`)
    for(let i = 0; i < rows; i++){
        for(let i = 0; i < rows; i++){
            const div = document.createElement('div')
            div.classList.add("box")
            div.addEventListener("mouseover", hover)
            div.setAttribute('style', `width:${boxSize}px; height:${boxSize}px`)
            containerDiv.appendChild(div)
        }
    }
}

function randomColor(){
    containerDiv.childNodes.forEach(node => {
        node.addEventListener("mouseover", hoverRandom)
    })
}

function createButtons(){
    const buttonDiv = document.createElement('button')
    buttonDiv.classList.add('buttons') 
    
    buttonDiv.appendChild(createButton("Clear", "click", clear))
    buttonDiv.appendChild(createButton("Resize", "click", resize))
    buttonDiv.appendChild(createButton("Random colors", "click", randomColor))
    document.body.appendChild(buttonDiv)
}

function createButton(text, eventName, callback){
    const button = document.createElement('button')
    button.innerHTML = text
    button.addEventListener(eventName, callback)
    return button;
}

function hoverRandom(e){
    let red = Math.random()* 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    this.style.background  = `rgb(${red}, ${green}, ${blue})`;
}

function hover(e){
    this.style.background = "white";
}