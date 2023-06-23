const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    let exits = Object.keys(this.currentRoom.exits);
    let direction = exits[Math.floor(Math.random() * exits.length)];
    this.currentRoom = this.currentRoom.getRoomInDirection(direction);
    this.scratchNose();
  }

  takeSandwich() {
    for (let i = 0; i < this.currentRoom.items.length; i++) {
      let item = this.currentRoom.items[i];
      if (item.name === 'sandwich'){
          this.currentRoom.items.splice(i, 1);
      }
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    let resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.player.health -= 10;
    this.scratchNose();
  }

  applyDamage(amount) {
    this.health -= amount;
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }

}

module.exports = {
  Enemy,
};
