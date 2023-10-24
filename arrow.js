function sumNumber(num1, num2) {
  return num1 + num2;
}

const sumNumber1 = (num1, num2) => {
  return num1 + num2;
};

const addNumber = (a, b) => a + b;

const addToNumber = (a, b) => {
  let totat = a + b + 5;
  let resul = totat + 10;
  return resul - 2;
};

const octobor = (house, milk, kisti, electricity, interNet) => {
  let totat  = house + milk + kisti + electricity + interNet;
  let resul = totat;
  return resul;
};

console.log(sumNumber(10, 15));
console.log(sumNumber1(25, 25));
console.log(addToNumber(20, 10));
console.log(addToNumber(5, 5 * 10));
console.log(octobor(11000, 3000, 1500, 1500, 400 ));
console.log(octobor(11000, 3000, 1500, 1500, 400 - (20000)));
