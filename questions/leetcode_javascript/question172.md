Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.

```java
class Solution {
    int count = 0;
    public int trailingZeroes(int n) {
        if (n <= 0) {
            return 0;
        }
        for(int i=5; i <= n; i += 5) {
            accumulateFive(i);
        }
        return count;
    }
    public void accumulateFive(int n) {
        int remainder = n % 5;
        if (remainder == 0) {
            count++;
        } else {
            return;
        }
        accumulateFive(n/5);
    }
}
```

```java
class Solution {
    int count = 0;
    public int trailingZeroes(int n) {
        if (n <= 0) return 0;

        for (long i = 5; n / i >= 1; i *= 5) {
            count += n / i;
        }
        return count;
    }
}
```
