Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.

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
var deleteDuplicates = function(head) {
    if(head == null) {
        return null;
    }
    let dummy = new ListNode(-1);
    dummy.next = head;
    let duplicatedVal;
    let preNode = dummy;

    while(head.next != null) {
        if(head.val == duplicatedVal) {
            preNode.next = head.next;
            head = head.next;
            continue;
        }

        if(head.val != head.next.val) {
            preNode = head;
            head = head.next;
        } else {
            duplicatedVal = head.val;
            preNode.next = head.next;
            head = head.next;
        }
    }
    if(head.val == duplicatedVal) {
        preNode.next = null;
    }
    return dummy.next;
};
```
