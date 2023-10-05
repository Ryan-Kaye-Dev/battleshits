import Player from './Player';
import Gameboard from './Gameboard';
import { renderBoards, updateBoards, logMessage, showShipInventory } from './ui';

export default async function gameLoop() {
  let player1board = new Gameboard();
  let player2board = new Gameboard();

  let player1 = new Player('Player 1', player1board);
  let player2 = new Player('Player 2', player2board);
  player1.turn = true;
  let gameOver = false;
  let winner = null;

  // Initialize selected ship as null
  let selectedShip = null;

  showShipInventory();

  player2board.randomlyPlaceShips();
  renderBoards(player1board, player2board);

  logMessage(`${player1.name}! Place your ships.`);

  let waitForPlayerToPlaceShipsResolve;

  const waitForPlayerToPlaceShips = () => {
    return new Promise((resolve) => {
      waitForPlayerToPlaceShipsResolve = resolve;
    });
  };

  const playerBoard = document.getElementById('gameboard1');
  let waitForPlayerMoveResolve;

  const waitForPlayerMove = () => {
    return new Promise((resolve) => {
      waitForPlayerMoveResolve = resolve;
    });
  };

  // Handle ship selection logic
  const shipButtons = Array.from(document.getElementsByClassName("boat"));

  shipButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!selectedShip) {
        selectedShip = e.target.id;
        const shipImg = document.getElementById(`${selectedShip}-img`);
        button.classList.toggle("selected");
      } else {
        // Deselect the previously selected ship
        document.getElementById(`${selectedShip}-img`).classList.remove("selected");
        selectedShip = e.target.id;
        const shipImg = document.getElementById(`${selectedShip}-img`);
        button.classList.toggle("selected");
      }
    });
  });

  playerBoard.addEventListener('click', async (e) => {
    if (player1.turn && selectedShip) {
      // Handle ship placement based on the click event
      const cell = e.target;
      const row = cell.dataset.row;
      const col = cell.dataset.col;

      // Check if the cell is a valid location to place the ship
      if (player1board.placeShip(selectedShip, row, col)) {
        // Perform ship placement logic here
        player1board.placeShip(selectedShip, row, col);

        // Update the game board and remove the event listener
        updateBoards(player1board, player2board);
        playerBoard.removeEventListener('click', waitForPlayerMove);

        // Clear the selected ship
        selectedShip = null;

        // Resolve the promise to continue the game loop
        waitForPlayerMoveResolve();
      } else {
        logMessage("Invalid placement. Please choose another cell.");
      }
    }
  });

  // Wait for the player to place ships before starting the game
  await waitForPlayerToPlaceShips();

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
  return logMessage(`${winner.name} Wins!`);
}
