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

var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    var fakeHead = new ListNode(Infinity);
    fakeHead.next = head;
    var current = fakeHead;
    while(current.next != null && current.next.next != null){
        var p1 = current.next;
        var p2 = current.next.next;
        p1.next = p2.next;
        current.next = p2;
        current.next.next = p1;
        current = current.next.next;
    }
    return fakeHead.next;
};
// recursivel
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    var n = head.next;
    head.next = arguments.callee(head.next.next);
    n.next = head;
    return n;
};