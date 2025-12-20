function sameFrequency(num1, num2) {
  let counter = {};

  for (let e of num1.toString()) {
    counter[e] = (counter[e] || 0) + 1;
  }
  console.log(counter);
  for (let e of num2.toString()) {
    if (counter[e]) {
      counter[e]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(22, 222));
