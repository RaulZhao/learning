Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 

```java
class Solution {
    StringBuilder sb = new StringBuilder();
    public String convertToTitle(int n) {
        if(n < 1) {
            return "";
        }
        return divide(n, sb);
    }
    public String divide(int num, StringBuilder sb) {
        if (num == 0) {
            return sb.toString();
        }
        int remainder = (num-1) % 26;
        int val = (num-1) / 26;
        sb.insert(0, (char)(remainder+65));
        return divide(val, sb);
    }
}
```
