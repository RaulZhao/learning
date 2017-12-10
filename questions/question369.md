Given a non-negative number represented as a singly linked list of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
Example: Input: 1->2->3

Output: 1->2->4

```js
function plusOne(head) {
  let reversed = reverseLinkedList(head);
  let bit = 1;
  let head = reversed;

  while (reversed !== null && bit === 1) {
    if (reversed.val+bit >= 10) {
      reversed.val = reversed.val+bit - 10;
      bit = 1;
    } else {
      reversed.val += bit;
      bit = 0;
    }
  }
  return reverseLinkedList(head);
}

function reverseLinkedList(head) {
  if(head === null) {
    return head;
  }
  let preNode = head;
  head = head.next;
  preNode.next = null;

  while(head !== null) {
    let current = head;
    head = head.next;
    current.next = preNode;
    preNode = current;
  }

  return preNode;
}
```
