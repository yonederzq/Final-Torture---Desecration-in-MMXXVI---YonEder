export default class Combat {
    constructor(character1, character2) {
        this.character1 = character1;
        this.character2 = character2;
    }

    start() {
        while (this.character1.isAlive() && this.character2.isAlive()) {
            this.character1.attack(this.character2);
            if (this.character2.isAlive()) {
                this.character2.attack(this.character1);
            }
        }
        
        if (this.character1.isAlive()) {
            console.log(`${this.character1.name} wins!`);
        } else {
            console.log(`${this.character2.name} wins!`);
        }
    }
}