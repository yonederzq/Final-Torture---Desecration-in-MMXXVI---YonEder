export default class Die {
  constructor(sides = 6) {
    this.sides = sides;
  }
  
    roll() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}