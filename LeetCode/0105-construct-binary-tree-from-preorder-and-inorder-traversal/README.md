# 105. Construct Binary Tree from Preorder and Inorder Traversal

**Platform:** LeetCode · **Difficulty:** Medium · **Problem:** [leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

**Tags:** `Array` `Hash Table` `Divide and Conquer` `Tree` `Binary Tree`

## Problem

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**Example 2:**

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

**Constraints:**

-   `1 <= preorder.length <= 3000`
-   `inorder.length == preorder.length`
-   `-3000 <= preorder[i], inorder[i] <= 3000`
-   `preorder` and `inorder` consist of **unique** values.
-   Each value of `inorder` also appears in `preorder`.
-   `preorder` is **guaranteed** to be the preorder traversal of the tree.
-   `inorder` is **guaranteed** to be the inorder traversal of the tree.

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) | O(n) for map and worst case for recursive stack |

### 1. Optimal

Make a inorder map so that we know which element is placed where. Now take 4 pointer preStart, preEnd, inStart, inEnd. When placed a node in tree then inorder the elements on the left will be left tree and vice-versa for right so make a recursive function which make the root part then again call with new inorder array part and same for the preorder array part so that again we are solving the same problem..

**Time:** O(n) · **Space:** O(n) for map and worst case for recursive stack

```javascript
    let inOrder = new Map();
    inorder.map((node, i) => inOrder.set(node, i));

    function solve(preStart, preEnd, inStart, inEnd){
        if(preStart > preEnd || inStart > inEnd) return null;

        let root = new TreeNode(preorder[preStart]);

        let inRoot = inOrder.get(root.val);
        let numsLeft = inRoot - inStart;

        root.left = solve(preStart+1, preStart + numsLeft, inStart, inRoot-1);
        root.right = solve(preStart + numsLeft + 1, preEnd, inRoot+1, inEnd);

        return root;
    }

    return solve(0, preorder.length-1, 0, inorder.length-1);
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
