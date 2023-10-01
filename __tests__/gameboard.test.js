import Gameboard from "../src/Gameboard";
import Ship from "../src/Ship";

describe("gameboard functions", () => {
  let testGameboard;
  let testShip;

  beforeEach(() => {
    testGameboard = new Gameboard();
    testShip = new Ship("Carrier", 5);
  });

  test("Generates board", () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push({ hasShip: false, hit: false, row: i, col: j });
      }
      board.push(row);
    }
    expect(testGameboard.board).toEqual(board);
  });

  test("Places ship horizontally", () => {
    testGameboard.placeShip(testShip, 0, 0, "horizontal");
    expect(testGameboard.board[0][0].ship).toBe(testShip);
    expect(testGameboard.board[0][1].ship).toBe(testShip);
    expect(testGameboard.board[0][2].ship).toBe(testShip);
    expect(testGameboard.board[0][3].ship).toBe(testShip);
    expect(testGameboard.board[0][4].ship).toBe(testShip);
  });

  test("Places ship vertically", () => {
    testGameboard.placeShip(testShip, 0, 0, "vertical");
    expect(testGameboard.board[0][0].ship).toBe(testShip);
    expect(testGameboard.board[1][0].ship).toBe(testShip);
    expect(testGameboard.board[2][0].ship).toBe(testShip);
    expect(testGameboard.board[3][0].ship).toBe(testShip);
    expect(testGameboard.board[4][0].ship).toBe(testShip);
  });

  test("Cell detects that it has a ship", () => {
    testGameboard.placeShip(testShip, 0, 0, "horizontal");
    expect(testGameboard.board[0][0].hasShip).toBe(true);
  });

  test("Detects invalid ship placement - Already Ship here", () => {
    testGameboard.placeShip(testShip, 0, 0, "horizontal");
    expect(testGameboard.isValidPlacement(testShip, 0, 0, "horizontal")).toBe(
      false
    );
  });

  test("Detects invalid ship placement - Out of bounds", () => {
    expect(testGameboard.isValidPlacement(testShip, 0, 5, "horizontal")).toBe(
      false
    );
  });

  test("Detects invalid ship placement - Already Ship here", () => {
    testGameboard.placeShip(testShip, 0, 0, "horizontal");
    expect(testGameboard.placeShip(testShip, 0, 0, "horizontal")).toBe(false);
  });

  test("Cell detects that it has been hit", () => {
    testGameboard.receiveAttack(0, 0);
    expect(testGameboard.board[0][0].hit).toBe(true);
  });

  test("Ship detects that it has been hit", () => {
    testGameboard.placeShip(testShip, 0, 0, "horizontal");
    testGameboard.receiveAttack(0, 0);
    expect(testShip.hits).toEqual(1);
  });

  test("Records missed attacks", () => {
    testGameboard.receiveAttack(0, 0);
    testGameboard.receiveAttack(0, 1);
    expect(testGameboard.missedShots).toEqual([{ row: 0, col: 0 }, { row: 0, col: 1}]);
  });

  test("Detects if all ships are sunk", () => {
    testGameboard.placeShip(testShip, 0, 0, "horizontal");
    testGameboard.receiveAttack(0, 0);
    testGameboard.receiveAttack(0, 1);
    testGameboard.receiveAttack(0, 2);
    testGameboard.receiveAttack(0, 3);
    testGameboard.receiveAttack(0, 4);
    expect(testGameboard.isAllSunk()).toBe(true);
  });
});
