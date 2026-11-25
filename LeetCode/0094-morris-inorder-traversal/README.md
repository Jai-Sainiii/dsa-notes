# 94. Morris Inorder Traversal

**Platform:** LeetCode · **Difficulty:** Easy · **Problem:** [leetcode.com/problems/binary-tree-inorder-traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

**Tags:** `Stack` `Tree` `Depth-First Search` `Binary Tree`

## Problem

Given the `root` of a binary tree, return *the inorder traversal of its nodes' values*.

**Example 1:**

**Input:** `root = [1,null,2,3]`

**Output:** `[1,3,2]`

**Explanation:**

![](https://assets.leetcode.com/uploads/2024/08/29/screenshot-2024-08-29-202743.png)

**Example 2:**

**Input:** `root = [1,2,3,4,5,null,8,null,null,6,7,9]`

**Output:** `[4,2,6,5,7,1,3,9,8]`

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

If your standing at a node then that's the current node. first from the root of the tree please go left by marking prev = curr.left so afterward go to the extreme right so you can make a trail to the curr now if train is already there means you have completed the left part now you can cancel the trail by marking prev.right = null then you can push the value into inorder ans and if no left found on any curr node that means that's the root so you can also add that into ans. after marking the train null then you can go curr = curr.right because the left part is done...

**Time:** O(n) · **Space:** O(1)

```javascript
    let inorder = [];
    let curr = root;
    while(curr){
        if(!curr.left){
            inorder.push(curr.val);
            curr = curr.right;
        }else{
            let prev = curr.left;
            while(prev.right && prev.right !== curr){
                prev = prev.right;
            }

            if(!prev.right){
                prev.right = curr;
                curr = curr.left;
            }else{
                prev.right = null;
                inorder.push(curr.val);
                curr = curr.right;
            }
        }
    }

    return inorder;
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
