# Lowest Common Ancestor in BT

**Platform:** Striver's A-Z DSA Sheet · **Difficulty:** Medium · **Problem:** [takeuforward.org/practice/dsa/lca-in-bt](https://takeuforward.org/practice/dsa/lca-in-bt)

**Tags:** `Binary Tree`

## Problem

Given a root of binary tree, find the lowest common ancestor (LCA) of two given nodes (p, q) in the tree.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

Note: Return the TreeNode itself, not its value.

Constraints:
2 <= Number of Nodes <= 105
-106 <= node.val <= 106
All values in tree are unique.

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) | O(n), n represents the recursive stack space |

### 1. Optimal

Go to every node recursively and check for p & q. If one is found, then return the node; if both are found, return the node because that is the anchestor. After this every other nodes return null so that becomes the answer...

**Time:** O(n) · **Space:** O(n), n represents the recursive stack space

```javascript
        function solve(node){
            if(node === null || node === p || node === q){
                return node; //got a mistake where i write root instead of node
            }

            let left = solve(node.left);
            let right = solve(node.right);

            if(left === null) return right;
            else if(right === null) return left;
            else return node; //both are not null means we got our anchestor;
        }

        return solve(root);
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
