/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let counter = {};
  for (const each of s) {
    counter[each] = (counter[each] || 0) + 1;
  }
  for (const each of t) {
    if (counter[each]) {
      counter[each]--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
