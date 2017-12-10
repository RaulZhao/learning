Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let minVal = Number.MAX_VALUE;
    let maxVal = Number.NEGATIVE_INFINITY;
    let beginIndex = -1;
    let lastIndex = -1;
    let indexList = [];
    function findLeftBoundary(index, val) {
        let res = 0;
        for(let i=index-1; i >= 0; i--) {
            if (val >= nums[i]) {
                res = i+1;
                return res;
            }
        }
        return res;
    }
    function findRightBoundary(index, val) {
        let res = nums.length - 1;
        for(let i=index+1; i < nums.length; i++) {
            if (val <= nums[i]) {
                res = i-1;
                return res;
            }
        }
        return res;
    }

    for(let i=0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i+1]) {
            indexList.push(i);
        }
    }

    if(indexList.length < 1) {
        return 0;
    } else if(indexList.length === 1) {
        beginIndex = indexList[0];
        lastIndex = beginIndex + 1;
    } else {
        beginIndex = indexList[0];
        lastIndex = indexList[indexList.length - 1] + 1;
    }

    for(let i=beginIndex; i <= lastIndex; i++) {
        minVal = Math.min(minVal, nums[i]);
        maxVal = Math.max(maxVal, nums[i]);
    }

    return findRightBoundary(lastIndex, maxVal) - findLeftBoundary(beginIndex, minVal) + 1;
};
```
