const user = {
  fairstName: "Omar",
  lastName: "Faruk",
  messseg: function () {
    console.log(
      `My name is ${this.fairstName} and Product Name is ${product.mobile}`
    );
  },
};

const product = {
  mobile: "Samsung",
  price: 25,
};

user.messseg();
