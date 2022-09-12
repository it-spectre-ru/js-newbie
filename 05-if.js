const calculateSubtotal = (goods) => {
  let amount = 0;
  for (const item of goods) {
    if (item.price < 0) throw 'Negative price';
    else amount += item.price;
  }
  return amount;
};

// Прием Return early

if (item.price < 0) return;
amount += item.price;

if (item.price < 0) {
  return;
}
amount += item.price;

// Вынос промежуточных переменных

const goods = order[groupName];
if (!goods) return;
const len = goods.length;
if (len > 0) {
  total += calculateSubtotal(goods);
  count += len;
}
