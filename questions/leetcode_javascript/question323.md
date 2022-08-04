Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.
Example 1:
     0          3
     |          |
     1 --- 2    4
Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.
Example 2:
     0           4
     |           |
     1 --- 2 --- 3
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

```java
public class Solution {
	class GraphNode {
		int val = -1;
		ArrayList<GraphNode> children = new ArrayList<GraphNode>();
		GraphNode(int val) {
			this.val = val;
		}
	}

	int count = 0;
	Set<Integer> visited = new HashSet<Integer>();
	Map<Integer, GraphNode> graphs = new HashMap<Integer,GraphNode>();
	public int countConnections(int n, int[][] edges) {
		for(int i=0; i < n; i++) {
			GraphNode g = new GraphNode(i);
			graphs.put(i, g);
		}

		for(int i=0; i < edges.length; i++) {
			Arrays.sort(edges[i]);
			graphs.get(edges[i][0]).children.add(graphs.get(edges[i][1]));
		}
		System.out.println(graphs);
		for(int i=0; i < n; i++) {
			if (!visited.contains(i)) {
				dfs(graphs.get(i));
				count++;
			}
		}
		return count;
	}

	public void dfs(GraphNode node) {
		visited.add(node.val);
		for(int i=0; i < node.children.size(); i++) {
			if (!visited.contains(node.children.get(i).val)) {
				dfs(node.children.get(i));
			}
		}
	}

	public static void main(String[] args) {
		Solution s = new Solution();
		int n = 9;
		int[][] edges = {{0, 1}, {7, 8},{1, 2}, {5, 4}, {2, 3}, {4, 7}};
		System.out.println(s.countConnections(n, edges));
	}
}
```
