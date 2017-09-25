Sort a linked list in O(n log n) time using constant space complexity.

# merge sort
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
var sortList = function(head) {
    function sort(node) {
        if(node == null || node.next == null) {
            return node;
        }
        let slow = node;
        let fast = node;
        while (fast !== null && fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        fast = slow.next;
        slow.next = null;

        return merge(sort(node), sort(fast));
    }

    function merge(leftNode, rightNode) {
        let temp = new ListNode(-1);
        let p = temp;
        while(leftNode !== null && rightNode !== null) {
            if (leftNode.val < rightNode.val) {
                p.next = leftNode;
                leftNode = leftNode.next;
            } else {
                p.next = rightNode;
                rightNode = rightNode.next;
            }
            p = p.next;
        }
        if (leftNode == null) {
            p.next = rightNode;
        } else {
            p.next = leftNode;
        }
        return temp.next;
    }

    return sort(head);
};
```

# quick sort
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
var sortList = function(head) {
    if (head == null) {
        return null;
    }
    const nodes = [];
    let res = [];
    while(head !== null) {
        nodes.push(new ListNode(head.val));
        head = head.next;
    }

    function sortNodes(nodes) {
        if(nodes.length <= 1) {
            return nodes;
        }
        let left  = [];
        let right = [];
        let pivot = nodes[0];
        for(let i=1; i < nodes.length; i++) {
            if (pivot.val < nodes[i].val) {
                right.push(nodes[i]);
            } else {
                left.push(nodes[i]);
            }
        }
        return sortNodes(left).concat(pivot, sortNodes(right));
    }

    res = sortNodes(nodes);
    for(let i=0; i < res.length - 1; i++) {
        res[i].next = res[i+1];
    }
    return res[0];
};
```
