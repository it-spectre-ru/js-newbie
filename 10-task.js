const items = [{ price: -50 }, { price: 50 }, { price: '100' }, { price: 100 }];

// let result = items.map(({ price }) => {
//   price;
//   if (price > 0) console.log(price);
// });

const calculateTotal = items.reduce((total, item) => {
  if (item.price > 0 && typeof item.price === 'number') return (total += item.price);
  return total;
}, 0);

console.log(calculateTotal);
// console.log(result);
