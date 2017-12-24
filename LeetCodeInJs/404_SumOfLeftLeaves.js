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
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    var stack = [];
    var node = root;
    while(node != null){
        if(node.left != null){
//             leaf
            if(node.left.left == null && node.left.right == null) {
                sum += node.left.val;
            }else{
                stack.push(node.left);
            }
        }
        if(node.right != null){
            stack.push(node.right);
        }
        node = stack.pop();
    }
    return sum;
};