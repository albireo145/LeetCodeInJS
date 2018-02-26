/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var diff = 0;
    var stk = preorder.split(',');
    if(stk.pop() != '#') return false;
    for(var i = 0;i < stk.length; i++){
        if(stk[i] == '#') diff--;
        else diff++;
        if(diff < 0) return false;
    }
    return diff == 0;
};