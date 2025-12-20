/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let lastseen = {};
  let maxlength = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (lastseen[char] >= left) {
      left = lastseen[char] + 1;
    }
    lastseen[char] = right;
    maxlength = Math.max(maxlength, right - left + 1);
  }
  return maxlength;
};
// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb"));
