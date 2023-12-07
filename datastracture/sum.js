// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i<arr.lenth; i++) {
//     total += arr[i]
//   }
//   return total
// }

// console.log(sum([23,4,6]));

function double(arr){
    let newArr= []
    for(let i = 0; i< arr.lenth; i++){
        newArr.push(arr[i] *2)
    }
    return newArr
}

console.log(double([2,3,4]))