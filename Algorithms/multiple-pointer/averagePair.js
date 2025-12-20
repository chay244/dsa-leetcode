function averagePair(arr, num) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;
    if (avg === num) {
      return true;
    }
    if (avg > num) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
console.log(averagePair([], 4));
