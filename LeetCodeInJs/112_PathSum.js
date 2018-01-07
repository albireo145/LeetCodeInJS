/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root == null) return false;
    var helper = function(root, sum, least){
        least += root.val;
        if(root.left == null && root.right == null) return sum == least;
        var left = false, right = false;
        if(root.left != null){
            var left = arguments.callee(root.left, sum, least);
        }if(root.right != null){
            var right = arguments.callee(root.right, sum, least);
        }
        return left || right;
    }
    return helper(root,sum,0);
};

// var hasPathSum = function(root, sum) {
//     var helper = function(root, sum){
//         if(root == null) return false;
//         if(root.left == null && root.right == null) return sum == root.val;
//         return arguments.callee(root.left, sum - root.val) || arguments.callee(root.right, sum - root.val);
//     }
//     return helper(root,sum,0);
// };