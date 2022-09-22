const items = [{ price: 40 }, { price: -120 }, { price: '505' }, { price: 350 }];

const calculateTotal = (goods) => {
  let total = 0;
  for (const item of goods) {
    const { price } = item;
    if (typeof price === 'number' && price > 0) {
      total += price;
    }
  }
  return total;
};

console.log(calculateTotal(items));
