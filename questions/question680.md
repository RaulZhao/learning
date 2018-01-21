Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.


```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while(leftPointer < rightPointer) {
    if(str[leftPointer] !== str[rightPointer]) {
      let subStr = str.slice(leftPointer+1, rightPointer+1);

      if (isPalindrome(subStr)) {
        return true;
      } else {
        subStr = str.slice(leftPointer, rightPointer);
        return isPalindrome(subStr);
      }
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
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
