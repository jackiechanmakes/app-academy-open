const Dragon = require('./dragon');

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        for (let i = 0; i < this.evilDoings.length; i++) {
            let evilDoing = this.evilDoings[i];
            let message = `${this.name} will ${evilDoing}`;
            console.log(message);
        }
    }

    burnsNemesis() {
        let message = `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
        return message;
    }
}

try {
    module.exports = EvilDragon;
} catch {
    module.exports = null;
}
