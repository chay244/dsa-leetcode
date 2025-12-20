function bubbleSort(arr, comparator) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (typeof comparator === "function") {
        let result = comparator(arr[j], arr[j + 1]);
        if (result > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwap = false;
        }
      } else {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwap = false;
        }
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([2, 5, 1, 3, 7]));

// length - 5 > Comps 4
// each iter -1

//  [2,1,3,5,7]
//  [1,2,3,5,7]

function bubbleSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!

  let sortOver = true;
  for (let i = arr.length; i > 0; i--) {
    sortOver = true;
    for (let j = 0; j < i - 1; j++) {
      console.log("Comparison", arr[j], arr[j + 1]);
      if (typeof comparator !== "function") {
        if (arr[j] > arr[j + 1]) {
          sortOver = false;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else {
        const res = comparator(arr[j], arr[j + 1]);
        if (res > 0) {
          sortOver = false;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    if (sortOver) {
      break;
    }
  }
  return arr;
}
