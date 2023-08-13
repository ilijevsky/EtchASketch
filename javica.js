
const body = document.body
function FillGrid(size){
    let amount = size * size
    let container = document.querySelector(".container")
    container.style.display = "grid";   
    container.style.border = "solid black 2px"
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i<amount;i++){
        let elementdiv = document.createElement("div")
        elementdiv.style.backgroundColor = "blue"
        container.insertAdjacentElement("beforeend" , elementdiv)
    }   
}
let enterButton = document.querySelector(".enterButton")
    enterButton.addEventListener('click', () => {
        let size = parseInt(document.querySelector(".inputsize").value)    
        FillGrid(size)  
           })
