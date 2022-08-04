```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    for(let i=0; i < nums.length; i++) {
        let sum = nums[i];
        if(sum === k) {
            count++;
        }
        for(let j=i+1; j < nums.length; j++) {
            sum += nums[j];
            if(sum === k) {
                count++;
            }
        }
    }
    return count;
};

// sum[i][j] = sum[0][j] - sum[0][i]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const sumMap = new Map();
    sumMap.set(0, [0]);
    let sum = 0;
    let res = 0;

    for(let i=0; i < nums.length; i++) {
        sum += nums[i];
        if(sumMap.has(sum-k)) {
            res += sumMap.get(sum-k).length;
        }
        if (sumMap.has(sum)) {
            sumMap.get(sum).push(i);
        } else {
            sumMap.set(sum, [i]);
        }
    }
    return res;
};
```
