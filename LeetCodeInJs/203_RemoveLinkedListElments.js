/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummy = {next:head};
    var pre = dummy;
    var node = head;
    while(node != null){
        if(node.val == val){
            pre.next = node.next;
            node = node.next;
            continue;
        }
        node = node.next;
        pre = pre.next;
    }
    return dummy.next;
};