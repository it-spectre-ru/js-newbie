const goods = new Set(['Laptop', 'Keyboard', 'Mouse']);
const added = new Set(['Textile', 'Bag']);

const basket = new Set([...goods, ...added]);

console.log(basket);
