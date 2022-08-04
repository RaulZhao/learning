Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

```js
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let result = 0;
    const taskArray = [];

    for(let i=0; i < 26; i++) {
        taskArray[i] = 0;
    };
    tasks.forEach((val, index) => {
        taskArray[val.charCodeAt(0) - "A".charCodeAt(0)] += 1;
    });
    taskArray.sort((a, b) => a-b);

    while(taskArray[taskArray.length - 1] > 1) {
        for(let i=0; i < n+1; i++) {
            if (taskArray[taskArray.length - i - 1] > 0) {
                taskArray[taskArray.length -i - 1] = taskArray[taskArray.length - i - 1] - 1;
            }
            result++;
        }
        taskArray.sort((a, b) => a-b);
    }

    taskArray.forEach((val) => {
        if (val > 0) {
            result += val;
        }
    });

    return result;
};
```
