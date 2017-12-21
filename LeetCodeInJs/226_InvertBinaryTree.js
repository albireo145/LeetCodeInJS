/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var queue = [];
    var node = root;
    while(node != null){
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        if(node.left != null) queue.push(node.left);
        if(node.right != null) queue.push(node.right);
        node = queue.shift();
    }
    return root;
};

// var invertTree = function(root) {
//     if(root == null) return null;
//     var temp = root.left;
//     root.left = root.right;
//     root.right = temp;
//     arguments.callee(root.left);
//     arguments.callee(root.right);
//     return root;
// };