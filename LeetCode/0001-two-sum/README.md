# 1. Two Sum

**Platform:** LeetCode · **Difficulty:** Easy · **Problem:** [leetcode.com/problems/two-sum](https://leetcode.com/problems/two-sum/)

**Tags:** `Array` `Hash Table`

## Approaches

| # | Approach | Time | Space |
|---|---|---|---|
| 1 | Optimal | o(n) | o(n) |

### 1. Optimal

**Time:** o(n) · **Space:** o(n)

```javascript
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }else{
            map.set(nums[i], i)
        }
    }
```

Source: [`1-optimal.js`](./1-optimal.js)

## Notes

Did

---

<sub>Saved with AlgoNotes</sub>
