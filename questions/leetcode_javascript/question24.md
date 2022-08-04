Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var linked = new ListNode;

    linked.next = head;
    let headPointer = linked;
    while(headPointer.next && headPointer.next.next) {
        let tmp1 = headPointer.next;
        let tmp2 = headPointer.next.next;

        headPointer.next = tmp2;
        tmp1.next = tmp2.next;
        tmp2.next = tmp1;

        headPointer = tmp1;
    }

    return linked.next;
};
```
