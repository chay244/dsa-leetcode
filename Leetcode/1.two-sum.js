/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const required = target - num;
    if (map.hasOwnProperty(required)) {
      return [map[required], i];
    }
    map[num] = i;
  }
};
// @lc code=end
twoSum([2, 7, 11, 15], 9);
