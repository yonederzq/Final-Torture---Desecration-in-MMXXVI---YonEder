export default class Die {
  constructor(values) {
    this.values = values;
  }

  roll() {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
  }

  createDie3() {
    return new Die([1, 2, 3]);
  }

  createDie5() {
    return new Die([1, 2, 3, 4, 5]);
  }

  createDie20() {
    return new Die([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  }

  creteDie100() {
    for (let i = 1; i <= 100; i++) {
      this.values.push(i);
    }
    return new Die(this.values);
  }
}