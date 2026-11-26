# 700. Search in a Binary Search Tree

**Platform:** LeetCode · **Difficulty:** Easy · **Problem:** [leetcode.com/problems/search-in-a-binary-search-tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

**Tags:** `Tree` `Binary Search Tree` `Binary Tree`

## Problem

You are given the `root` of a binary search tree (BST) and an integer `val`.

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg)

```
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg)

```
Input: root = [4,2,7,1,3], val = 5
Output: []
```

**Constraints:**

-   The number of nodes in the tree is in the range `[1, 5000]`.
-   `1 <= Node.val <= 10^7`
-   `root` is a binary search tree.
-   `1 <= val <= 10^7`

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(log n) | O(1) |

### 1. Optimal

In BST either the current node's value is equal to answer otherwise the nodes in down left has lesser value than current and nodes down under the right part is higher. So each time compare the node value with the finding int val then if equal return the node if not then check if greater the value of current node then go left and if lesser than go right... Simple..

**Time:** O(log n) · **Space:** O(1)

```javascript
    while(root && root.val !== val){
        val < root.val ? root = root.left : root = root.right;
    }
    return root;
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
