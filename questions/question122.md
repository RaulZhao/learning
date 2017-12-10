Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2) {
      return 0;
  }
  const sum = [];
  sum[0] = 0;
  for (let i=1; i < prices.length; i++) {
  	if(prices[i] > prices[i-1]) {
  		sum[i] = sum[i-1] + prices[i] - prices[i-1];
  	} else {
  		sum[i] = sum[i-1];
  	}
  }
  return sum[prices.length-1];
};
```
