const items = [{ price: 40 }, { price: 120 }, { price: 505 }, { price: 350 }];

const calculateTotal = (obj) => {
  let summ = 0;
  items.forEach((item, index, array) => {
    if (item['price'] > 0) {
      summ += item['price'];
    }
    console.log(item['price']);
    console.log(index);
  });
};

console.log(calculateTotal(items));

// console.log(items[0]['price']);

// for (const item of items) {
//   console.log(`Price: ${item.price}`);
// }
