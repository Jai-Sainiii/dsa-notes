# 199. Binary Tree Right Side View

**Platform:** LeetCode · **Difficulty:** Medium · **Problem:** [leetcode.com/problems/binary-tree-right-side-view](https://leetcode.com/problems/binary-tree-right-side-view/)

**Tags:** `Tree` `Depth-First Search` `Breadth-First Search` `Binary Tree`

## Problem

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return *the values of the nodes you can see ordered from top to bottom*.

**Example 1:**

**Input:** `root = [1,2,3,null,5,null,4]`

**Output:** `[1,3,4]`

**Explanation:**

![](https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png)

**Example 2:**

**Input:** `root = [1,2,3,4,null,null,null,5]`

**Output:** `[1,3,4,5]`

**Explanation:**

![](https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png)

**Example 3:**

**Input:** `root = [1,null,3]`

**Output:** `[1,3]`

**Example 4:**

**Input:** `root = []`

**Output:** `[]`

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 100]`.
-   `-100 <= Node.val <= 100`

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(H) : H = height of tree | O(n) to store the answer & recursive stack |
| 2 | optimal my approach ! | O(n) | O(n) |

### 1. Optimal

The key is to do a reverse pre-order traversal, when a level is first time reached then the value is on the right view...

**Time:** O(H) : H = height of tree · **Space:** O(n) to store the answer & recursive stack

```javascript
    let ans = [];
    function solve(node, level){
        if(!node) return;

        if(level === ans.length) ans.push(node.val);

        if(node.right) solve(node.right, level+1);
        if(node.left) solve(node.left, level+1);
    }

    solve(root, 0);

    return ans;
```

Source: [`1-optimal.js`](./1-optimal.js)

### 2. optimal my approach !

We will level order traversal then we can go left -> right, the last element we will encounter is place at the right view...

**Time:** O(n) · **Space:** O(n)

```javascript
var rightSideView = function(root) {
    let que = [];
    let map = new Map();

    if(!root) return [];
    que.push([root, 0]);

    while(que.length){
        let size = que.length;
        for(let i = 0; i < size; i++){
            let [node, pos] = que.shift();
            if(node.left) que.push([node.left, pos+1]);
            if(node.right) que.push([node.right, pos+1]);
            map.set(pos, node.val);
        }
    }

    return [...map.values()];
};
```

Source: [`2-optimal-my-approach.js`](./2-optimal-my-approach.js)

---

<sub>Saved with AlgoNotes</sub>
