export default class Ship {
  constructor(name, length, hits = 0, sunk = false) {
    this.name = "name";
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  hit(amount) {
    if (!amount) {
      this.hits++;
    } else {
      this.hits += amount;
    }
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }
}
