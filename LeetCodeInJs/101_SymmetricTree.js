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
var isSymmetric = function(root) {
    if(root == null || (root.left == null && root.right == null)) return true;
    if((root.left != null && root.right == null ) || (root.left == null && root.right != null)) return false;
    if(root.left.val != root.right.val) return false;
    var queue = [[root.left,root.right]];
    var node1,node2;
    while(queue.length > 0){
        var nodeSet = queue.pop();
        node1 = nodeSet[0];
        node2 = nodeSet[1];
        if((node1.left != null && node2.right == null ) || (node1.left == null && node2.right != null)) return false;
        if((node1.right != null && node2.left == null ) || (node1.right == null && node2.left != null)) return false;
        if(node1.left != null && node2.right != null){
            if(node1.left.val != node2.right.val) return false;
            queue.push([node1.left,node2.right])
        }
         if(node1.right != null && node2.left != null){
            if(node1.right.val != node2.left.val) return false;
            queue.push([node1.right,node2.left])
        }
    }
    return true;
};