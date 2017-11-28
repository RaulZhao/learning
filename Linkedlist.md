// Reverse Linked List
```js
function Node(val) {
  this.val = val;
  this.next = null;
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

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
