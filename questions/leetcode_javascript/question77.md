```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const input = [];
    for(let i=1; i <= n; i++) {
        input.push(i);
    }

    function backTracking(arr, layer, tmp) {
        if(layer <= 0) {
            result.push(tmp.slice(0));
            return;
        }
        for(let i=0; i < arr.length; i++) {
            tmp.push(arr[i]);
            backTracking(arr.slice(i+1), layer-1, tmp);
            tmp.pop();
        }
    }
    backTracking(input, k, []);
    return result;
};
```
