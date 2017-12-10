Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]


```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let visited = {};
    let result = [];
    let tmpArray = [];
    candidates.sort(function(a, b) {
        return a-b;
    });

    function findItem(array, currentTarget, deep) {
        let currentCandidates = [];
        if(currentTarget < 0) {
            return;
        }

        for(let i=0; i < array.length; i++) {
            if (array[i] < currentTarget) {
                currentCandidates.push(array[i]);
            } else if(array[i] === currentTarget) {
                tmpArray.push(array[i]);
                let tmp = tmpArray.slice(0);

                tmp.sort(function(a, b) {
                    return a-b;
                });
                if (!visited[tmp.join("")]) {
                    result.push(tmp);
                    visited[tmp.join("")] = 1;
                }
                tmpArray.pop();
            }
        }
        if (currentCandidates.length === 0) {
            return;
        }

        for(let k=deep; k < currentCandidates.length; k++) {
            tmpArray.push(currentCandidates[k]);
            let tmpRemoved = currentCandidates.splice(k,1);
            findItem(currentCandidates, currentTarget - tmpRemoved, k);
            tmpArray.pop();
            currentCandidates.splice(k, 0, tmpRemoved);
        }
    }

    findItem(candidates, target, 0);
    return result;
};
```
