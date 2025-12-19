function gameBoard(){
    let rows = 3;
    let colums = 3;
    const board = [];
    for (let i = 0; i< rows; i++){
        for (let j = 0; j< colums; j++){
            board.push("")
        }
    }
    return board
}




let array = []
function Users(name, marker){
    //function to create users for the game
  this.name = name,
  this.marker = marker 
}


function userArray(name, marker){
    //creating an array of users 
    const player = new Users(name, marker);
    array.push(player)
    return array
}

const player1 = userArray("Ayo", "X")
const player2 = userArray("Deji", "O")
let board = gameBoard()
let currentPlayer = array[0]
let moveCount = 0;
const  start = document.querySelector(".start")
const gameGrid = document.querySelector(".gameGrid");




function gaming(board){
    //logic to check the winning team 
    let result;
    
    if ((board[0] === board[1]) && (board[1] ===board[2]) && board[0] !== ""){
        result = "win"
    }
    else if ((board[3] ===board[4]) && (board[4] === board[5]) && board[3] !== ""){
        result = "win"
    }
    else if ((board[6] === board[7]) && (board[7]===board[8]) && board[6] !== ""){
        result ="win"
    }
    else if((board[0] ===board[3]) && (board[3] === board[6]) && board[0] !== ""){
        result ="win"
    }
    else if ((board[1] === board[4])&&(board[4] ===board[7]) && board[1] !== ""){
        result ="win"
    }
    else if ((board[2] === board[5]) && (board[5] === board[8]) && board[2] !== ""){
        result ="win"
    }
    else if ((board[0] === board[4])&&(board[4] === board [8]) && board[0] !== ""){
        result ="win"
    }
    else if ((board[2] === board[4]) && (board[4] ===board[6]) && board[2] !== ""){
        result ="win"
    }
    
    return result 
}

function gameGridDiv(gameGrid){
    //create 9 divs inside the game grid 
    
    for (let i = 0; i < 9; i++){
    
       let div = document.createElement("div")
        div.classList.add("gameGridDivs")
        div.addEventListener("click", ()=>{
            if (board[i] !== ""){
                //check if slot is empty
                alert("slot taken")
                return
            }
            
            if (currentPlayer === array[0]){
                //check if its player 1 and assign "x" on the dash board and array//
                board[i] = array[0].marker;
                div.innerText = array[0].marker
                moveCount ++
                let result = gaming(board)
                if (result === "win"){
                    alert(currentPlayer.name + " wins!")
                }
                else if (moveCount ===9){
                    //checks if the number of play is up to 9
                    alert ("it's a draw")
                }
                currentPlayer = array[1]
                
                
            }
            else{
                board[i] = array[1].marker
                div.innerText = array[1].marker
                moveCount++
                let result = gaming(board)
                if (result === "win"){
                    alert(currentPlayer.name + "wins!")
                }
                else if (moveCount === 9){
                    alert("Its a draw")
                }
                currentPlayer = array[0]
                

                
            }
            

                
            
            

            })
            
       gameGrid.appendChild(div)
       
    }
    return gameGrid
}


start.addEventListener("click",() =>{
    gameGrid.innerHTML = ""//first remove all divs//
    board = gameBoard()
    moveCount = 0;
    currentPlayer = array[0];
    gameGridDiv(gameGrid)
        
    } 
 
    
)








