```js
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
  };

  const result = [];
  const getinValidParentheses = function(str) {
    const queues = [];
    for(let i=0; i < str.length; i++) {
      if(str[i] == '(') {
        queues.push(i);
        queues.push(str[i]);
      } else if(str[i] == ')') {
        if(queues[queues.length-1] == '(') {
          queues.pop();
          queues.pop();
        } else {
          queues.push(i);
          queues.push(str[i]);
        }
      }
    }
    return queues;
  }

  const queues = getinValidParentheses(s);

  function dfs(str, layer, lastLeftParenthesesIndex, lastRightParenthesesIndex) {
    if(layer >= queues.length/2 ) {
      result.push(str.replace(/\$/gi, ''));
      return;
    }

    let currentIndex = queues[2*layer];
    let cha = queues[2*layer+1];
  }
};
```
