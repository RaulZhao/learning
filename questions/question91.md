A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.

```java
class Solution {
    int[] dp;
    public int numDecodings(String s) {
        int result = 0;
        int len = s.length();
        if(len == 0) {
            return result;
        } else if(len == 1) {
            if(Integer.parseInt("" + s.charAt(0)) > 0) {
                result = 1;
            }
            return result;
        }
        if(s.charAt(0) == '0') {
            return result;
        }
        dp = new int[len];
        dp[0] = 1;
        for(int i=1; i < len; i++) {
            if(Integer.parseInt("" + s.charAt(i)) == 0) {
                if(Integer.parseInt(s.substring(i-1, i+1)) > 9 && Integer.parseInt(s.substring(i-1, i+1)) < 27) {
                    if(i > 1) {
                        dp[i] = dp[i-2];
                    } else {
                        dp[i] = 1;
                    }
                } else {
                    return 0;
                }
            } else {
                if(Integer.parseInt(s.substring(i-1, i+1)) > 9 && Integer.parseInt(s.substring(i-1, i+1)) < 27) {
                    if(i > 1) {
                        dp[i] = dp[i-1] + dp[i-2];
                    } else {
                        dp[i] = 2;
                    }
                } else {
                    if(i > 1) {
                        dp[i] = dp[i-1];
                    } else {
                        dp[i] = 1;
                    }
                }
            }
        }
        return dp[len-1];
    }
}
```
