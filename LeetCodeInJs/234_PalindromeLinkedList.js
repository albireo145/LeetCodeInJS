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
var isPalindrome = function(head) {
    var slow = head;
    var fast = head;
    if(fast == null || fast.next == null) return true;
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }
    var dummy = slow;
    var start = dummy.next;
    var then = start.next;
    while(then != null){
        start.next = then.next;
        then.next = dummy.next;
        dummy.next = then;
        then = start.next;
    }
    fast = slow.next;
    slow = head;
    while(fast != null){
        if(slow.val != fast.val) return false;
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};