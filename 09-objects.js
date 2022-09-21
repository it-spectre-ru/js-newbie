const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};

console.log(JSON.stringify(purchase));

const json = JSON.stringify(purchase);
const obj = JSON.parse(json);

console.log('#####', obj);
