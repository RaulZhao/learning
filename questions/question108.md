Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

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
    public TreeNode sortedArrayToBST(int[] nums) {
    	return pickNode(nums, 0, nums.length-1);
    }

    public TreeNode pickNode(int[] nums, int left, int right) {
    	if(left == right) {
    		return new TreeNode(nums[left]);
    	} else if (left > right) {
    		return null;
    	}
    	int index = (left + right)/2;
    	TreeNode node = new TreeNode(nums[index]);
    	TreeNode leftNode = pickNode(nums, left, index-1);
    	TreeNode rightNode = pickNode(nums, index+1, right);
        if (leftNode != null) {
    	    node.left = leftNode;
        }
        if (rightNode != null) {
    	    node.right = rightNode;
        }
    	return node;
    }
}
```
