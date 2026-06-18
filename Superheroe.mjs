export default class Superhero extends Character {
  constructor(name, health, attackPower, superPower) {
    super(name, health, attackPower);
    this.superPower = superPower;
  }

  useSuperPower(target) {
    target.takeDamage(this.superPower);
  }
}