/*----- constants -----*/
const player = [-1,1];
const winnPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
/*----- app's state (variables) -----*////////////////////////////////////////////////////////////////////////////////////
let turn, winner, clickPattern, count, XO
turn =  player[0];
clickPattern = [0,0,0,0,0,0,0,0,0];
count = 0
/*----- cached element references -----*///////////////////////////////////////////////////////////////////////////////////
let btn = document.querySelector("section");
let square = document.querySelectorAll("section div");
let reset = document.querySelector("button");
let message = document.getElementById("text");
/*----- event listeners -----*//////////////////////////////////////////////////////////////////////////////////////////////
btn.addEventListener("click", clickHandler);
reset.addEventListener("click",init);
/*----- functions -----*////////////////////////////////////////////////////////////////////////////////////////////////////
function clickHandler(evt){
    if(evt.target.textContent==="" && winner!==turn){
        if(turn===player[0]){turn = player[1];
        XO = "X";}
        else{
        turn = player[0];
        XO = "O"
    }
    
        count +=1;
        let target = evt.target;
        console.log(target.id);
        clickPattern.splice(target.id,1,turn);
        target.textContent= XO;
        // console.log(target.textContent= XO);
        winCheck();
}
}
function winCheck (){
    for(i=0 ; i < winnPattern.length ; i++){
        if(clickPattern[winnPattern[i][0]] + clickPattern[winnPattern[i][1]] + clickPattern[winnPattern[i][2]] === -3 ) {
            winner=turn;
            console.log(XO)
    }
        else if(clickPattern[winnPattern[i][0]] + clickPattern[winnPattern[i][1]] + clickPattern[winnPattern[i][2]] === 3 ) {
             winner=turn
            console.log(XO)
    }  
}
render();
}
// problem 
function init(){
    for(i=0 ; i< clickPattern.length ; i++){
        document.getElementById(i).textContent="";
    }
    turn = player[0];
    winner=NaN;
    clickPattern = new Array(9).fill(0);
    }


function render(){ 
    if(count===9){
        message.textContent = "it is a tie loosers"
    }
}



