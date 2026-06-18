export default class Character {
constructor(data) {
  ths.id = data.id;
  this.name = data.name;
  this.slug = data.slug;
  this.powerstats = data.powerstats;

  let str = 0
  this.hitPoint = str * 10;
  this.powerstats.HP = this.hitPoint;

}

attack()
{

}

isAlive() {
  if(this.hitPoint > 0)
  {
    return true;
  }
  else
    return false;
}

reciveDamage(damage)
{
  this.hitPoint = this.hitPoint -damage;

  if(this.hitPoint < 0)
  {
    this.hitPoint = 0;
  }
  return this.hitPoint;
}
}