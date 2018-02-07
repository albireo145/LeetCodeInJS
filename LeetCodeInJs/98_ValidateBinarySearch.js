/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var prev = null;
    var helper = function(root){
        if(root == null) return true;
        if(arguments.callee(root.left) == false) return false;
        if(prev != null){
            if(prev >= root.val) return false;
        }
        prev = root.val;
        return arguments.callee(root.right);
    }
    
    return helper(root) ? true : false;
};