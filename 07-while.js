const sum = (...args) => {
  let value = 0;
  while (args.length > 0) {
    value += args.pop();
  }
  return value;
};

console.log(sum(1, 2, 3, 4, 5));
