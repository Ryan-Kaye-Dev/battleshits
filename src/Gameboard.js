import { fleet } from "./fleet";
import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.missedShots = [];
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        const cell = { hasShip: false, hit: false, row: i, col: j };
        row.push(cell);
      }
      board.push(row);
    }
    return board;
  }

  randomlyPlaceShips() {
    // create ships from fleet
    let ships = [];
    for (let ship of fleet) {
      ships.push(new Ship(ship.name, ship.length));
    }
    console.log(`i'm logging ships: ${ships}`);
    // randomly place ships
    for (let ship of ships) {
      console.log(`Placing ship: ${ship.name}, Length: ${ship.length}`);
      let x, y, direction;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      } while (!this.isValidPlacement(ship, x, y, direction));

      this.placeShip(ship, x, y, direction);
    }
  }

  placeShip(ship, x, y, direction = "horizontal") {
    // Check if ship placement is valid
    if (!this.isValidPlacement(ship, x, y, direction)) {
      return false;
    }

    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        const cell = this.board[x][y + i];
        cell.ship = ship; // Assign the ship object to the cell
        cell.hasShip = true;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        const cell = this.board[x + i][y];
        cell.ship = ship; // Assign the ship object to the cell
        cell.hasShip = true;
      }
    }

    return true;
  }

  isValidPlacement(ship, x, y, direction) {
    // Check if ship is within bounds
    console.log(`Checking if ship is within bounds`);
    console.log(`x: ${x}, y: ${y}, direction: ${direction}`);
    if (direction === "horizontal") {
      if (y + ship.length > 9) return false;
    } else {
      if (x + ship.length > 9) return false;
    }

    // Check if ship overlaps another ship
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i].hasShip) return false;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y].hasShip) return false;
      }
    }

    // Return true when all checks pass
    return true;
  }

  receiveAttack(x, y) {
    this.board[x][y].hit = true;
    if (this.board[x][y].hasShip) {
      this.board[x][y].ship.hit();
    } else {
      this.missedShots.push({ row: x, col: y });
    }
  }

  receiveRandomAttack() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.board[x][y].hit); // Check if the cell has already been hit

    this.receiveAttack(x, y);
  }

  isAllSunk() {
    for (let row of this.board) {
      for (let cell of row) {
        if (cell.hasShip && !cell.ship.sunk) return false;
      }
    }
    return true;
  }

  getBoard() {
    return this.board;
  }
}
