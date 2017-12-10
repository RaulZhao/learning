Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]


```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let left = n - 1;
    let right = n;
    let result = [];
    let temp = '(';

    if (left < 0) {
        return [];
    }

    function compose(left, right, temp, result) {
        if (left === 0 && right === 0) {
            result.push(temp);
            return;
        }
        if (left < 0 || right < 0 || right < left) {
            return;
        }
        compose(left - 1, right, temp + '(', result)
        compose(left, right - 1, temp + ')', result)
    }

    compose(left, right, temp, result);
    return result;
};
```
