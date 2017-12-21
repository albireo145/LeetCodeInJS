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
var preorderTraversal = function(root) {
    var res = [];
    var stk = [];
    var node = root;
    while(node != null){
        res.push(node.val);
        if(node.right != null){
            stk.push(node.right);
        }
        if(node.left != null){
            stk.push(node.left);
        }
        node = stk.pop();
    }
    return res;
};