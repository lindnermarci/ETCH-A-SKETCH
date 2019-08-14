const containerDiv = document.createElement('div')
containerDiv.classList.add('flex-container')
containerDiv.classList.add('full-height')


for(let i = 0; i < 16; i++){
    for(let i = 0; i < 16; i++){
        const div = document.createElement('div')
        div.classList.add("box")
        containerDiv.appendChild(div)
    }
}

document.body.appendChild(containerDiv)