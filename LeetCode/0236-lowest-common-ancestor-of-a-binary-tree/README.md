# 236. Lowest Common Ancestor of a Binary Tree

**Platform:** LeetCode · **Difficulty:** Medium · **Problem:** [leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

**Tags:** `Tree` `Depth-First Search` `Binary Tree` `Binary Lifting` `Lowest Common Ancestor`

## Problem

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

**Example 3:**

```
Input: root = [1,2], p = 1, q = 2
Output: 1
```

**Constraints:**

-   The number of nodes in the tree is in the range `[2, 10^5]`.
-   `-10^9 <= Node.val <= 10^9`
-   All `Node.val` are **unique**.
-   `p != q`
-   `p` and `q` will exist in the tree.

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
