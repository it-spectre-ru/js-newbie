const basket = {
  Laptop: 1500,
  Mouse: 300,
  Keyboard: 10,
};

for (const key in basket) {
  const price = basket[key];
  console.log(`Price of ${key} is ${price}`);
}
