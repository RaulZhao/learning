3Sum
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.


```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function quickSort(array) {
  let arr = array.slice(0);

  function sort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (pivot < arr[i]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    return sort(left).concat(pivot, sort(right));
  }

  return sort(arr);
}

var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    let numArr = quickSort(nums);
    let i, j;
    let result = [];

    for(let k=0; k < numArr.length-2; k++) {
        if (k > 0 && numArr[k] === numArr[k-1]) {
            continue;
        }
        i = k + 1;
        j = numArr.length - 1;
        while(i < j) {
            if ((i > k + 1 && numArr[i] === numArr[i-1]) && (j < numArr.length - 1 && numArr[j] === numArr[j+1])) {
                i++;
                j--;
                continue;
            }
            if (numArr[k] + numArr[i] + numArr[j] === 0) {
                result.push([numArr[k], numArr[i], numArr[j]]);
                i++;
                j--;
            } else if (numArr[k] + numArr[i] + numArr[j] < 0) {
                i++;
            } else {
                j--;
            }
        }
    }
    return result;
};
```
