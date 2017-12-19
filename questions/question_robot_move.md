直线上有一个机器人从原点开始移动，每次可以向左移，也可以向右移，移动n步，再回到原点的概率是多少?

```java
import java.util.*;

class Solution {
  long[] total_sum;

  public float calculate(int n) {
     total_sum = new long[n];
     total_sum[0] = 0;

     for(int i=1; i <= n; i++) {
       total_sum[i] = (long) Math.pow(2, i);
     }
     if (n % 2 == 0) {
       return (float) total_sum[n/2] / total_sum[n];
     }
     return 0;
  }
}
