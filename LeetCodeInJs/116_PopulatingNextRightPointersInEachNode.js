/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(root == null) return;
    var stk = [root];
    var node;
    while(stk.length > 0){
        var num = stk.length;
        var rightNode = null;
        for(var i = 0; i < num; i++){
            node = stk.pop();
            node.next = rightNode;
            if(node.right != null) stk.unshift(node.right);
            if(node.left != null) stk.unshift(node.left);
            rightNode = node;
        }
    }
};