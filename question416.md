Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((sum, i) => sum+i);

    if ((sum % 2) > 0) {
        return false;
    }
    const target = sum/2;

    function backTracking(arr, n) {
        if(arr.length < 1) {
            return false;
        }
        const len = arr.length;
        for(let i=0; i < len; i++) {
            if (arr[i] === n) {
                return true;
            }
            if (arr[i] > n) {
                return false;
            }
            if (backTracking(arr.slice(0, i).concat(arr.slice(i+1, len)), n - arr[i])) {
                return true;
            }
        }
        return false;
    }

    return backTracking(nums.sort((a,b) => a < b), target);
};
```
