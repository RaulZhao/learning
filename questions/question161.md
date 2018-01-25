Given two strings S and T, determine if they are both one edit distance apart.

```js
function isOneEditDistance(s, t) {
    const s_length = s.length;
    const t_length = t.length;
    
    if(s_length === t_length) {
        return isOneModified(s, t);
    }
    if(s_length === t_length + 1) {
        return isOneAddOrDelete(t, s);
    }
    if(t_length === s_length + 1) {
        return isOneAddOrDelete(s, t);
    }
    return false;

    function isOneModified(str1, str2) {
        let count = 0;
        for(let i=0; i < str1.length; i++) {
            if(str1[i] !== str2[i]) {
                count++;
            }
            if(count > 1) {
                return false;
            }
        }
        return true;
    }
    function isOneAddOrDelete(short, long) {
        let count = 0;
        let shortPointer = 0;
        let longPointer = 0;

        while(shortPointer < short.length) {
            if(short[shortPointer] !== long[longPointer]) {
                count++;
                longPointer++;
            } else {
                shortPointer++;
                longPointer++;
            }
            if(count > 1) {
                return false;
            }
        }
        return true;
    }
}
```