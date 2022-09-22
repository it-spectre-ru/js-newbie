const items = [{ price: 40 }, { price: -120 }, { price: '505' }, { price: 350 }];

const calculateTotal = (goods) => {
  let total = 0;
  for (const item of goods) {
    if (typeof item.price === 'number') {
      total += item.price;
    }
  }
  return total;
};

console.log(calculateTotal(items));
