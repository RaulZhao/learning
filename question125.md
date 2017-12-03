Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.trim();
    if(s.length === 0) {
        return true;
    }
    let hasCharacter = false;
    let result = false;
    let left = 0;
    let right = s.length - 1;
    while(left <= right) {
        if(!isASCII(s[left])) {
            left++;
        } else if(!isASCII(s[right])) {
            right--;
        } else if(s[left].toLowerCase() === s[right].toLowerCase()) {
            result = true;
            left++;
            right--;
        } else {
            return false;
        }
    }
    return hasCharacter ? result : true;

    function isASCII (char) {
        return Boolean(char.match(/[a-z0-9]/i));
    }
};
```
