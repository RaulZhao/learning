Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

```java
class Solution {
    HashMap<Character, Integer> hs = new HashMap<Character, Integer>();
    public int firstUniqChar(String s) {
        int result = s.length();
        if (s.length() < 1) {
            return -1;
        }
        for(int i=0; i < s.length(); i++) {
            char curr = s.charAt(i);
            if(hs.containsKey(curr)) {
                hs.put(curr, -1);
            } else {
                hs.put(curr, i);
            }
        }

        for(Integer pos : hs.values()) {
            if (pos > -1) {
                result = Math.min(pos, result);
            }
        }
        return result >= s.length() ? -1 : result;
    }
}
```
