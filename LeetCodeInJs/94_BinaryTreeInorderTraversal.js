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
var inorderTraversal = function(root) {
    if(root == null) return [];
    var stack = [root];
    var res = [];
    var node;
    while(stack.length > 0){
        node = stack[stack.length - 1];
        //该过程一直找到没有左节点的节点才停止
        while(node.left != null){
            node = node.left;
            stack.push(node);
        }
        //此时的S.top()是一个没有left的节点，按照中序遍历的特性，可以将其直接输出。
        //while循环会一直将栈顶输出，直到遇到有右节点的节点，这样能保证栈中元素不会重复寻找左孩子
        while(stack.length > 0){
            // 没有left节点 从队列中弹出
            node = stack.pop();
            res.push(node.val);
            if(node.right != null){
                stack.push(node.right);
                break;
            }
        }
    }
    return res;
};
// var inorderTraversal = function(root) {
//     var res = [];
//     var helper = function(root){
//         if(root == null) return;
//         helper(root.left);
//         res.push(root.val);
//         helper(root.right);
//     }
//     helper(root);
//     return res;
// };