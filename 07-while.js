const sum = (...args) => {
  if (args.length === 0) return 0;
  let value = 0;
  do {
    value += args.pop();
  } while (args.length > 0);
  return value;
};

console.log(sum(1, 2, 3, 4, 5));
