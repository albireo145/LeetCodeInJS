/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// bfs
var findBottomLeftValue = function(root) {
    var res = 0;
    var queue = [root];
    var node;
    while(queue.length > 0){
        var n = queue.length;
        while(n-- > 0){
            node = queue.shift();
            if(node != null){
                res = node.val;  
                queue.push(node.right);
                queue.push(node.left);
            } 
        }
    }
    return res;
};

// dfs
// var findBottomLeftValue = function(root) {
//     var res = 0;
//     var maxDepth = 0;
//     var helper = function(root,depth){
//         if(root == null) return;
//         if(maxDepth <= depth){
//             maxDepth = depth;
//             res = root.val;
//         }
//         arguments.callee(root.right, depth + 1);
//         arguments.callee(root.left, depth + 1);
//     }
//     helper(root,0);
//     return res;
// };