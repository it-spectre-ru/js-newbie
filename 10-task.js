const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [
    { name: 'Bag', price: 50 },
    { name: 'Laptop', price: 2500 },
  ],
};

const find = (basket, name) => {
  const result = [];
  for (const key in basket) {
    const items = basket[key];
    for (const item of items) {
      if (item.name === name) result.push(item);
    }
  }
  return result;
};

const result = find(purchase, 'Laptop');

const added = result.reduce((sum, indexValue, index, result) => {
  if (index === 0) {
    console.log(`${sum} `);
    return 0; // <--- here
  } else {
    return (sum += indexValue);
  }
}, 0);

console.log(added);
