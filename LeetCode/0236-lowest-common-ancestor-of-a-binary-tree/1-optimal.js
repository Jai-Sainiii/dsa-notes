        function solve(node){
            if(node === null || node === p || node === q){
                return node; //got a mistake where i write root instead of node
            }

            let left = solve(node.left);
            let right = solve(node.right);

            if(left === null) return right;
            else if(right === null) return left;
            else return node; //both are not null means we got our anchestor;
        }

        return solve(root);
