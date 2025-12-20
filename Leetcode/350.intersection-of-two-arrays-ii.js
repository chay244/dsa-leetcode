/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  const result = [];

  while (i < nums1.length && j < nums2.length) {
    console.log(nums1[i], nums2[j]);
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
};
// @lc code=end

intersect([4, 5, 9], [4, 4, 8, 9, 9]);
// [4,5,9] [4,4,8,9,9]
// 4 4
// 5 4
// 5 8
// 9 8
// 9 9
