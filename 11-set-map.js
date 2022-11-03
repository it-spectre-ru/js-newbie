const order = new Set(['Laptop', 'Keyboard', 'Mouse']);
const stock = new Set(['Textile', 'Keyboard']);

const basket = new Set([...order].filter((item) => stock.has(item)));

console.log(basket);
