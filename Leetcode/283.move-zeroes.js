/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num) {
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      pointer++;
    }
  }
};
// @lc code=end

moveZeroes([0, 1, 0, 3, 12]);

// [0,1,0,3,12] 0
// [1,0,0,3,12] 1
