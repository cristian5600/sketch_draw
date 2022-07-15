const panel = document.querySelector(`.panel`);
//onst input = document.querySelector(`input`);

createGrid(10);
let squares = document.querySelectorAll(`.square`);


input = document.getElementsByName(`inputbox`);
const buton = document.getElementsByClassName('bt');


/*squares.forEach(square => square.addEventListener(`mouseover`, function(e){
    square.classList.add(`hover`);
}));*/
    
buton[0].addEventListener('click',function(e) { 
    console.log("i dont get it");
    sequence(parseInt(input[0].value))
});
//buton.addEventListener(`keypress`,console.log(`plrrrm`));
//document.getElementsByClassName(`button`).addEventListener(`click`,sequence(parseInt(input[0].value)));
function clear(){
    while(panel.lastChild){
        panel.removeChild(panel.lastChild);
    }
}
function sequence(value){
    clear();
    
    createGrid(value);
    squares = document.querySelectorAll(`.square`);
}
function createGrid(size){
    //let changeDimensions = document.querySelectorAll(`square`);
    //changeDimensions.forEach(thing => console.log(thing));


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
    /*for(let i =0; i< panel.clientHeight/size -1 ;i++){
        let aux = row;
        panel.appendChild(aux);
    }*/
    document.querySelectorAll(`.square`).forEach(square => square.addEventListener(`mouseover`, function(e){
        square.classList.add(`hover`);
    }));
}

function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
    return TestVar;
};