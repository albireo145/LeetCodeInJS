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
var getMinimumDifference = function(root) {
    var min = Infinity;
    var prev = null;
    var helper = function(root){
        if(root == null) return;
        arguments.callee(root.left);
        
        if(prev != null){
            min = Math.min(min, root.val - prev.val);
        }
        prev = root;
        
        arguments.callee(root.right);
    }
    helper(root);
    return min;
};