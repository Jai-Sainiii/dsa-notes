    let preorder = [];
    let curr = root;
    while(curr){
        if(!curr.left){
            preorder.push(curr.val);
            curr = curr.right;
        }else{
            let prev = curr.left;
            while(prev.right && prev.right !== curr){
                prev = prev.right;
            }

            if(!prev.right){
                prev.right = curr;
                preorder.push(curr.val);
                curr = curr.left;
            }else{
                prev.right = null;
                curr = curr.right;
            }
        }
    }
    
    return preorder;
