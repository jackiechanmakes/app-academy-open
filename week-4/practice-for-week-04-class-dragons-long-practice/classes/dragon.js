class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    let message = `${this.name} breathes fire everywhere! BURN!!!!`;
    return message;
  }

  static getDragons(...dragons) {
    let names = [];

    for (let i = 0; i < dragons.length; i++) {
      let dragon = dragons[i];
      names.push(dragon.name);
    }

    return names;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
