/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var helper = function(candidates, target, pos, sum, list, res){
        if(pos == candidates.length || sum > target) return;
        if(sum == target){
            res.push(list.slice(0));
            return;
        }
        for(var i = pos; i < candidates.length; i++){
            list.push(candidates[i]);
            sum += candidates[i];
            arguments.callee(candidates, target, i, sum, list, res);
            sum -= candidates[i];
            list.pop();
        }
    }
    var list = [];
    var res = [];
    helper(candidates, target, 0, 0, list, res);
    return res;
};