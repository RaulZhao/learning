Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]

```java
class Solution {
    List<List<String>> result = new ArrayList<List<String>>();
    LinkedList<String> item = new LinkedList<String>();
    public List<List<String>> partition(String s) {
        dfs(s, 0);
        return result;
    }

    public void dfs(String str, int start) {
        int len = str.length();
        if(start >= len) {
            result.add(new LinkedList<String>(item));
        }
        for(int i=start; i<len; i++) {
            String curr = str.substring(start, i+1);
            if(isPalindrome(curr)) {
                item.add(curr);
                dfs(str, i+1);
                item.removeLast();
            }
        }
    }

    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length()-1;
        while(left <= right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```
