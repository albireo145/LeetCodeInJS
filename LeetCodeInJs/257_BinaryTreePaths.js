/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root == null) return [];
    if(root.left == null && root.right == null) return ['' + root.val]
    var res = [];
    var helper = function(path, root, res){
        if(root == null) return;
        if(root.left == null && root.right == null) res.push(path += '->' + root.val);
        else{
            path += '->' + root.val;
            arguments.callee(path,root.left,res);
            arguments.callee(path,root.right,res);
        }
    }
    helper(root.val + '',root.left,res);
    helper(root.val + '',root.right,res);
    return res;
};