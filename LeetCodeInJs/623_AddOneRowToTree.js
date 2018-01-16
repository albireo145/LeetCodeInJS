/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
// bfs
var addOneRow = function(root, v, d) {
    if(d == 1){
        var node = new TreeNode(v);
        node.left = root;
        root = node;
    }
    var queue = [root];
    var depth = 0;
    while(queue.length > 0){
        depth++;
        var n = queue.length;
        if(depth == d - 1){
            for(var i = 0; i < n ; i++){
                var node = queue.shift();
                var tl = node.left;
                var tr = node.right;
                if(node.left != null){
                    node.left = new TreeNode(v);
                    node.left.left = tl;
                }else{
                   node.left = new TreeNode(v);
                }
                if(node.right != null){
                    node.right = new TreeNode(v);
                    node.right.right = tr;
                }
                else{
                    node.right = new TreeNode(v);
                }
            }
        }else{
            for(var i = 0; i < n ; i++){
                var node = queue.shift();
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
    }
    return root;
};

//  dfs solution
// var addOneRow = function(root, v, d) {
//     if(d == 1){
//         var node = new TreeNode(v);
//         node.left = root;
//         root = node;
//     }
//     helper(root,v,d);
//     return root;
// };
// var helper = function(root, v, d){
//     if(root == null) return;
//     if(d == 2){
//         var tl = root.left;
//         var tr = root.right;
//         if(root.left != null){
//             root.left = new TreeNode(v);
//             root.left.left = tl;
//         }else{
//            root.left = new TreeNode(v);
//         }
//         if(root.right != null){
//             root.right = new TreeNode(v);
//             root.right.right = tr;
//         }
//         else{
//             root.right = new TreeNode(v);
//         }
//     }else{
//         arguments.callee(root.left, v, d - 1);
//         arguments.callee(root.right, v, d - 1);
//     }
// }