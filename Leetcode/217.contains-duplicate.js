/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let counter = {};
  for (const e of nums) {
    counter[e] = (counter[e] || 0) + 1;
    if (counter[e] > 1) {
      return true;
    }
  }
  return false;
};
// @lc code=end
