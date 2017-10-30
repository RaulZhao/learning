Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note:
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxVal = Number.MIN_VALUE;
    const window = [];
    const res = [];

    for(let i=0; i < nums.length; i++) {
        if(window.length == 0) {
            window.push(i);
        } else {
            let k = 0;
            while(nums[window[k]] > nums[i]) {
                k++;
            }
            window.splice(k, window.length, i);
        }
        if(window[0] <= i-k) {
            window.shift();
        }
        if(i+1 >= k){
            res.push(nums[window[0]]);
        }
    }
    return res;
};
```
