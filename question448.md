Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]


```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let n = nums.length;
    for(let i=0; i <= n; i++) {
        result.push(i);
    }

    for(let k=0; k < n; k++) {
        result[nums[k]] = 0;
    }
    let res = [];
    for(let j=0; j <=n; j++) {
        if(result[j] > 0) {
            res.push(result[j]);
        }
    }
    return res;
};
```

#without extra space and in O(n) runtime
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let n = nums.length;
    for(let i=0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for(let k=0; k < n; k++) {
        if(nums[k] > 0) {
            result.push(k+1);
        }
    }

    return result;
};
```
