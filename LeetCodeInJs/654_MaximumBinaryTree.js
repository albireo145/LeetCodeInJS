/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// one pass O(n)
var constructMaximumBinaryTree = function(nums) {
    var stack = [];
    for(var i = 0; i < nums.length; i++){
        var cur = new TreeNode(nums[i]);
        while(stack.length > 0 && stack[stack.length - 1].val < nums[i]){
           cur.left = stack.pop(); 
        }
        if(stack.length > 0) stack[stack.length - 1].right = cur;
        stack.push(cur);
    }
    return stack.length > 0 ? stack[0] : null;
};
// recursion O(nlogn)
// var constructMaximumBinaryTree = function(nums) {
//     var helper = function(nums, start, end){
//         if(start > end) return null;
//         var idx = start;
//         for(var i = start; i < end + 1; i++){
//             idx = nums[i] > nums[idx] ? i : idx;
//         }
//         var root = new TreeNode(nums[idx]);
//         root.left = arguments.callee(nums, start, idx - 1);
//         root.right = arguments.callee(nums, idx + 1,end);
//         return root;
//     }
//     return helper(nums, 0, nums.length - 1);
// };