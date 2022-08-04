The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

```js
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let duplicated = 1;
    let str = "1";

    for(let i=1; i < n; i++) {
        let tmp = [];
        for(let j=0; j < str.length; j++) {
            if (j === str.length - 1) {
                tmp.push(duplicated.toString());
                tmp.push(str[j]);
                duplicated = 1;
            } else {
                if (str[j] === str[j+1]) {
                    duplicated++;
                } else {
                    tmp.push(duplicated.toString());
                    tmp.push(str[j]);
                    duplicated = 1;
                }
            }
        }
        str = tmp.join('');
    }
    return str;
};
```
