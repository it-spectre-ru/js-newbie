let i = 0;
while (i < 10) {
  i++;
  console.log('Priv', i);
  if (i === 5) break;
  console.log('World');
}
console.log('End');
