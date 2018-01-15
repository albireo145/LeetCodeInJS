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
var detectCycle = function(head) {
    var fast = head;
    var slow = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow && fast != null){
            slow = head;
            while(fast != slow){
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        };
    }
    return null;
};

