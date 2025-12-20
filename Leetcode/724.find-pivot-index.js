/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;
  let leftSum = 0;

  for (const num of nums) {
    totalSum = totalSum + num;
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let rightSum = totalSum - leftSum - num;
    if (rightSum === leftSum) {
      return i;
    }
    leftSum = leftSum + num;
  }
  return -1;
};
// @lc code=end

pivotIndex([-1, -1, -1, 1, 1, 1]);
// 28 - 0 - 1 = 27,1
// 28 - 1 - 7 = 20, 8
// 28 - 8 - 3 = 17, 11
// 28 - 11 - 6 = 11, 17
