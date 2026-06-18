import Die from "./Die.mjs"

export default class Scholar extends Character {
  constructor(data)
  {
    super(data)
    {
      this.hitPoints = this.calculateHP;
      this.powerStats.HP = this.hitPoints;
    }
  }

  calculateHP()
  {
    const d20 = Die.createDie20();
    const roll = d20.roll();
    return roll +5;
  }

  attack()
  {
    console.log(this.name + " lanza un hechizo");
  }
  }
