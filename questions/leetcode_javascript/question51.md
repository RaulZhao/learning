The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]


```js
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    let temp = [];

    function convertArray(arr) {
        const res = [];
        for(let i = 0; i < arr.length; i++) {
            let rowStr = "";
            for(let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === 1) {
                    rowStr = rowStr + "Q";
                } else {
                    rowStr = rowStr + ".";
                }
            }
            res.push(rowStr);
        }
        return res.slice(0);
    }

    function solve(row) {
        if (row === n) {
            let newTemp = convertArray(temp);
            result.push(newTemp);
            return;
        }

        let currentRow = Array.apply(null, Array(n)).map(function(item,index) {
            return item = 0;
        });

        for(let col=0; col < n; col++) {
            let isOK = true;

            for(let i=0; i < row; i++) {
                let rowArr = temp[i];
                let diagonalABS = Math.abs(row - i);
                let leftDiagonalVal = col-diagonalABS > -1 ? rowArr[col-diagonalABS] : 0;
                let rightDiagonalVal = col+diagonalABS < n ? rowArr[col+diagonalABS] : 0;

                if(rowArr[col] === 1 || leftDiagonalVal === 1 || rightDiagonalVal === 1) {
                    isOK = false;
                    break;
                }
            }

            if (isOK) {
                currentRow[col] = 1;
                temp.push(currentRow);
                solve(row+1);
                currentRow[col] = 0;
                temp.pop();
            }
        }  
    }

    solve(0);
    return result;
};
```
