const prices = [10, 1500, 100, 50];

const price = prices.find((item) => item > 100);

if (prices.includes(100)) console.log('100 is here');

console.log({ price });
