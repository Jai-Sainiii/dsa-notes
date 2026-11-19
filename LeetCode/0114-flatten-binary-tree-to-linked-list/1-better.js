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
