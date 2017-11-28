coin: 1, 3, 5
Give a number, try to match the number with the lest coins.
```js
unction minCoins(n) {
  const dp = [];
  dp[0] = 0;

  for(let i=1; i <= n; i++) {
    if(i <= 0) {
      return 0;
    } else if(i < 3) {
      dp[i] = dp[i-1]+1;
    } else if(i < 5) {
      dp[i] = Math.min((dp[i-1] + 1), (dp[i-3] + 1));
    } else {
      dp[i] = Math.min((dp[i-1] + 1), (dp[i-3] + 1), (dp[i-5] + 1));
    }
  }
  return dp[n];
}
```
