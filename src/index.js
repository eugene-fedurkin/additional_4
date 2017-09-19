module.exports = function multiply(first, second) {

  let products = [];
  for (let i = first.length - 1; i >= 0; i--) {
    let product = 0;
    for (let j = 0; j < +first[i]; j++) {
      product = add(product, second);
    }
    for (let k = 0; k < first.length - 1 - i; k++) {
      product = product + '0';
    }
    products.push(product);
  }
  let result = 0;
  for (let product of products) {
    result = add(result, product);
  }
  return result;


  function add(first, second) {
    let result = '0';
    let arr = [];
    let shift = false;
    let length = first.length > second.length ? first.length : second.length;
    let sum;
    for (let i = 0; i < length; i++) {
      if (second[second.length - 1 - i] && !first[first.length - 1 - i]) {
        sum = +second[second.length - 1 - i] + 0;
      }
      if (!second[second.length - 1 - i] && first[first.length - 1 - i]) {
        sum = 0 + +first[first.length - 1 - i];
      }
      if (second[second.length - 1 - i] && first[first.length - 1 - i]) {
        sum = +second[second.length - 1 - i] + +first[first.length - 1 - i];
      }
      sum += shift ? 1 : 0;
      arr.unshift(sum % 10);
      shift = sum > 9;
      
    }
    result = arr.join('');
    shift ? result = '1' + result : result;
    return result;
  }
}
