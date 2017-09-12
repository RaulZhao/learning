Reverse a singly linked list.

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
var reverseList = function(head) {
    if (head == null) {
        return null;
    }

    let previous = head;
    head = head.next;
    previous.next = null;

    while(head !== null) {
        let current = head;
        head = head.next;
        current.next = previous;
        previous = current;
    }

    return previous;
};
```
