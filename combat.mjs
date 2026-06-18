import Die from "./Die.mjs";
import SuperHero from "./Superheroe.mjs";
import Scholar from "./Scholar.mjs";

export default class Combat {
    constructor(fighter1, fighter2)
    {
        this.fighter1 = null;
        this.fighter2 = null;
        this.turnCount = 0;
        this.d20 = null;
        this.d100 = null;
        this.d3 = null;
        this.d5 = null;
        this.currentAttacker = null;
        this.currentdefender = null;
    }

    create(heroeData)
    {
        this.d20 = Die.createDie20();
        this.d100 = Die.createDie100();
        this.d3   = Die.createDie3();
        this.d5   = Die.createDie5();

        let villanoZarate = null;
        let heroe = null;

        for(let i = 0; i < heroeData.length; i++)
        {
            const heroe = heroeData[i];
            const name = heroe.name;

            if(name === 'villanoZarate')
            {
                villanoZarate = heroe;
                break;
            }
        }

        const filtroHeroes = []

        for(let i = 0; i < heroeData.length; i++)
        {
            if(heroeData[i].id !== villanoZarate)
            {
                filtroHeroes.push(heroeData[i]);
            }
        }

        const randomIndex = Math.floor(Math.random() * filtroHeroes.length);
        heroe = filtroHeroes[randomIndex];

        this.fighter1 = new SuperHero(heroe);
        this.fighter2 = new SuperHero(villanoZarate);

        console.log("WELCOME TO THE COMBATE ARENA");
        console.log("----------------------------");
        console.log("Hoy combatiran " + this.fighter1.name + " y " + this.fighter2.name);
        console.log("----------------------------");
        console.log("Lista de atributos");
        console.log("Name: " + this.fighter1.name);
        console.log("HP: " + this.fighter1.hitpoint);
        console.log("INT: " + this.fighter1.powerstats.INT);
        console.log("STR: " + this.fighter1.powerstats.STR);
        console.log("COM: " + this.fighter1.powerstats.COM);
        console.log("DUR: " + this.fighter1.powerstats.DUR);
        console.log("POW: " + this.fighter1.powerstats.POW);

        console.log("------------------------------")
        console.log("Name: " + this.fighter2.name);
        console.log("HP: " + this.fighter2.hitpoint);
        console.log("INT: " + this.fighter2.powerstats.INT);
        console.log("STR: " + this.fighter2.powerstats.STR);
        console.log("COM: " + this.fighter2.powerstats.COM);
        console.log("DUR: " + this.fighter2.powerstats.DUR);
        console.log("POW: " + this.fighter2.powerstats.POW);


    }

    execute()
    {
        let attacker;
        let defender;
        if(this.fighter1.powerstats.INT + this.fighter1.powerstats.COM > this.fighter2.powerstats.INT + this.fighter2.powerstats.COM)
        {
            attacker = this.fighter1;
            defender = this.fighter2;
        }
        else
        {
            attacker = this.fighter2;
            defender = this.fighter1;
        }

        while(attacker.isAlive === true || defender.isAlive === true)
        {
            this.combatTurn(attacker, defender);
            if(attacker.isAlive === false)
            {
                console.log(attacker.name + " es el ganador");
            }
            else if(defender.isAlive === false)
            {
                console.log(defender.name + " es el ganador")
            }
        }
    }

    combatTurn(attacker, defender)
    {
        let newAttacker = defender;
        let newDefender = attacker;

        let rollDice = this.d20.roll();

        if(rollDice >=3 || rollDice <= 17)
        {
            this.calculateNormalDamage(attacker,defender,this.d20.roll());
        }
        else if(rollDice >= 18 || rollDice <= 20)
        {
            this.calculateCriticaldamage(attacker, defender,this.d20.roll());
        }

        console.log("WELCOME TO THE COMBATE ARENA");
        console.log("----------------------------");
        console.log("Hoy combatiran " + this.fighter1.name + " y " + this.fighter2.name);
        console.log("----------------------------");
        console.log("Lista de atributos");
        console.log("Name: " + this.attacker.name);
        console.log("HP: " + this.attacker.hitpoint);
        console.log("INT: " + this.attacker.powerstats.INT);
        console.log("STR: " + this.attacker.powerstats.STR);
        console.log("COM: " + this.attacker.powerstats.COM);
        console.log("DUR: " + this.attacker.powerstats.DUR);
        console.log("POW: " + this.attacker.powerstats.POW);

        console.log("------------------------------")
        console.log("Name: " +  this.defender.name);
        console.log("HP: " +    this.defender.hitpoint);
        console.log("INT: " +   this.defender.powerstats.INT);
        console.log("STR: " +   this.defender.powerstats.STR);
        console.log("COM: " +   this.defender.powerstats.COM);
        console.log("DUR: " +   this.defender.powerstats.DUR);
        console.log("POW: " +   this.defender.powerstats.POW);

        attacker = newAttacker;
        defender = newDefender;

    }
    
    calculateNormalDamage(attacker, defender, damageRoll)
    {
        const normalDamage = (attacker.powerstats.POW + attacker.powerstats.STR) * damageRoll /100;

        defender.hitpoint -= normalDamage;

        console.log(attacker.name + " hizo un ataque normal. DAÑO TOTAL: " + normalDamage + " || Vida de " + defender.name + ": " + defender.hitpoint)
    }

    calculateCriticaldamage(attacker, defender, damageRoll)
    {
        const normalDamage = (attacker.powerstats.POW + attacker.powerstats.STR) * damageRoll /100;    
        
        let criticalDamage = 0;

        if(damageRoll === 18)
        {
            criticalDamage = (((attacker.powerstats.INT * attacker.powerstats.DUR)/100) * this.d3.roll());
        }
        else if(damageRoll === 19)
        {
            criticalDamage = (((attacker.powerstats.INT * attacker.powerstats.DUR)/100) * (this.d3.roll()+ this.d3.roll()));
        }
        else if(damageRoll === 20)
        {
            criticalDamage = (((attacker.powerstats.INT * attacker.powerstats.DUR)/100) * (this.d5.roll()+ this.d5.roll() + this.d5.roll()));
        }
        
        const totalDamage = normalDamage + criticalDamage; 

        defender.hitpoint -= totalDamage;

        console.log(attacker.name + " hizo un ataque critico. DAÑO TOTAL: " + normalDamage + " || Vida de " + defender.name + ": " + defender.hitpoint)

    }

    calculateFumbleDamage(attacker, defender, damageRoll)
    {

    }

    }