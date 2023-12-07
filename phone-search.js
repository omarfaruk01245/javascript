const phones = [
  { id: 1, pName: "iphone 15 pro max", price: 20001 },
  { id: 2, pName: "nokia 15 pro max", price: 20001 },
  { id: 3, pName: "Nokia 15 pro max", price: 20001 },
  { id: 4, pName: "morala 15 pro max", price: 20001 },
  { id: 5, pName: "symphony 15 pro max", price: 20001 },
  { id: 6, pName: "samsung 15 pro max", price: 20001 },
  { id: 7, pName: "iphone 15 pro max", price: 20001 },
  { id: 8, pName: "iphone 15 pro max", price: 20001 },
  { id: 9, pName: "iphone 15 pro max", price: 20001 },
  { id: 10, pName: "iphone 15 pro max", price: 20001 },
  { id: 11, pName: "oppo 15 pro max", price: 20001 },
  { id: 12, pName: "iphone 15 pro max", price: 20001 },
];

const findingPhone = (phones, search) => {
  const matchingPhones = [];

  for (const phone of phones) {
    // console.log(phone.pName.includes(search))
    // console.log(phone.pName)
    if (phone.pName.toLowerCase().includes(search.toLowerCase())) {
      matchingPhones.push(phone);
    }
  }
  return matchingPhones;
};

const result = findingPhone(phones, "nokia");
console.log(result);


// const machingProducts =()=>{

// }

// machingProducts(phones)