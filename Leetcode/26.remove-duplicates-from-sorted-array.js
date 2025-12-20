/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pointer = 1;
  let spot = 1;
  let value = nums[0];

  while (pointer < nums.length) {
    if (nums[pointer] !== value) {
      value = nums[pointer];
      nums[spot] = nums[pointer];
      spot++;
    }
    pointer++;
  }

  return spot;
};

// @lc code=end
console.log(removeDuplicates([[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]]));
// [0,0,1,1,1,2,2,3,3,4] 1
// [0,1,0,1,1,2,2,3,3,4]
