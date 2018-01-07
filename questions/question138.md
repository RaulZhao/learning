A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

```java
/**
 * Definition for singly-linked list with a random pointer.
 * class RandomListNode {
 *     int label;
 *     RandomListNode next, random;
 *     RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    HashMap<RandomListNode, RandomListNode> map = new HashMap<RandomListNode, RandomListNode>();
    public RandomListNode copyRandomList(RandomListNode head) {
        if(head == null) {
            return null;
        }
        RandomListNode copy = new RandomListNode(head.label);
        RandomListNode originDummy = new RandomListNode(-1);
        originDummy.next = head;
        RandomListNode pre = copy;
        map.put(head, copy);
        head = head.next;
        while(head != null) {
            RandomListNode rdn = new RandomListNode(head.label);
            pre.next = rdn;
            map.put(head, rdn);
            pre = rdn;
            head = head.next;
        }

        head = originDummy.next;
        RandomListNode copy_head = copy;
        while(head != null && copy_head != null) {
            copy_head.random = map.get(head.random);
            copy_head = copy_head.next;
            head = head.next;
        }

        return copy;
    }
}
```
