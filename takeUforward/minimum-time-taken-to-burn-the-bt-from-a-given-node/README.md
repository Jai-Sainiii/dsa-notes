# Minimum time taken to burn the BT from a given Node

**Platform:** takeUforward · **Difficulty:** Pro · **Problem:** [takeuforward.org/practice/dsa/minimum-time-taken-to-burn-the-bt-from-a-given-node](https://takeuforward.org/practice/dsa/minimum-time-taken-to-burn-the-bt-from-a-given-node)

**Tags:** `Binary Trees`

## Problem

Given a target node data and a root of binary tree. If the target is set on fire, determine the shortest amount of **time** needed to **burn** the entire binary tree.

It is known that in 1 second all nodes connected to a given node get burned. That is its left child, right child, and parent.

### Example 1

**Input :** root = [1, 2, 3, 4, null, 5, 6, null, 7]. target = 1

**Output :** 3

**Explanation :** The node with value 1 is set on fire.

In 1st second it burns node 2 and node 3.

In 2nd second it burns nodes 4, 5, 6.

In 3rd second it burns node 7.

![](https://static.takeuforward.org/content/1789463238_3iwx_0oc.webp)

### Example 2

**Input :** root = [1, 2, 3, null, 5, null, 4], target = 4

**Output :** 4

**Explanation :** The node with value 4 is set on fire.

In 1st second it burns node 3.

In 2nd second it burns node 1.

In 3rd second it burns node 2.

In 4th second it burns node 5.

![](https://static.takeuforward.org/content/1789463245_YIQgueZg.webp)

### Constraints

-   1 <= Number of Nodes <= 10^4
-   -10^5 <= Node.val <= 10^5
-   All Node.val values are **unique**.
-   target will always be present in tree

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) | O(n) |

### 1. Optimal

**Time:** O(n) · **Space:** O(n)

```cpp
        if(!root) return 0;

        let parentMap = new Map();
        function parentCheck(){
            let que = [];
            que.push(root);

            while(que.length){
                let size = que.length;
                for(let i = 0; i < size; i++){
                    let node = que.shift();
                    if(node.data === start) start = node;

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

        let que = [];
        let burned = new Set;
        que.push(start);
        burned.add(start);
        let dist = 0;

        while(que.length){
            let size = que.length;
            let isBurned = false;

            for(let i = 0; i < size; i++){
                let node = que.shift(); //can be replaced with front pointer in queue

                if(node.left && !burned.has(node.left)){ 
                    que.push(node.left);
                    burned.add(node.left);
                    isBurned = true;
                }
                if(node.right && !burned.has(node.right)){
                    que.push(node.right);
                    burned.add(node.right);
                    isBurned = true;
                }
                if(parentMap.has(node) && !burned.has(parentMap.get(node))){
                    que.push(parentMap.get(node));
                    burned.add(parentMap.get(node));
                    isBurned = true;
                }

            }

            if(isBurned) dist++;
        }

        return dist;
```

Source: [`1-optimal.cpp`](./1-optimal.cpp)

---

<sub>Saved with AlgoNotes</sub>
