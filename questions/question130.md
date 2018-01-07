Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X

```js
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    if(m < 3) {return}
    const n = board[0].length;
    if(n < 3) {return}

    let visited = new Set();
    for(let i=1; i < m-1; i++) {
        for(let j=1; j < n-1; j++) {
            if(board[i][j] === 'O') {
                visited.clear();
                visited.add(`${i}_${j}`);
                if (dfs_O(board, i, j)) {
                    visited.forEach((val) => {
                        let indexs = val.split('_');
                        board[indexs[0]][indexs[1]] = "X";
                    });
                };
            }
        }
    }

    function dfs_O(board, i, j) {
        if(i <= 0 || i >= m-1 || j <= 0 || j >= n-1) {
            return false;
        }
        let top = true;
        let right = true;
        let bottom = true;
        let left = true;
        if(board[i-1][j] === "O" && !visited.has(`${i-1}_${j}`)) {
            visited.add(`${i-1}_${j}`);
            top = dfs_O(board, i-1, j);
        }
        if(board[i][j-1] === "O" && !visited.has(`${i}_${j-1}`)) {
            visited.add(`${i}_${j-1}`);
            left = dfs_O(board, i, j-1);
        }
        if(board[i+1][j] === "O" && !visited.has(`${i+1}_${j}`)) {
            visited.add(`${i+1}_${j}`);
            bottom = dfs_O(board, i+1, j);
        }
        if(board[i][j+1] === "O" && !visited.has(`${i}_${j+1}`)) {
            visited.add(`${i}_${j+1}`);
            right = dfs_O(board, i, j+1);
        }
        return top && left && bottom && right;
    }
};
```
