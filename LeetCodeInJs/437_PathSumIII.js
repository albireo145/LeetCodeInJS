/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// Using map store pathsum 
// space O(depth) time O(n)
var pathSum = function(root, sum) {
    var num = 0;
    var map = {0:1};
    var helper = function(root, sum, path){
        if(root == null) return;
        path += root.val;
        var diff = path - sum;
        num += map[diff] ? map[diff] : 0;
        map[path] = (map[path] || 0) + 1;
        arguments.callee(root.left, sum, path);
        arguments.callee(root.right, sum, path);
        // --map[path] instand of delete op, space up to O(n)
        if(--map[path] == 0) delete map.path;
    }
    helper(root, sum, 0);
    return num;
};

// recursive stack O(depth) time O(n^2)
// var pathSum = function(root, sum) {
//     if(root == null) return 0;
//     var helper = function(root, sum){
//         if(root == null) return 0
//         return (root.val == sum ? 1 : 0) + arguments.callee(root.left, sum - root.val) + arguments.callee(root.right, sum - root.val);
//     }
//     return helper(root, sum) + arguments.callee(root.left, sum) + arguments.callee(root.right, sum);
// };

// var pathSum = function(root, sum) {
//     var num = 0;
//     var helper = function(root, sum, flag){
//         if(root == null) return
//         if(flag){
//             root.left && arguments.callee(root.left, sum, true);
//             root.right && arguments.callee(root.right, sum, true);
//         }
//         sum -= root.val;
//         if(sum == 0){
//             num++;
//         } 
//         root.left && arguments.callee(root.left, sum, false);
//         root.right && arguments.callee(root.right, sum, false);
//     }
//     helper(root, sum, true);
//     return num;
// };