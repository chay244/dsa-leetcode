function areThereDuplicates(...arr) {
  let counter = {};
  for (let e of arr) {
    counter[e] = (counter[e] || 0) + 1;
    if (counter[e] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3));
