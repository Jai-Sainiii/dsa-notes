# Floor and Ceil in a BST

**Platform:** takeUforward · **Difficulty:** Core · **Problem:** [takeuforward.org/practice/dsa/floor-and-ceil-in-a-bst](https://takeuforward.org/practice/dsa/floor-and-ceil-in-a-bst)

**Tags:** `Binary Search Trees`

## Problem

Given a **root** of binary search tree and a **key**(node) value, find the floor and ceil value for that particular key value.

-   **Floor** Value Node: Node with the greatest data lesser than or equal to the key value.

-   **Ceil** Value Node: Node with the smallest data larger than or equal to the key value.

If a particular floor or ceil value is not present then output -1.

### Example 1

**Input :** root = [8, 4, 12, 2, 6, 10, 14] , key = 11

**Output :** [10, 12]

**Explanation :**

![](https://static.takeuforward.org/content/1789454993__SSnC3Ww.webp)

### Example 2

**Input :** root = [8, 4, 12, 2, 6, 10, 14] , key = 15

**Output :** [14, -1]

**Explanation :**

![](https://static.takeuforward.org/content/1789455129_DglvF6AD.webp)

### Constraints

-   1 <= Number of Nodes <= 5000
-   1 <= Node.val <= 10^7
-   1 <= key <= 10^7

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | O(n) | O(1) |

### 1. Optimal

**Time:** O(n) · **Space:** O(1)

```javascript
        let floor = -1, ceil = -1;

        //floor
        let curr = root;
        while(curr){
            if(curr.data === key){
                floor = curr.data;
                break;
            }

            if(key > curr.data){
                floor = curr.data;
                curr = curr.right;
            }else curr = curr.left;
        }


        while(root){
            if(root.data === key){
                ceil = root.data;
                break;
            }

            if(key < root.data){
                ceil = root.data;
                root = root.left;
            }else root = root.right;
        }

        return [floor, ceil];
```

Source: [`1-optimal.js`](./1-optimal.js)

---

<sub>Saved with AlgoNotes</sub>
