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
