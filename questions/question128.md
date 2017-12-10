Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

```js
// O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map();
    const visited = {};
    let result = 0;

    nums.forEach((val) => {
        map.set(val, 1);
    });
    nums.forEach((val, index) => {
        if(!visited[val]) {
            visited[val] = true;
            let leftIndex = val - 1;
            while(map.has(leftIndex)) {
                visited[leftIndex] = true;
                map.set(val, map.get(val) + 1);
                leftIndex = leftIndex - 1;
            }

            let rightIndex = val + 1;
            while(map.has(rightIndex)) {
                visited[rightIndex] = true;
                map.set(val, map.get(val) + 1);
                rightIndex = rightIndex + 1;
            }
            result = Math.max(result, map.get(val));
        }
    });
    return result;
};

//O(nlogn)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b) => a-b);
    let result = 0;
    const dp = [];

    for(let i=0; i < nums.length; i++) {
        if(i === 0) {
            dp[0] = 1;
        } else {
            if((nums[i] - nums[i-1]) === 1) {
                dp[i] = dp[i-1] + 1;
            } else if(nums[i] === nums[i-1]) {
                dp[i] = dp[i-1];
            } else {
                dp[i] = 1;
            }
        }
        result = Math.max(dp[i], result);
    }
    return result;
};
```
