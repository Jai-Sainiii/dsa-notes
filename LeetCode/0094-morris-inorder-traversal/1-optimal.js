    let inorder = [];
    let curr = root;
    while(curr){
        if(!curr.left){
            inorder.push(curr.val);
            curr = curr.right;
        }else{
            let prev = curr.left;
            while(prev.right && prev.right !== curr){
                prev = prev.right;
            }

            if(!prev.right){
                prev.right = curr;
                curr = curr.left;
            }else{
                prev.right = null;
                inorder.push(curr.val);
                curr = curr.right;
            }
        }
    }

    return inorder;
