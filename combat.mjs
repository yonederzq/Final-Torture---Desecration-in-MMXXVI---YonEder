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

    }