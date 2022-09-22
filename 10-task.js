const items = [{ price: 40 }, { price: 120 }, { price: 505 }, { price: 350 }];

const calculateTotal = (obj) => {
  items.forEach((item, index, array) => {
    console.log(item['price']);
  });
};

console.log(calculateTotal(items));

// console.log(items[0]['price']);

// for (const item of items) {
//   console.log(`Price: ${item.price}`);
// }
