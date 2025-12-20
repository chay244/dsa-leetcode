/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  //   if (nums.length < 2) {
  //     return nums.length ? nums[0] : 0;
  //   }
  let windowSum = 0;
  let start = 0;
  let end = k;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + nums[i];
  }
  let maxSum = windowSum;
  while (end < nums.length) {
    windowSum = windowSum + nums[end] - nums[start];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
    start++;
    end++;
  }
  return maxSum / k;
};

// @lc code=end
// findMaxAverage([1, 12, -5, -6, 50, 3], 4);
findMaxAverage([4, 0, 4, 3, 3], 5);
