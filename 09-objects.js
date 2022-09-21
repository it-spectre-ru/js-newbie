const basket = {
  Laptop: 1500,
  Keyboard: 100,
  HDMI: 10,
};

const key = 'Mouse1';
basket[key] = 25;

delete basket['Laptop'];

console.log(basket);
