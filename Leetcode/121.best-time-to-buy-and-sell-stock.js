/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const current_price = prices[i];
    if (current_price < buy) {
      buy = current_price;
    } else {
      profit = Math.max(profit, current_price - buy);
    }
  }

  return profit;
};
// @lc code=end
