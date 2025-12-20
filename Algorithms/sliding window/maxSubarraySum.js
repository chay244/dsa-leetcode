function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum = tempSum + arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    maxSum = Math.max(maxSum, tempSum);
    console.log(i, num);
    tempSum = tempSum + arr[num] - arr[i - num];
    // console.log(arr[i]);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// function maxSubarraySum(arr, num) {
//   // add whatever parameters you deem necessary - good luck!
//   if (arr.length < num) {
//     return null;
//   }
//   let sum = 0;
//   let newSum = 0;
//   let res = 0;
//   for (let i = 0; i < num; i++) {
//     sum = arr[i] + sum;
//   }
//   for (let i = num; i < arr.length; i++) {
//     newSum = sum + arr[i] - arr[i - num];
//     res = Math.max(res, newSum);
//     sum = newSum;
//   }
//   return res;
// }
