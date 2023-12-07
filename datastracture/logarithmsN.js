// function logarithmsN(n) {
//   while (n > 1) {
//     console.log(n);
//     n /= 2;
//   }
//   console.log("Done");
// }

// logarithmsN(16);

// function logarithmsN(n) {
//   while (n > 1) {
//     console.log(n);
//     n /= 2;
//   }
//   console.log("Done");
// }

// logarithmsN(36);

function anathorLogN(n) {
  if (n <= 1) {
    console.log(n);
    return
  }
  console.log(n);
  anathorLogN(n / 2);
}

anathorLogN(8);
