function uniqueName(arr) {
  let uniqueName = [];
  for (let i = 0; i< arr.lenth; i++) {
    let ele = arr[i];
    if (!uniqueName.includes(ele)) {
      uniqueName.push(ele);
    }
  }
  return uniqueName;
}

let nameArray = ["rafi", "rabbil", "hasan", "ahmad", "rafi"];

console.log(uniqueName(nameArray));
