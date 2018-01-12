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
var widthOfBinaryTree = function(root) {
    var queue = [root];
    var queuePos = [1];
    var node;
    var width = 0;
    var len = queue.length;
    var start = 1;
    var end = 1;
    while(queue.length > 0){
        node = queue.shift();
        end = queuePos.shift();
        if(node.left != null){
            queue.push(node.left);
            queuePos.push(end * 2);
        }
        if(node.right != null){
            queue.push(node.right);
            queuePos.push(end * 2 + 1);
        }
        if(--len == 0){
            if(width < end - start + 1) width = end - start + 1;
            len = queue.length;
            start = queuePos[0];
        }
    }
    return width;
};