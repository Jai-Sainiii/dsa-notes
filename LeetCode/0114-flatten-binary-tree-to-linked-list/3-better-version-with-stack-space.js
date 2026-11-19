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
