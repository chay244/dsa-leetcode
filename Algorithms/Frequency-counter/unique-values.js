function countUniqueValues(numArr) {
  let counter = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i + 1] - numArr[i] !== 0) {
      counter++;
    }
  }
  return counter;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
