var isBalanced = function(root) {
    if(root == null) return true;
    var left = depth(root.left);
    var right = depth(root.right);
    if(Math.abs(left - right) > 1) return false;
    return arguments.callee(root.left) && arguments.callee(root.right);
};
var depth = function(root){
    if(root == null) return 0;
    if(root.left == null && root.right == null) return 1;
    return Math.max(depth(root.left),depth(root.right)) + 1;
};