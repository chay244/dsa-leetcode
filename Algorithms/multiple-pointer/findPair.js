function findPair(arr, num) {
  if (!arr.length) {
    return false;
  }

  let start = 0;
  let next = 1;

  while (next <= arr.length - 1) {
    if (arr[start] - arr[next] !== num || arr[next] - arr[start] !== num) {
      if (next === arr.length - 1) {
        start++;
        next = start;
      }
      next++;
    } else {
      return true;
    }
  }
}

console.log(findPair([6, 1, 4, 10, 2, 4], 22));
// console.log(findPair([-4, 4], -8));
