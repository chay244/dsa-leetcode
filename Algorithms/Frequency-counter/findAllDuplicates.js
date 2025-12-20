function findAllDuplicates(arr) {
  let lookup = {};
  let result = [];
  for (let e of arr) {
    lookup[e] = (lookup[e] || 0) + 1;
    if (lookup[e] > 1) {
      result.push(e);
    }
  }
  return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
