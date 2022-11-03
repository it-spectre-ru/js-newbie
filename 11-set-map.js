const goods = ['1', '2', '3'];

const basket = new Set(goods);

basket.delete('3');

console.log(basket);
