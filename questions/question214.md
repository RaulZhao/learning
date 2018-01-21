Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".

```js
/**
 * @param {string} s
 * @return {string}
 */
// Brutal Solution
var shortestPalindrome = function(s) {
    let res = s;
    let pos = s.length-1;

    while(!isPalindrome(res) && pos >= 0) {
        res = res.slice(0, s.length - pos - 1) + s[pos] + res.slice(s.length - pos - 1);
        pos--;
    }
    return res;
};

function isPalindrome(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while(leftPointer < rightPointer) {
    if(str[leftPointer] !== str[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}
```
