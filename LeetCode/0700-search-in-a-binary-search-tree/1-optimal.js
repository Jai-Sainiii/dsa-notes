    while(root && root.val !== val){
        val < root.val ? root = root.left : root = root.right;
    }
    return root;
