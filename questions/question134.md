There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

```java
class Solution {
    List<Integer> startPoints = new ArrayList<Integer>();
    int len;
    public int canCompleteCircuit(int[] gas, int[] cost) {
        len = gas.length;
        for(int i=0; i < len; i++) {
            if(gas[i] >= cost[i]) {
                startPoints.add(i);
            }
        }
        for(int k : startPoints) {
            if(canGoAround(gas, cost, k)) {
                return k;
            }
        }
        return -1;
    }

    public boolean canGoAround(int[] gas, int[] cost, int start) {
        int leftGas = 0;
        for(int i=start; i < len; i++) {
            leftGas = leftGas + gas[i] - cost[i];
            if(leftGas < 0) {
                return false;
            }
        }
        for(int j=0; j < start; j++) {
            leftGas = leftGas + gas[j] - cost[j];
            if(leftGas < 0) {
                return false;
            }
        }
        return true;
    }
}
```
