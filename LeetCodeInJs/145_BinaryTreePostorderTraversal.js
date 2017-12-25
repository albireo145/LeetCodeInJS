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
var postorderTraversal = function(root) {
    if(root == null) return [];
    var res = []
    var queue = [root];
    var node = null;
    while(queue.length > 0){
        node = queue.pop();
        res.unshift(node.val);
        if(node.left != null) queue.push(node.left);
        if(node.right != null) queue.push(node.right);
    }
    return res;
};