/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null) return false;
    var fast = head;
    var slow = head;
    while(fast =! null && slow != null && fast.next != null){
        if(fast == slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};