Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length < 2) {
        return;
    }
    let leftIndex = findLeftExchangedNum(nums);
    let rightIndex;
    
    if(leftIndex < 0) {
        nums.reverse();
    } else {
        let minDifference = Number.MAX_VALUE;
        
        for(let i=leftIndex+1; i < nums.length; i++) {
            let difference = nums[i] - nums[leftIndex];
            if(difference > 0 && difference <= minDifference) {
                minDifference = difference;
                rightIndex = i;
            }
        }
        [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]]

        // reverse from leftIndex+1 to the end
        let left = leftIndex + 1;
        let right = nums.length - 1;
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
};

// Scan from right to left, get the first element which less than its right element
function findLeftExchangedNum(nums) {
    for(let i=nums.length-2; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            return i;
        }
    }
    return -1;
}
```