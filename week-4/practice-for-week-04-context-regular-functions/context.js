function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // Attempt: "Undefined eats fish food"
          // Solution: "undefined eats fish food"

/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // Attempt: undefined
            // Solution: "Nemo eats fish food"

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // Attempt: "undefined eats fish food"
       // Solution: Attempt = correct answer

/********************************* Scenario 4 *********************************/
// nemo.swim(); // Attempt: "Nemo swimming in the water"
             // Solution: Attempt = correct answer

/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // Attempt: undefined
        // Solution: TypeError thrown - Cannot read properties of undefined
        // (tried to call name property on undefined this - this is undefined
        //  because there's no object that the method swim() belongs to)
