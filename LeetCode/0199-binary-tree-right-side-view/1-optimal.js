    let ans = [];
    function solve(node, level){
        if(!node) return;

        if(level === ans.length) ans.push(node.val);

        if(node.right) solve(node.right, level+1);
        if(node.left) solve(node.left, level+1);
    }

    solve(root, 0);

    return ans;
