function findLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }
  let start = 0;
  let end = 1;
  let lookup = {};
  let result = "";
  let tempResult = "";
  for (let key of str) {
    lookup[key] = (lookup[key] || 0) + 1;
    if (lookup[key] < 2) {
      if (str[start] !== str[end]) {
        tempResult = tempResult + str[start];
        start++;
        end++;
      }
    } else {
      lookup = {};
      lookup[key] = (lookup[key] || 0) + 1;
      result = result.length > tempResult.length ? result : tempResult;
      tempResult = str[start];
    }
  }
}

// console.log(findLongestSubstring(""));
console.log(findLongestSubstring("thecatinthehat"));
// end = 8
// start = 7
