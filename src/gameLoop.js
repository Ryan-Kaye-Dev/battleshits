import Player from './Player';
import Gameboard from './Gameboard';
import { renderBoards, updateBoards, logMessage } from './ui';

export default async function gameLoop() {
  let player1board = new Gameboard();
  let player2board = new Gameboard();

  let player1 = new Player('Player 1', player1board);
  let player2 = new Player('Player 2', player2board);
  player1.turn = true;
  let gameOver = false;
  let winner = null;

  player1board.randomlyPlaceShips();
  player2board.randomlyPlaceShips();
  renderBoards(player1board, player2board);

  const playerBoard2 = document.getElementById('gameboard2');
  let waitForPlayerMoveResolve;

  const waitForPlayerMove = () => {
    return new Promise((resolve) => {
      waitForPlayerMoveResolve = resolve;
    });
  };

  playerBoard2.addEventListener('click', async (e) => {
    if (player1.turn) {
      // Handle player 1's move based on the click event
      const cell = e.target;
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      
      if (!player2board.board[row][col].hit) {
        // Check if the cell has not been hit before
        logMessage(`PKAYER 1 ATTACKS: ${row}, ${col}`);
        
        // Perform the attack logic here
        player2board.receiveAttack(row, col);
        
        // Remove the event listener after the move
        playerBoard2.removeEventListener('click', waitForPlayerMove);
        
        // Resolve the promise to continue the game loop
        waitForPlayerMoveResolve();
      } else {
        logMessage("You can't attack the same cell twice.");
      }
    }
  });

  while (!gameOver) {
    if (player1.turn) {
      console.log(player2board.board);
      await waitForPlayerMove(); // Wait for player 1's move

      updateBoards(player1board, player2board);
      player1.turn = false;
      player2.turn = true;
    } else {
      player1board.receiveRandomAttack();
      updateBoards(player1board, player2board);
      player2.turn = false;
      player1.turn = true;
    }
    if (player1board.isAllSunk()) {
      gameOver = true;
      winner = player2;
    } else if (player2board.isAllSunk()) {
      gameOver = true;
      winner = player1;
    }
  }
  return console.log(`${winner.name} Wins!`);
}
