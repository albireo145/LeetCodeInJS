/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 0) return null;
    var merge2Lists = function(listNode1,listNode2){
        if(listNode1 == null) return listNode2;
        if(listNode2 == null) return listNode1;
        if(listNode1.val <= listNode2.val){
            listNode1.next = arguments.callee(listNode1.next,listNode2);
            return listNode1;
        }else{
            listNode2.next = arguments.callee(listNode2.next,listNode1);
            return listNode2;
        }
    }
    while(lists.length > 1){
        lists.push(merge2Lists(lists.shift(),lists.shift()));
    }
    return lists[0];
};