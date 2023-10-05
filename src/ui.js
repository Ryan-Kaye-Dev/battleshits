export function renderBoards(player1board, player2board) {
  const gameContainer = document.getElementById("game-container");
  const gameBoard1 = document.createElement("div");
  const gameBoard2 = document.createElement("div");
  const console = document.createElement("div");
  console.id = "console";
  gameContainer.appendChild(console);

  gameBoard1.classList.add("gameboard");
  gameBoard1.id = "gameboard1";
  gameBoard2.classList.add("gameboard");
  gameBoard2.id = "gameboard2";
  gameContainer.appendChild(gameBoard1);
  gameContainer.appendChild(gameBoard2);

  const gameBoard1Title = document.createElement("h2");
  gameBoard1Title.textContent = "Player 1";
  gameContainer.appendChild(gameBoard1Title);
  gameBoard1Title.classList.add("p1-title");
  const gameBoard2Title = document.createElement("h2");
  gameBoard2Title.textContent = "Player 2";
  gameContainer.appendChild(gameBoard2Title);
  gameBoard2Title.classList.add("p2-title");

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
  const gameBoard1 = document.getElementById("gameboard1");
  const gameBoard2 = document.getElementById("gameboard2");

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
      } else if (cell.hit) {
        cellDiv.classList.add("miss");
      }
    });
  });
}

export function logMessage(message) {
  const console = document.getElementById("console");
  console.textContent = "";
  console.textContent = message;
}

export function showShipInventory() {
  const shipInventory = document.createElement("div");
  shipInventory.id = "ship-inventory";
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(shipInventory);

  const shipInventoryTitle = document.createElement("h3");
  shipInventoryTitle.textContent = "Inventory";
  shipInventory.appendChild(shipInventoryTitle);
  shipInventoryTitle.classList.add("ship-inventory-title");

  // for each image in the images folder, create a div with the image as the background
  // images
  const shipImages = [
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
    "patrol",
    "rotate",
  ];

  shipImages.forEach((ship) => {
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("boat");
    shipDiv.id = ship;
    const image = document.createElement("img");
    image.src = `../src/images/${ship}.png`;
    image.id = `${ship}-img`;
    shipDiv.appendChild(image);
    shipInventory.appendChild(shipDiv);
  });
}
