function Node(val) {
	this.val = val;
	this.left = this.right = null;
}

// BFS
function findDepth(root) {
	let stack = [];
	stack.push(root);
	let depth = 0;
	while(stack.length > 0) {
		depth += 1;
		let tmpArr = stack.splice(0);
		while(tmpArr.length > 0) {
			let node = tmpArr.pop();
			if(node.left) {
				stack.push(node.left);
			}
			if(node.right) {
				stack.push(node.right);
			}
		}
  }
	return depth;
}

//DFS
function getDepth(node) {
  if(node == null) {
    return 0;
  }
  let leftDepth = getDepth(node.left);
  let rightDepth = getDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Testcase
let root = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
root.left = node1;
root.right = node2;
node2.left = node3;
node3.right = node4;
