You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let perimeter = 0;

    function checkSurround(row, column) {
        let lines = 4;
        if(row-1 >= 0) {
            if(grid[row-1][column] == 1) {
                lines--;
            }
        }
        if(row+1 < m) {
            if(grid[row+1][column] == 1) {
                lines--;
            }
        }
        if(column-1 >= 0) {
            if(grid[row][column-1] == 1) {
                lines--;
            }
        }
        if(column+1 < n) {
            if(grid[row][column+1] == 1) {
                lines--;
            }
        }
        return lines;
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] == 1) {
                perimeter = perimeter + checkSurround(i,j);
            }
        }
    }

    return perimeter;
};
```
