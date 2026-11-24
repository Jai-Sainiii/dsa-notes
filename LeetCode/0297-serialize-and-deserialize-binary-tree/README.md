# 297. Serialize and Deserialize Binary Tree

**Platform:** LeetCode · **Difficulty:** Hard · **Problem:** [leetcode.com/problems/serialize-and-deserialize-binary-tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

**Tags:** `String` `Tree` `Depth-First Search` `Breadth-First Search` `Design` `Binary Tree`

## Problem

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**Clarification:** The input/output format is the same as [how LeetCode serializes a binary tree](https://support.leetcode.com/hc/en-us/articles/32442719377939-How-to-create-test-cases-on-LeetCode#h_01J5EGREAW3NAEJ14XC07GRW1A). You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
```

**Example 2:**

```
Input: root = []
Output: []
```

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 10^4]`.
-   `-1000 <= Node.val <= 1000`

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) for serialization + O(n) for deserialization | O(n) for serialize que & str + O(n) for deserialize |

### 1. Optimal

Level order traversal used for serialize then deserialize.

**Time:** O(n) for serialization + O(n) for deserialization · **Space:** O(n) for serialize que & str + O(n) for deserialize

```javascript
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return "";

    let str = [];
    let que = [root];
    let front = 0;

    while(front < que.length){
        let node = que[front++];

        if(!node){
            str.push("#");
            continue;
        }

        str.push(node.val);
        que.push(node.left);
        que.push(node.right);
    }

    return str.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "") return null;

    let values = data.split(",");
    let que = [];
    let root = new TreeNode(Number(values[0]));
    que.push(root);
    let front = 0;

    for(let i = 1; i < values.length; i++){
        let node = que[front++];
        if(values[i] !== "#"){
            let left = new TreeNode(Number(values[i]));
            node.left = left;
            que.push(left);
        }
        if(values[++i] !== "#"){
            let right = new TreeNode(Number(values[i]));
            node.right = right;
            que.push(right);
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
