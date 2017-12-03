There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

4, [[1,0],[2,0],[3,1],[3,2]]
There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let result = new Set();
    let courses = [];
    let visited = {};
    let visitedPath = {};

    for(let i=0; i < numCourses; i++) {
        courses[i] = {
            val: i,
            next: []
        };
    }
    prerequisites.forEach((entry, index) => {
        courses[entry[0]].next.push(courses[entry[1]]);
    })

    for(let i=0; i < numCourses; i++) {
        if(!visited[i]) {
            if(hasCircle(courses[i])) {
                return [];
            }
        }
    }
    return [...result];

    function hasCircle(node) {
        visited[node.val] = true;
        if (visitedPath[node.val]) {
            return true;
        }
        if (node.next.length == 0) {
            result.add(node.val);
            return false;
        }
        for(let i=0; i < node.next.length; i++) {
            visitedPath[node.val] = true;
            if(hasCircle(node.next[i])) {
                return true;
            }
            visitedPath[node.val] = false;
        }
        result.add(node.val);
        return false;
    }
};
```
