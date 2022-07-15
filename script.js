const SIZE_OF_SQUARE = 10;
const panel = document.querySelector(`.panel`);
const row = document.createElement(`div`);
 /*for(let i = 0; i< panel.clientHeight/SIZE_OF_SQUARE; i++){
    let row = document.createElement(`div`);
    row.classList.add(`row`);
    for(let j = 0; j< panel.clientHeight/SIZE_OF_SQUARE; j++){
        let div = document.createElement(`div`);
        div.classList.add(`square`);
        row.appendChild(div);  
    }
    panel.appendChild(row);
}
for(let i =0; i< panel.clientHeight/SIZE_OF_SQUARE -1 ;i++){
    let aux = row;
    panel.appendChild(aux);
} */
createGrid(10);


function clear(){
    while(panel.lastChild){
        panel.removeChild(panel.lastChild);
    }
}
function createGrid(size){
    let changeDimensions = document.querySelectorAll(`square`);
    changeDimensions.forEach(thing => console.log(thing));

    //changeDimensions.setAttribute("style","width:10px");
    //changeDimensions.setAttribute("style","height:10px");

    for(let i = 0; i< panel.clientHeight/size; i++){
        let row = document.createElement(`div`);
        row.classList.add(`row`);
        for(let j = 0; j< panel.clientHeight/size; j++){
            let div = document.createElement(`div`);
            div.classList.add(`square`);
            div.style.height = `${size}px`;
            div.style.width = `${size}px` ;
            row.appendChild(div);  
        }
        panel.appendChild(row);
    }
    for(let i =0; i< panel.clientHeight/size -1 ;i++){
        let aux = row;
        panel.appendChild(aux);
    }
}
const squares = document.querySelectorAll(`.square`);
squares.forEach(square => square.addEventListener(`mouseover`, function(e){
    square.classList.add(`hover`);
})
    
);