const items = [
  { name: "Rice", price: "20" },
  { name: "fish", price: "20" },
  { name: "Adash", price: "20" },
  { name: "Milk", price: "20" },
  { name: "Meet", price: "20" },
  { name: "Vegetavle", price: "20" },
  { name: "Rice", price: "20" },
  { name: "Rice", price: "20" },
  { name: "Rice", price: "20" },
  { name: "Rice", price: "20" },
  { name: "Rice", price: "20" },
  { name: "Rice", price: "20" },
  { name: "Rice", price: "20" },
];

const itemList = items.map((item) =>{
  return item;
})

console.log(itemList[0].name, itemList[3].price)

// const items = [
//   { name: "PS4", price: 200 },
//   { name: "iPhone", price: 450 },
//   { name: "iPod", price: 80 },
//   { name: "Watch", price: 150 },
//   { name: "MacBook", price: 900 },
//   { name: "TV", price: 600 },
//   { name: "Keyboard", price: 50 },
//   { name: "iPad", price: 300 },
// ];
// const ItemName = items.map((item) => {
//   return item;
// });
// console.log(ItemName[2]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}

console.log(persons);
