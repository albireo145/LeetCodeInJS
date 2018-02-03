/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null) return [];
    var dummy = {};
    dummy.next = head;
    var start = head, then = head.next;
    while(then != null){
        start.next = then.next;
        then.next = dummy.next;
        dummy.next = then;
        then = start.next;
    }
    return dummy.next;
};