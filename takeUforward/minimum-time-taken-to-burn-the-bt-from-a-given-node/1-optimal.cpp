        if(!root) return 0;

        let parentMap = new Map();
        function parentCheck(){
            let que = [];
            que.push(root);

            while(que.length){
                let size = que.length;
                for(let i = 0; i < size; i++){
                    let node = que.shift();
                    if(node.data === start) start = node;

                    if(node.left) {
                        que.push(node.left);
                        parentMap.set(node.left, node);
                    }
                    if(node.right) {
                        que.push(node.right);
                        parentMap.set(node.right, node);
                    }
                }
            }
        }
        parentCheck();

        let que = [];
        let burned = new Set;
        que.push(start);
        burned.add(start);
        let dist = 0;

        while(que.length){
            let size = que.length;
            let isBurned = false;

            for(let i = 0; i < size; i++){
                let node = que.shift(); //can be replaced with front pointer in queue

                if(node.left && !burned.has(node.left)){ 
                    que.push(node.left);
                    burned.add(node.left);
                    isBurned = true;
                }
                if(node.right && !burned.has(node.right)){
                    que.push(node.right);
                    burned.add(node.right);
                    isBurned = true;
                }
                if(parentMap.has(node) && !burned.has(parentMap.get(node))){
                    que.push(parentMap.get(node));
                    burned.add(parentMap.get(node));
                    isBurned = true;
                }

            }

            if(isBurned) dist++;
        }

        return dist;
