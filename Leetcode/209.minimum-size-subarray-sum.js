/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let sum = 0;

  let right = 0;
  let left = 0;

  while (right < nums.length) {
    const num = nums[right];
    sum = sum + num;
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum = sum - nums[left];
      left++;
    }
    right++;
  }
  return min === Infinity ? 0 : min;
};
// @lc code=end
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
