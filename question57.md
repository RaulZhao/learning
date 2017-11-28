Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    let insertIndex = 0;
    const result = [];

    intervals.forEach((interval, index) => {
        if(interval.end < newInterval.start) {
            result.push(interval);
            insertIndex += 1;
        } else if(interval.start > newInterval.end) {
            result.push(interval);
        } else if (newInterval.start <= interval.end || newInterval.end >= interval.start) {
            let startNum = Math.min(interval.start, newInterval.start);
            let endNum = Math.max(interval.end, newInterval.end);
            newInterval = new Interval(startNum, endNum);
        }
    });
    result.splice(insertIndex, 0, newInterval);
    return result;
};
```

```java
/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
class Solution {
    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {
        int insertIndex = 0;
        List<Interval> result = new ArrayList<Interval>();

        for(int i=0; i < intervals.size(); i++) {
            if (intervals.get(i).end < newInterval.start) {
                result.add(intervals.get(i));
                insertIndex++;
            } else if (intervals.get(i).start > newInterval.end) {
                result.add(intervals.get(i));
            } else if (newInterval.start <= intervals.get(i).end || newInterval.end >= intervals.get(i).start) {
                int start = Math.min(newInterval.start, intervals.get(i).start);
                int end = Math.max(newInterval.end, intervals.get(i).end);
                newInterval = new Interval(start, end);
            }
        }
        result.add(insertIndex, newInterval);
        return result;
    }
}
```
