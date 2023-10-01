export function renderBoards(player1board, player2board) {
  const gameContainer = document.getElementById("game-container");
  const gameBoard1 = document.createElement("div");
  const gameBoard2 = document.createElement("div");
  gameBoard1.classList.add("gameboard");
  gameBoard2.classList.add("gameboard");
  gameContainer.appendChild(gameBoard1);
  gameContainer.appendChild(gameBoard2);

  const gameBoard1Title = document.createElement("h2");
  gameBoard1Title.textContent = "Player 1";
  gameContainer.appendChild(gameBoard1Title);
  const gameBoard2Title = document.createElement("h2");
  gameBoard2Title.textContent = "Player 2";
  gameContainer.appendChild(gameBoard2Title);

  player1board.board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.dataset.row = i;
      cellDiv.dataset.col = j;
      gameBoard1.appendChild(cellDiv);
    });
  });

  player2board.board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.dataset.row = i;
      cellDiv.dataset.col = j;
      gameBoard2.appendChild(cellDiv);
    });
  });
}

export function updateBoards(player1board, player2board) {
  const gameBoard1 = document.querySelector(".gameboard:nth-child(1)");
  const gameBoard2 = document.querySelector(".gameboard:nth-child(2)");

  player1board.board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellDiv = gameBoard1.querySelector(
        `.cell[data-row="${i}"][data-col="${j}"]`
      );
      if (cell.hasShip && cell.hit) {
        cellDiv.classList.add("hit");
      } else if (cell.hasShip) {
        cellDiv.classList.add("ship");
      } else if (cell.hit) {
        cellDiv.classList.add("miss");
      }
    });
  });

  player2board.board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const cellDiv = gameBoard2.querySelector(
        `.cell[data-row="${i}"][data-col="${j}"]`
      );
      if (cell.hasShip && cell.hit) {
        cellDiv.classList.add("hit");
      /*}  else if (cell.hasShip) {  DON'T NEED THIS BECAUSE THAT WOULD BE WALLHACKS
        cellDiv.classList.add("ship"); */
      } else if (cell.hit) {
        cellDiv.classList.add("miss");
      }
    });
  });
}
