Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

Subscribe to see which companies asked this question.


```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let predefined = "([{}])";
    let temp = [];
    let isMatch = function(a, b) {
        let res = false;
        switch(a) {
            case "(":
                if (b === ")") {
                    res = true;
                } else {
                    res = false;
                }
                break;
            case "[":
                if (b === "]") {
                    res = true;
                } else {
                    res = false;
                }
                break;
            case "{":
                if (b === "}") {
                    res = true;
                } else {
                    res = false;
                }
        }
        return res;
    };

    for(let i=0; i<s.length; i++) {
        if(predefined.indexOf(s[i]) > 2) {
            if (!isMatch(temp.pop(), s[i])) {
                return false;
            }
        } else {
            temp.push(s[i]);
        }
    }

    if (temp.length === 0) {
        return true;
    } else {
        return false;
    }
};
```
