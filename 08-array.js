const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 500 },
    { name: 'HDMI', price: 10 },
  ],
  Texttile: [{ name: 'Bag', price: 50 }],
};

const list1 = purchase.Electronics.filter((item) => item.price > 50);

console.log(list1);
