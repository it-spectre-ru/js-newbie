const basket = [
  { name: 'Laptop', price: 1500 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 50 },
];

for (const { name, price } of basket) {
  console.log(`Prices: ${name} is ${price}`);
}
