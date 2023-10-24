const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = numbers.slice(2, 5);
  const spliteNumbers  = numbers.splice(1,3)

console.log(numbers);
console.log(newNumbers);
console.log(spliteNumbers)
const sp = numbers.splice(1,8, 111, 444)
console.log(sp)

const friends =  ['khaled', 'bokor', 'ahmad',  'sakel', 'omar'];

const newFr =  friends.splice(1, 2 , 'usman', 'jarir')
console.log(newFr)
console.log(friends)