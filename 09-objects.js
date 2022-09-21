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

const goodsTotal = (goods) => {
  return { goods, total: calcalateTotal(goods) };
};

const order = goodsTotal(basket);

console.log(order);
