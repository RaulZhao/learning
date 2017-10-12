```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const map = {};
  const visited = {};
  const visitedPath = {};

  for(let i=0; i < numCourses; i++) {
    map[i] = {
      val: i,
      next: []
    };
  }

  for(let i=0; i < prerequisites.length; i++) {
    map[prerequisites[i][0]].next.push(map[prerequisites[i][1]]);
  }

  for(let k=0; k < numCourses; k++) {
    if(!visited[k]) {
      if(dfs(map[k])) {
        return false;
      }
    }
  }
  return true;

  function dfs(node) {
    visited[node.val] = true;
    if (node.next.length <= 0) {
      return false;
    }
    if(visitedPath[node.val]) {
      return true;
    }

    for(let j=0; j < node.next.length; j++) {
      visitedPath[node.val] = true;
      if(dfs(node.next[j])) {
        return true;
      }
      visitedPath[node.val] = false;
    }
    return false;
  }
};
```
