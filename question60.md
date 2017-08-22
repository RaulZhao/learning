The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.


```js
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const result = [];
    const visitedArr = [];
    let isMatched = false;

    function permutation(level) {
        if (isMatched) {
            return;
        }
        if (level === n) {
            result.push(visitedArr.join(""));
            if (result.length  === k) {
                isMatched = true;
            }
            return;
        }

        for(let i=1; i <= n; i++) {
            if(visitedArr.indexOf(i) < 0) {
                visitedArr.push(i);
                permutation(level+1);
                visitedArr.pop();
            }
        }
    }

    permutation(0);
    return result[k-1];
};
```
