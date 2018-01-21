/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    var h1 = headA;
    var h2 = headB;
    while(h1 != h2 ) {
        h1 = h1 == null ? headB : h1.next;
        h2 = h2 == null ? headA : h2.next;
    }
    return h1;
};

// var getIntersectionNode = function(headA, headB) {
//     var set = new Set();
//     var cur = headA;
//     while(cur != null){
//         set.add(cur);
//         cur = cur.next;
//     }
//     cur = headB;
//     while(cur != null){
//         if(set.has(cur)) return cur;
//         cur = cur.next;
//     }
//     return null;
// };

// var getIntersectionNode = function(headA, headB) {
//     if(headA == null || headB == null) return null;
//     var h1 = headA;
//     var h2 = headB;
//     while(h1 != null && h2 !=null){
//         h1 = h1.next;
//         h2 = h2.next;
//     }
//     if(h1 == null) h1 = headB
//     else h2 = headA;
//     while(h1 != null && h2 !=null){
//         h1 = h1.next;
//         h2 = h2.next;
//     }
//     if(h1 == null) h1 = headB
//     else h2 = headA;
//     while(h1 != null && h2 !=null){
//         if(h1 == h2) return h1;
//         h1 = h1.next;
//         h2 = h2.next;
//     }
//     return null;
// };