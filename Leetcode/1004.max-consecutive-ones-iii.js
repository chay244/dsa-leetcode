/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let max = -Infinity;
  let zeroCounter = 0;
  while (right < nums.length) {
    let num = nums[right];
    if (num === 0) {
      zeroCounter++;
    }
    if (zeroCounter > k) {
      let removed = nums[left];
      if (removed === 0) {
        zeroCounter--;
      }
      left++;
    }

    max = Math.max(max, right - left + 1);

    right++;
  }

  return max;
};
// @lc code=end

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);

// 1,1,1,0,0,0,1,1,1,1,0
// 1,1,1,0,0
//   1,1,0,0,0
//     1,0,0,0,1
//       0,0,0,1,1
//         0,0,1,1,1
//           0,1,1,1,1
//             1,1,1,1,0
