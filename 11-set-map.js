const order = new Set(['Laptop', 'Keyboard', 'Mouse']);
const sold = new Set(['Textile', 'Keyboard']);

const basket = new Set([...order].filter((item) => !sold.has(item)));

console.log(basket);
