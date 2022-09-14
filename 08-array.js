const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 500 },
    { name: 'HDMI', price: 10 },
  ],
  Texttile: [{ name: 'Bag', price: 50 }],
};

const items = purchase.Electronics.pop();

console.log(items);
console.log(purchase.Electronics);
