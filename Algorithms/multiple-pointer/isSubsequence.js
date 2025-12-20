function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let start = 0;
  for (let char of str2) {
    if (char === str1[start]) {
      start++;
    }
    if (str1.length === start) {
      return true;
    }
  }
  return false;
}

// console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("abc", "acb"));
