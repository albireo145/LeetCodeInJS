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
    while(l1!=null || l2!=null || upper!=0){
        var num = 0;
        l1 && (num += l1.val);
        l2 && (num += l2.val);
        if(l1==null && l2==null){
            num = upper;
        }else{
            num += upper;
        }
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
            l1 && (l1 = l1.next);
            l2 && (l2 = l2.next);
        }
    }
    return res;
};
