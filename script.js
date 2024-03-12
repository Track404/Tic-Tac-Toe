/*my player(fix player for now)*/

let playerOne = {
  name: "tim",
  marker: "X",
};

let playerTwo = {
  name: "joe",
  marker: "O",
};

let players = [playerOne, playerTwo];
let outsideBoard = [];

/*Creation of the gameboard*/

function gameboard() {
  board = [];
  row = 3;
  column = 3;
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = 0;
    }
  }
  
  outsideBoard = board;
  
}

/* make the player choose their square and place their mark and display the board*/

function gameturn(theBoard) {
  console.log(`${players[0].name} to play`);
  let columnChoice = prompt("choose your column 1-2-3");
  let rowChoice = prompt("choose your row 1-2-3");

  theBoard[Number(rowChoice)-1][Number(columnChoice)-1] = players[0].marker;
  console.table(board);
}

/*make the player switch turn*/

function swapElements(myArray, index1, index2) {
  [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
}

/* play the game and check if there is a win from a player*/

function game() {
  gameboard();
  let gamescore = false;
  while (gamescore == false) {
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
      console.log(`${players[0].name} win the game`);
    } else {
      gameturn(outsideBoard);
      swapElements(players, 0, 1);
      
    }
  }
}

game();
