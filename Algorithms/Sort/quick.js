function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    const element = arr[i];
    if (pivot > element) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  console.log(arr);
  return swapIndex;
}

function swap(arr, firstIndex, secondIndex) {
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 3, 1, 6, 7, 9, 2]));

// [4, 8, 3, 1, 6, 7, 9, 2]
// [
//   2, 3, 1, 4,
//   6, 7, 9, 8
// ]
