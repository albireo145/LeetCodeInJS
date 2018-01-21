/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head == null) return head;
    var p = head;
    while(p != null){
        var temp = new RandomListNode(p.label);
        temp.next = p.next;
        temp.random = p.random;
        p.next = temp;
        p = p.next.next;
    }
    var newhead = head.next;
    
    p = head;
    while(p != null){
        p.next.random = p.random == null ? null : p.random.next;
        p = p.next.next;
    }
    p = head.next;
    
    while(p != null){
        head.next = p.next;
        head = head.next;
        p.next = p.next == null ? null : p.next.next;
        p = p.next;
    }
    return newhead;
};