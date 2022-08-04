Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

```java
// DFS
class Solution {
    int result = Integer.MAX_VALUE;
    int pathVal = 0;
    int height = 0;
    public int minimumTotal(List<List<Integer>> triangle) {
        height = triangle.size();
        dfs(triangle, 0, 0, this.pathVal);
        return result;
    }

    public void dfs(List<List<Integer>> arrs, int lastLayerIndex, int layer, int pathVal) {
        if (layer >= height) {
            result = Math.min(result, pathVal);
            return;
        }
        int end = Math.min(lastLayerIndex+1, (arrs.get(layer).size() - 1));
        for(int i=lastLayerIndex; i <= end; i++) {
            pathVal += arrs.get(layer).get(i);
            dfs(arrs, i, layer+1, pathVal);
            pathVal -= arrs.get(layer).get(i);
        }
    }
}

//DP
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int height = triangle.size();
        int[][] dp = new int[height][];
        dp[height-1] = new int[triangle.get(height-1).size()];
        for(int i=0; i < triangle.get(height-1).size(); i++) {
            dp[height-1][i] = triangle.get(height-1).get(i);
        }

        for(int i=height-2; i >= 0; i--) {
            dp[i] = new int[triangle.get(i).size()];
            for(int j=0; j < triangle.get(i).size(); j++) {
                dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle.get(i).get(j);
            }
        }

        return dp[0][0];
    }    
}

```
