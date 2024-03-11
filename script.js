function gameboard() {
  board =[];
  row = 3;
  column = 3;
  for (let i = 0; i < row; i++) {
    board[i] =[];
    for (let j = 0; j < column; j++) {
      board[i][j] =0;
      
    }
    
  }
  console.log(`${players[0].name} to play`);
  let columnChoice = prompt("choose your column 1-2-3");
  let rowChoice = prompt("choose your row 1-2-3");

  board[columnChoice][rowChoice]= players[0].marker
  console.table(board);
  
  
  outsideBoard= board;
}

function game() {
  gameboard();
  let gamescore = false;
  while (gamescore==false) {
    if (
      (outsideBoard[0][0] && outsideBoard[0][1] && outsideBoard[0][2]) ||
      (outsideBoard[1][0] && outsideBoard[1][1] && outsideBoard[1][2]) ||
      (outsideBoard[2][0] && outsideBoard[2][1] && outsideBoard[2][2]) ||
      (outsideBoard[0][0] && outsideBoard[1][0] && outsideBoard[2][0]) ||
      (outsideBoard[0][1] && outsideBoard[1][1] && outsideBoard[2][1]) ||
      (outsideBoard[0][2] && outsideBoard[1][2] && outsideBoard[2][2]) ||
      (outsideBoard[0][0] && outsideBoard[1][1] && outsideBoard[2][2]) ||
      (outsideBoard[0][2] && outsideBoard[1][1] && outsideBoard[2][0])
    ) {
      gamescore = true;
      console.log(`${player[0]} win the game`);
    } else {
      gameboard();
      swapElements(players,0,1);
    
    }
}
}
  
function gameturn() {
 

}
 
/*my player*/

  let playerOne = {
    name: "tim",
    marker: "X",
    number: "1"
  };
  
  let playerTwo = {
    name: "joe",
    marker: "O",
    number: "2"
  };
 const swapElements = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};
  let players = [playerOne,playerTwo];
  let outsideBoard = gameboard();
  

game();
