const items = [{ price: 250 }, { price: -150 }, { price: 150 }, { price: 500 }];

let result = items.map(({ price }) => price);

console.log(result);
