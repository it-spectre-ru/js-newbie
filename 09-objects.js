const basket = {
  Laptop: 1500,
  Keyboard: 100,
  Mouse: 25,
};

const calcalateTotal = (obj) => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
};

const mixTotal = (obj) => {
  obj.total = calcalateTotal(obj);
};

mixTotal(basket);

console.log(basket);
