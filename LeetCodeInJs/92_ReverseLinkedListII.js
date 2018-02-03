/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = {};
    dummy.next = head;
    var pre = dummy, start = head;
    for(var i = 1; i < m; i++){
        pre = pre.next;
        start = start.next;
    }
    var curr = start.next;
    for(var i = m; i < n; i++){
        start.next = curr.next;
        curr.next = pre.next;
        pre.next = curr;
        curr = start.next;
        // curr = pre.next;
        // pre.next = start.next;
        // start.next = start.next.next;
        // pre.next.next = curr;
    }
    return dummy.next;
};