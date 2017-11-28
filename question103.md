Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        LinkedList<Integer> values = new LinkedList<Integer>();
        LinkedList<TreeNode> layerList = new LinkedList<TreeNode>();
        LinkedList<TreeNode> tmpList = new LinkedList<TreeNode>();
        if(root != null) {
            layerList.add(root);
        }
        int layer = 0;

        while(layerList.size() > 0) {
        	TreeNode cur = layerList.removeFirst();

        	if(cur.left != null) {
        		tmpList.add(cur.left);
        	}
        	if(cur.right != null) {
        		tmpList.add(cur.right);
        	}

        	if(layer % 2 == 0) {
        		values.addLast(cur.val);
        	} else {
        		values.addFirst(cur.val);
        	}

        	if (layerList.size() == 0) {
        		layerList = tmpList;
        		tmpList = new LinkedList<TreeNode>();
        		result.add((List) values.clone());
        		values.clear();
        		layer++;
        	}
        }
        return result;
    }
}
```
