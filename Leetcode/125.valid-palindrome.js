/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let reg = /[^a-zA-Z\d]/;
  while (left < right) {
    if (reg.test(s[left])) {
      left++;
      continue;
    }
    if (reg.test(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

isPalindrome("ab_a");

// amanaplanacanalpanama
