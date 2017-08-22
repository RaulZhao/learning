Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


```js
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let duplicate = {};

    for(let i=0; i<board.length; i++) {
        duplicate = {};
        for(let j=0; j<board[i].length; j++) {
            if (board[i][j] !== "." && duplicate[board[i][j]]) {
                return false;
            } else {
                duplicate[board[i][j]] = 1;
            }
        }
    }

    for(let i=0; i<board.length; i++) {
        duplicate = {};
        for(let j=0; j<board[i].length; j++) {
            if (board[j][i] !== "." && duplicate[board[j][i]]) {
                return false;
            } else {
                duplicate[board[j][i]] = 1;
            }
        }
    }

    for(let i=0; i<board.length; i+=3) {
        for(let j=0; j<board.length; j+=3) {
            duplicate = {};
            for(let x=i; x<i+3; x++) {
                for(let y=j; y<j+3; y++) {
                    if (board[x][y] !== "." && duplicate[board[x][y]]) {
                        return false;
                    } else {
                        duplicate[board[x][y]] = 1;
                    }
                }
            }
        }
    }
    return true;
};
```
