export default class Ship {
  constructor(name, length, hits = 0, sunk = false) {
    this.name = name; // Fix: Use the name parameter
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  hit() {
    this.hits++;
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }
}
