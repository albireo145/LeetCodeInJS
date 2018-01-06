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
var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null;
    var BSTBuilder = function(start,end){
        if(start > end) return null;       
        var mid = Math.ceil(start + (end - start) / 2);
        var treeNode = new TreeNode(nums[mid])
        treeNode.left = arguments.callee(start, mid - 1);
        treeNode.right = arguments.callee(mid + 1, end);
        return treeNode;
    }
    var len = nums.length;
    return BSTBuilder(0,len - 1)
};