const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        for(let i = 0; i < this.lifeGoals.length; i++) {
            let lifeGoal = this.lifeGoals[i];
            let message = `${this.name} likes to ${lifeGoal}`;
            console.log(message);
        }
    }

    helpsPeople() {
        let message = `${this.name} helps their friend ${this.friend}`;
        return message;
    }
}

try {
    module.exports = FriendlyDragon;
} catch {
    module.exports = null;
}
