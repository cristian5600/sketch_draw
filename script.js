const panel = document.querySelector(`.panel`);
input = document.getElementsByName(`inputbox`);
const buton = document.getElementsByClassName('bt');

createGrid(10); // a demonstration


buton[0].addEventListener('click',function(e) {//when clicked, starts the sequence
    
    sequence(parseInt(input[0].value))
});

// this clears the screen and creates a new sketch
function sequence(value){
    clear(); 
    createGrid(value);
}
    //this clears the screen and deletes the squares
function clear(){
    while(panel.lastChild){
        panel.removeChild(panel.lastChild);
    }}
function createGrid(size){
    // this creates the rows and squares
    if(size > 640){
        alert("max size is 640px");
        return;
    }
    for(let i = 0; i< panel.clientHeight/size ; i++){ //how many rows
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
    //adding event listeners to the new squares
    document.querySelectorAll(`.square`).forEach(square => square.addEventListener(`mouseover`, function(e){
        square.classList.add(`hover`);
    }));
}