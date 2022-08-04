Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const tempList = [];
    const mergeTwo = (list1, list2) => {
        let result_pointer =  new ListNode(-1);
        let result = result_pointer;

        while(list1 != null && list2 != null) {
            if (list1.val >= list2.val) {
                result_pointer.next = list2;
                list2 = list2.next;
            } else {
                result_pointer.next = list1;
                list1 = list1.next;
            }
            result_pointer = result_pointer.next;
        }
        if (list1 == null) {
            result_pointer.next = list2;
        } else if (list2 == null) {
            result_pointer.next = list1;
        }

        return result.next ;
    };

    if (lists.length < 1) {
        return null;
    }

    while(lists.length > 1) {
        const temp = mergeTwo(lists.pop(), lists.pop());
        lists.unshift(temp);
    }
    return lists[0];
};
```

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    LinkedList<ListNode> headers = new LinkedList<ListNode>();
    ListNode dummy = new ListNode(-1);
    ListNode result = new ListNode(-1);
    NodeComparator comparator = new NodeComparator();

    public ListNode mergeKLists(ListNode[] lists) {
        for(int i=0; i < lists.length; i++) {
            if (lists[i] != null) {
                headers.add(lists[i]);
            }
        }
        if (headers.size() < 1) {
            return null;
        }
        dummy = getNext();
        result.next = dummy;
        while(dummy != null) {
            ListNode tmp = getNext();
            dummy.next = tmp;
            dummy = tmp;
        }
        return result.next;
    }
    public ListNode getNext() {
        Collections.sort(headers, comparator);
        if (headers.size() < 1) {
            return null;
        }
        ListNode currNode = headers.removeFirst();
        ListNode res = currNode;
        currNode = currNode.next;

        if(currNode != null) {
            headers.addFirst(currNode);
        }
        return res;
    }
}

class NodeComparator implements Comparator<ListNode> {
    public int compare(ListNode node1, ListNode node2) {
        if (node1 == null) {
            return -1;
        } else if (node2 == null) {
            return 1;
        } else {
            if (node1.val > node2.val) {
                return 1;
            } else if(node1.val == node2.val) {
                return 0;
            } else {
                return -1;
            }
        }
    }
}
```
