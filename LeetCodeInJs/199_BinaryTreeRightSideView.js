/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// bfs
var rightSideView = function(root) {
    if(root == null) return [];
    var queue = [root];
    var res = [];
    var node;
    while(queue.length > 0){
        var n = queue.length;
        while(n-- > 0){
            node = queue.shift();
            if(node.left != null) queue.push(node.left);
            if(node.right != null) queue.push(node.right);
        }
        res.push(node.val);
    }
    return res;
};

// dfs
// var rightSideView = function(root) {
//     if(root == null) return [];
//     var stk = [[root, 0]];
//     var res = [];
//     while(stk.length > 0){
//         var pair = stk.pop();
//         var node = pair[0];
//         var depth = pair[1];
//         res[depth] = node.val;
//         if(node.right != null) stk.push([node.right, depth + 1]);
//         if(node.left != null) stk.push([node.left, depth + 1]);
//     }
//     return res;
// };