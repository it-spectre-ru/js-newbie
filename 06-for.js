const basket = {
  Laptop: 1500,
  Mouse: 300,
  Keyboard: 10,
};

for (const name of Object.keys(basket)) {
  const price = basket[name];
  console.log(`Price of ${name} is ${price}`);
}
