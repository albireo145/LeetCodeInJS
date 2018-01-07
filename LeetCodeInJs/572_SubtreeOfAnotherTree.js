/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    var spreorder = '';
    var stack = [s];
    var node;
    while(stack.length > 0){
        node = stack.pop();
        if(node == null) spreorder += 'null';
        else {
            spreorder += `#${node.val}`;
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    var tpreorder = '';
    stack = [t];
    while(stack.length > 0){
        node = stack.pop();
        if(node == null) tpreorder += 'null';
        else {
            tpreorder += `#${node.val}`;
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    return spreorder.indexOf(tpreorder) > -1;
};

// dfs
// var isSubtree = function(s, t) {
//     var dfs = function(s,t) {
//         if(s == null) return false;
//         else return compare(s,t) || arguments.callee(s.left,t) || arguments.callee(s.right,t);
//     }
//     var compare = function(x,y){
//         if(x == null && y == null) return true;
//         if(x == null || y == null) return false;
//         return x.val == y.val && arguments.callee(x.left,y.left) && arguments.callee(x.right,y.right);
//     }
//     return dfs(s,t);
// };