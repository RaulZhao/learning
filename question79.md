Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = [];
    for(let i=0; i < m; i++) {
        visited.push([]);
    }

    function find(i, j, index) {
        if (index === word.length) return true;
        if (i < 0 || j < 0 || i >= m || j >= n) return false;
        if (visited[i][j] === true) return false;
        if (word[index] !== board[i][j]) return false;

        visited[i][j] = true;
        let tempVal = find(i-1, j, index+1) || find(i+1, j, index+1) || find(i, j-1, index+1) || find(i, j+1, index+1);
        visited[i][j] = false;
        return tempVal;
    }

    for(let i=0; i < m; i++) {
        for(let j=0; j < n; j++) {
            if (find(i, j, 0)) return true;
        }
    }
    return false;
};
```
