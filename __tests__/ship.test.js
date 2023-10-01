import Ship from "../src/Ship";

describe("ship functions", () => {
  let testCarrier;
  let testSubmarine;

  beforeEach(() => {
    testCarrier = new Ship("Carrier", 5);
    testSubmarine = new Ship("Submarine", 3);
  });

  test("accepts being hit", () => {
    testCarrier.hit();
    expect(testCarrier.hits).toBe(1);
  });

  test("accepts multiple hits", () => {
    testCarrier.hit(9);
    expect(testCarrier.hits).toBe(9);
  });

  test("ship gets sunk", () => {
    testCarrier.hit(9);
    expect(testCarrier.sunk).toBe(true);
  });

 /* test("ship not yet sunk", () => {
    testCarrier.hit(3);
    expect(testCarrier.isSunk()).toBe(false);
  });

  test("ship not spawned in sunk", () => {
    expect(testCarrier.isSunk()).toBe(false)
  })
  */
});