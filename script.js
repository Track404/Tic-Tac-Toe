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
  board[0].splice(1,1,"X");
  console.log(board);

}

function Player() {
  let sign = 0;
  let name = prompt("what your name ?")
  let answer = prompt("Choose your sign between 1.X and 2.O");

  if (answer === "X") {
    sign = 1;
  } else if (answer === "O") {
    sign = 2;
  } else {
    
    return "ERROR try again";
    
  }

  console.log(`welcome ${name} you will play as ${sign}`);
  return { name, sign };
}
gameboard();
