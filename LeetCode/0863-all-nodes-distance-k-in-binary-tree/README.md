# 863. All Nodes Distance K in Binary Tree

**Platform:** LeetCode · **Difficulty:** Medium · **Problem:** [leetcode.com/problems/all-nodes-distance-k-in-binary-tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)

**Tags:** `Hash Table` `Tree` `Depth-First Search` `Breadth-First Search` `Binary Tree`

## Problem

Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return *an array of the values of all nodes that have a distance* `k` *from the target node.*

You can return the answer in **any order**.

**Example 1:**

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/28/sketch0.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
```

**Example 2:**

```
Input: root = [1], target = 1, k = 3
Output: []
```

**Constraints:**

-   The number of nodes in the tree is in the range `[1, 500]`.
-   `0 <= Node.val <= 500`
-   All the values `Node.val` are **unique**.
-   `target` is the value of one of the nodes in the tree.
-   `0 <= k <= 1000`

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) for parentNode get + O(n) to traverse from target | O(n) for parentNode map + O(n) for que at worst case. |

### 1. Optimal

The key observation is to remember the parent node because we can traverse the bt from parent to down but we don't know about the parent. First key is to remember the parent then from target we start traversal by level-order traversal then each level we travel we add a curr_dist + 1 so that we can compare with k that is we reached to particular level that we want to traverse. At the last the que contains the k distance traversal travel element that we want to return. So from que we take out the value of treeNode and returns the value.

**Time:** O(n) for parentNode get + O(n) to traverse from target · **Space:** O(n) for parentNode map + O(n) for que at worst case.

```javascript
    let parentMap = new Map();
    function parentCheck(){
        let que = [];
        que.push(root);

        while(que.length){
            let size = que.length;
            for(let i = 0; i < size; i++){
                let node = que.shift();
                if(node.left) {
                    que.push(node.left);
                    parentMap.set(node.left, node);
                }
                if(node.right) {
                    que.push(node.right);
                    parentMap.set(node.right, node);
                }
            }
        }
    }
    parentCheck();

    let visitedNode = new Map();
    let que = [];
    let curr_dist = 0;
    visitedNode.set(target, true)
    que.push(target);

    while(que.length){
        let size = que.length;
        if(curr_dist === k) break;
        else curr_dist++;
        for(let i = 0; i < size; i++){
            let node = que.shift();
            if(node.left && !visitedNode.has(node.left)) {
                que.push(node.left);
                visitedNode.set(node.left, true);
            }
            if(node.right && !visitedNode.has(node.right)) {
                que.push(node.right);
                visitedNode.set(node.right, true);
            }
            if(parentMap.get(node) && !visitedNode.has(parentMap.get(node))) {
                que.push(parentMap.get(node));
                visitedNode.set(parentMap.get(node), true);
            }
        }
    }

    return que.map(node => node.val);
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
