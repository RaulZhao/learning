# Given the root of a binary tree, return the inorder traversal of its nodes' values.

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer[]}

def inorder_traversal(root)
  @results = []
	traverse(root)
	@results
end

def traverse(node)
	return if node.nil?
	unless node.left.nil?
		traversal(node.left)
	end
	unless node.nil?
		@results << node.val
	end
	unless node.right.nil?
		traversal(node.right)
	end
end
