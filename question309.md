Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) {
        return 0;
    }
    const buy = [];
    const dp = [];

    buy[0] = -prices[0];
    dp[0] = 0;
    buy[1] = Math.max(buy[0], -prices[1]);
    dp[1] = Math.max(dp[0], (buy[0]+prices[1]));

    for(let i=2; i < prices.length; i++) {
        buy[i] = Math.max(buy[i-1], (dp[i-2] - prices[i]));
        dp[i] = Math.max(dp[i-1], (buy[i-1] + prices[i]));
    }
    return dp[prices.length - 1];
};
```
