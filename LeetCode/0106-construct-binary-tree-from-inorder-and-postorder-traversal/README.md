# 106. Construct Binary Tree from Inorder and Postorder Traversal

**Platform:** LeetCode · **Difficulty:** Medium · **Problem:** [leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

**Tags:** `Array` `Hash Table` `Divide and Conquer` `Tree` `Binary Tree`

## Problem

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
```

**Example 2:**

```
Input: inorder = [-1], postorder = [-1]
Output: [-1]
```

**Constraints:**

-   `1 <= inorder.length <= 3000`
-   `postorder.length == inorder.length`
-   `-3000 <= inorder[i], postorder[i] <= 3000`
-   `inorder` and `postorder` consist of **unique** values.
-   Each value of `postorder` also appears in `inorder`.
-   `inorder` is **guaranteed** to be the inorder traversal of the tree.
-   `postorder` is **guaranteed** to be the postorder traversal of the tree.

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) | O(n) for recursive stack & inOrder map |

### 1. Optimal

Same as preorder + inorder tree build but conditions reverse..

**Time:** O(n) · **Space:** O(n) for recursive stack & inOrder map

```javascript
    let inOrder = new Map();
    inorder.map((node, i) => inOrder.set(node, i));

    function solve(postStart, postEnd, inStart, inEnd){
        if(postStart < postEnd || inStart > inEnd) return null;

        let root = new TreeNode(postorder[postStart]);

        let inRoot = inOrder.get(root.val);
        let numsRight = inEnd - inRoot;

        root.left = solve(postStart - numsRight - 1, postEnd, inStart, inRoot - 1);
        root.right = solve(postStart - 1, postStart - numsRight, inRoot + 1, inEnd);

        return root;
    }

    return solve(postorder.length-1, 0, 0, inorder.length-1);
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
