Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.

```java
// Backtracking
class Solution {
    int[][] map;
    int count = 0;
    public int numDistinct(String s, String t) {
        if(s.length() < 1 || t.length() < 1) {
            return 0;
        }
        char[] s_chars = s.toCharArray();
        char[] t_chars = t.toCharArray();
        int m = t_chars.length;
        int n = s_chars.length;
        map = new int[m][n];
        for(int i=0; i < m; i++) {
            for(int j=0; j< n; j++) {
                if(t_chars[i] == s_chars[j]) {
                    map[i][j] = 1;
                }
            }
        }
        findSubsequence(map, 0, 0);
        return count;
    }
    public void findSubsequence(int[][] table, int row, int column) {
        if(row >= table.length) {
            count++;
            return;
        }
        for(int k=column; k < table[0].length; k++) {
            if(table[row][k] == 1) {
                findSubsequence(table, row+1, k+1);
            }
        }
    }
}
```
```java
// DP
class Solution {
    int[][] dp;
    public int numDistinct(String S, String T) {
        dp = new int[T.length() + 1][S.length() + 1];

        for (int j = 0; j <= S.length(); ++j) dp[0][j] = 1;
        for (int i = 1; i <= T.length(); ++i) dp[i][0] = 0;

        for (int i = 1; i <= T.length(); ++i) {
            for (int j = 1; j <= S.length(); ++j) {
                dp[i][j] = dp[i][j - 1] + (T.charAt(i - 1) == S.charAt(j - 1) ? dp[i - 1][j - 1] : 0);
            }
        }
        return dp[T.length()][S.length()];
    }
}
```
