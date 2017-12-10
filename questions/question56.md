Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18]

```js
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    const result = [];
    const sortedIntervals = intervals.sort(function(a, b) {
        if(a.start > b.start) {
            return 1;
        } else if(a.start === b.start) {
            return 0;
        } else {
            return -1;
        }
    });

    for(let i=1; i < sortedIntervals.length; i++) {
        let current = sortedIntervals[i];
        let previous = sortedIntervals[i-1];

        if(current.start <= previous.end) {
            current.start = previous.start;
            current.end = Math.max(previous.end, current.end);
        } else {
            result.push(previous);
        }

        if(i === sortedIntervals.length-1) {
            result.push(current);
        }
    }

    return result;
};
```
