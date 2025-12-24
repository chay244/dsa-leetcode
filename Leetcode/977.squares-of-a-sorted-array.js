/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let pos = nums.length - 1;

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    if (rightSq > leftSq) {
      result[pos] = rightSq;
      right--;
    } else {
      result[pos] = leftSq;
      left++;
    }
    pos--;
  }
  return result;
};

// @lc code=end

// sortedSquares([-5, -3, -2, -1]);
sortedSquares([-4, -1, 0, 3, 10]);
// [-4,-1,0,3,10] l0 ɽ4
//
