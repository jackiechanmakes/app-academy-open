function getNum(num1, num2, type) {
  let num;

  if (type === "smaller") {
    if (num1 < num2) {
      num = num1;
    } else {
      num = num2;
    }
  } else if (type === "bigger") {
    if (num1 < num2) {
      num = num2;
    } else {
      num = num1;
    }
  }

  return num;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = getNum(num1, num2, "bigger");
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = getNum(num1, num2, "bigger");
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = getNum(sum1, sum2, "bigger");
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = getNum(weight1, weight2, "smaller");
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
