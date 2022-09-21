const basket = {
  Laptop: 1500,
  Keyboard: 100,
};

const calcalateTotal = (obj) => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
};

const addTotal = (obj) => {
  return { ...obj, total: calcalateTotal(obj) };
};

const order = addTotal(basket);

console.log(order);
