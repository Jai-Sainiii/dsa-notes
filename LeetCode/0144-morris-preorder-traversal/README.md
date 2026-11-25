# 144. Morris Preorder Traversal

**Platform:** LeetCode · **Difficulty:** Easy · **Problem:** [leetcode.com/problems/binary-tree-preorder-traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

**Tags:** `Stack` `Tree` `Depth-First Search` `Binary Tree`

## Problem

Given the `root` of a binary tree, return *the preorder traversal of its nodes' values*.

**Example 1:**

**Input:** `root = [1,null,2,3]`

**Output:** `[1,2,3]`

**Explanation:**

![](https://assets.leetcode.com/uploads/2024/08/29/screenshot-2024-08-29-202743.png)

**Example 2:**

**Input:** `root = [1,2,3,4,5,null,8,null,null,6,7,9]`

**Output:** `[1,2,4,5,6,7,3,8,9]`

**Explanation:**

![](https://assets.leetcode.com/uploads/2024/08/29/tree_2.png)

**Example 3:**

**Input:** `root = []`

**Output:** `[]`

**Example 4:**

**Input:** `root = [1]`

**Output:** `[1]`

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 100]`.
-   `-100 <= Node.val <= 100`

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) | O(1) |

### 1. Optimal

Same as the inorder but the case changed here so root -> left -> right is preorder so if you are standing on a node that means thats the root. ans will add curr then it goes to the left... that's the diff here with inorder..

**Time:** O(n) · **Space:** O(1)

```javascript
    let preorder = [];
    let curr = root;
    while(curr){
        if(!curr.left){
            preorder.push(curr.val);
            curr = curr.right;
        }else{
            let prev = curr.left;
            while(prev.right && prev.right !== curr){
                prev = prev.right;
            }

            if(!prev.right){
                prev.right = curr;
                preorder.push(curr.val);
                curr = curr.left;
            }else{
                prev.right = null;
                curr = curr.right;
            }
        }
    }
    
    return preorder;
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
