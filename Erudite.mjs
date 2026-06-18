export default class Erudite extends Character {
  constructor(name, health, attackPower, knowledge) {
    super(name, health, attackPower);
    this.knowledge = knowledge;
  }

  useKnowledge(target) {
    target.takeDamage(this.knowledge);
  }
}