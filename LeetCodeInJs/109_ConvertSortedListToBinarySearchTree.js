/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head == null) return null;
    var BSTBuilder = function(head,tail) {
        if(head == tail) return null;
        var fast = head;
        var slow = head;
        while(fast != tail && fast.next != tail){
            fast = fast.next.next;
            slow = slow.next;
        }
        var treeNode = new TreeNode(slow.val);
        treeNode.left = arguments.callee(head,slow);
        treeNode.right = arguments.callee(slow.next,tail);
        return treeNode;
    }
    return BSTBuilder(head,null);
};
// var sortedListToBST = function(head) {
//     var curNode = head;
//     var BSTBuilder = function(start,end) {
//         if(start > end) return null;
        
//         var mid = Math.ceil(start + (end - start) /2);
//         var left = arguments.callee(start, mid - 1);
        
//         var treeNode = new TreeNode(curNode.val)
//         treeNode.left = left;
//         curNode = curNode.next;
        
//         var right = arguments.callee(mid + 1, end);
//         treeNode.right = right;
//         return treeNode;
//     }
//     var size = 0;
//     while(head != null){
//         head = head.next;
//         size++;
//     }
//     return BSTBuilder(0, size - 1);
// };