/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res;
    var cur;
    var upper = 0;
    while(l1!=null && l2!=null){
        var num = l1.val + l2.val + upper;
        if(typeof(cur)=='undefined'){
            if(num>=10){
                upper = (num/10) >> 0;
                num = num%10;
                cur = new ListNode(num);
            }else{
                upper = 0;
                cur = new ListNode(num);
            }
            res = cur;
            l1 = l1.next;
            l2 = l2.next;
        } 
        else{
            if(num>=10){
                upper = (num/10) >> 0;
                num = num%10;
                cur.next = new ListNode(num);
            }else{
                upper = 0;
                cur.next = new ListNode(num);
            }
            cur = cur.next;
            l1 = l1.next;
            l2 = l2.next;
        }
    }
    return res;
};