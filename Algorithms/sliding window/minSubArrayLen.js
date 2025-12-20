function minSubArrayLen(arr, num) {
  let pointer = 0;
  let sum = 0;
  let minLen = Infinity;

  for (i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
    while (sum >= num) {
      let winLen = i - pointer + 1;
      minLen = Math.min(winLen, minLen);
      sum = sum - arr[pointer];
      pointer++;
    }
  }

  return minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
