/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let element = null;
  let counter = 0;

  for (const num of nums) {
    if (counter === 0) {
      element = num;
    }
    if (element === num) {
      counter++;
    } else {
      counter--;
    }
  }
  return element;
};
// @lc code=end
majorityElement([2, 2, 1, 1, 1, 2, 2]);
// {2:4,1:3}
