    let curr = root;
    while(curr){
        if(curr.left){
            let prev = curr.left;
            while(prev.right) prev = prev.right;

            prev.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
