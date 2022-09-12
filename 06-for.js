const basket = {
  Laptop: 1500,
  Mouse: 300,
  Keyboard: 10,
};

for (const [name, price] of Object.entries(basket)) {
  console.log(`Price of ${name} is ${price}`);
}
