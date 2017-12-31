Given an array(Integer) and threshold, find the median of the elements which value is equal or greater than the threshold.

```js
function findMedian(array, threshold) {
  array.sort((a, b) => a-b);

  let thresholdIndex = binarySearch(array, threshold, 0, Math.max(array.length - 1));
  const len = array.length - thresholdIndex;

  if (len === 0) {
    return -1;
  } else {
    if(len%2 === 0) {
      return (array[thresholdIndex + len/2 - 1] + array[thresholdIndex + len/2])/2;
    } else {
      return array[thresholdIndex + Math.floor(len/2)];
    }
  }

  // find the first index which the value is equal or greater than the threshold
  function binarySearch(array, target, start, end) {
    if (start === end) {
      return array[start] < target ? start+1 : start;
    }
    let mid = start + Math.floor((end - start)/2);
    if (array[mid] < target) {
      return binarySearch(array, target, Math.min(mid+1, end), end);
    } else {
      return binarySearch(array, target, start, Math.max(start, mid-1));
    }
  }
}
```
