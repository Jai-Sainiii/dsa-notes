# 114. Flatten Binary Tree to Linked List

**Platform:** LeetCode · **Difficulty:** Medium · **Problem:** [leetcode.com/problems/flatten-binary-tree-to-linked-list](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

**Tags:** `Linked List` `Stack` `Tree` `Depth-First Search` `Binary Tree`

## Problem

Given the `root` of a binary tree, flatten the tree into a "linked list":

-   The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
-   The "linked list" should be in the same order as a [**pre-order** **traversal**](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) of the binary tree.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg)

```
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
```

**Example 2:**

```
Input: root = []
Output: []
```

**Example 3:**

```
Input: root = [0]
Output: [0]
```

**Constraints:**

-   The number of nodes in the tree is in the range `[0, 2000]`.
-   `-100 <= Node.val <= 100`

**Follow up:** Can you flatten the tree in-place (with `O(1)` extra space)?

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Better | O(n) | O(n) for recursive stack space, worst case height of tree. |
| 2 | Optimal | O(n) | O(1) |
| 3 | Better version with +stack space | O(n) | O(n) for extra stack space |

### 1. Better

Go to right right until you got to right end then mark it's right to prev and mark it's left to null and make the current node to prev so when you go back previous guy then this mark it's right to the prev pointer that points to the previous node you visited.. In the last the binary tree will flatten completely...

**Time:** O(n) · **Space:** O(n) for recursive stack space, worst case height of tree.

```javascript
    if(!root) return root; 
    let prev = null;
    function flat(node){
        if(node === null) return;

        flat(node.right);
        flat(node.left);

        node.right = prev;
        node.left = null;
        prev = node;
    }
    flat(root);
```

Source: [`1-better.js`](./1-better.js)

### 2. Optimal

The approach is simple first go the left's right most then link it to the curr (firstly root) to the curr node's right so you are moving entire left sub-tree to the right with left last element points to the curr node's right.. then curr node's right becomes the left sub-tree because we link the last of left to the right so we don't have to fear to loose any element... In the last we will update the curr to curr's right because we moved entire thing from left to right... then we continue this mention until we moved to the right's last leaf null..

**Time:** O(n) · **Space:** O(1)

```cpp
    let curr = root;
    while(curr){
        if(curr.left){
            let prev = curr.left;
            while(prev.right) prev = prev.right;

            prev.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
```

Source: [`2-optimal.cpp`](./2-optimal.cpp)

### 3. Better version with +stack space

first we will start from the root then we will add this in our stack. Then we pops out the top of the stack then we check for right and left element if there then we are going to add them into stack then we will point the current node's right to the top of the stack because that's what we have to do inorder to make the element in the right side only...

**Time:** O(n) · **Space:** O(n) for extra stack space

```javascript
    if(!root) return root;

    let stack = [];
    stack.push(root);
    while(stack.length){
        let node = stack.pop();

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);

        if(stack.length) node.right = stack[stack.length-1];
        node.left = null;
    }
```

Source: [`3-better-version-with-stack-space.js`](./3-better-version-with-stack-space.js)

---

<sub>Saved with AlgoNotes</sub>
