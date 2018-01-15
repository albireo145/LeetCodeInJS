/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root == null) return null;
    if(key < root.val){
        root.left = arguments.callee(root.left,key);
    }else if(key > root.val){
        root.right = arguments.callee(root.right,key);
    }else{
        if(root.left == null) return root.right;
        else if(root.right == null) return root.left;
        var minNode = findMin(root.right);
        root.val = minNode.val;
        root.right = arguments.callee(root.right,root.val);
    }
    return root;
};

var findMin = function(root){
    while(root.left != null){
        root = root.left;
    }
    return root;
};