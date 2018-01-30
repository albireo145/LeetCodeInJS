/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    var list = [];
    var backtrace = function(n, k, pos){
        if(list.length == k) res.push(list.slice(0));
        for(var i = pos; i <= n; i++){
            list.push(i);
            arguments.callee(n, k, i + 1);
            list.pop();
        }
    }
    backtrace(n, k, 1);
    return res;
};