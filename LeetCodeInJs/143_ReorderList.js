/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head == null || head.next == null) return
    var reverse = function(head) {
        var pre = head, cur = head.next // 1-2-3-4
        while(cur.next != null){ // 3
            var temp = cur.next  // 3
            cur.next = temp.next // 2 -> 4
            temp.next = pre.next // 3 -> 2
            pre.next = temp // 1 -> 3
        }
    }
    var insert = function(head, mid, isEven) {
        // console.log(mid.val)
        var begin = head, end = mid.next
        mid.next = null
        isEven = isEven ? null : mid
        while(begin != isEven) {
            var temp = end.next // 1-2-3-6-5-4   tamp === 5
            end.next = begin.next // 6 - 2
            begin.next = end // 1 - 6
            begin = end.next // 2
            end = temp // 5
        }
    }
    var slow = head, fast = head
    var dummy = {next: head}
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    var isEven = fast ? false : true
    fast = dummy
    if(isEven){
        while(fast.next != slow){
            fast = fast.next
        }
    }else{
        fast = slow
    }
    reverse(fast)    
    insert(head, fast, isEven)
};
