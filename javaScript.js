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

function playGame(){
    //we play the game here 
    
    const board = gameBoard()
    let game;
    let moveCount = 0
    while (moveCount < 9){
        
        let firstPlayer = Number(prompt("ply 1 : select the slot between 0 and 8:"))
        if (board[firstPlayer] !== ""){
            alert("field selected")
        }
        else{
            board[firstPlayer] = array[0].marker
            game = gaming(board)
            if (game === "win"){
                return "Player 1 wins!"
            }
            moveCount++
        }

        if (moveCount === 9) break // to exit if board is full 
        
        let secondPlayer = Number(prompt("ply 2: select the slot between 0 and 8:"))
        if (board[secondPlayer] !== ""){
            alert("field selected")
        }
        else{
            board[secondPlayer] = array[1].marker
            game = gaming(board)
            if (game === "win"){
                return "Player 2 wins!"
            }
            moveCount++
        }
    }

    return "Its a draw!"
}

alert(playGame())
console.log(array)



