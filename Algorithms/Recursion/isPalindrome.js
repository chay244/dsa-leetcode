function isPalindrome(str) {
  let newStr = reverse(str);
  function reverse(str) {
    if (str.length === 0) return "";
    return reverse(str.slice(1)) + str[0];
  }
  return str === newStr;
}

console.log(isPalindrome("ollo"));
