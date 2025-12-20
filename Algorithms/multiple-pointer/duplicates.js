function areThereDuplicates(...arr) {
  arr.sort();
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    console.log(arr[left], arr[right]);
    if (arr[left] === arr[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
}

console.log(areThereDuplicates(4, 1, 2, 3));
