/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var nums = [1,2,3,4,5,6,7,8,9];
    var res = [];
    var list = [];
    var helper = function(list, k, n, pos){
        if(k == 0 && n == 0) res.push(list.slice(0));
        if(n < 0 || k == 0) return;
        for(var i = pos; i < 9; i++){
            list.push(nums[i]);
            arguments.callee(list, k - 1, n - nums[i], i + 1);
            list.pop();
        }
    }
    helper(list, k, n, 0);
    return res;
};