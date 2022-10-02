const items = [{ price: 250 }, { price: 150 }];

const calculateTotal = (goods) => {
  let total = 0;
  for (const { price } of goods) {
    if (typeof price !== 'number') continue;
    if (price > 0) total += price;
  }
  return total;
};

console.log(calculateTotal(items));
