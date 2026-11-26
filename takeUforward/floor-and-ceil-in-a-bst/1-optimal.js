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
