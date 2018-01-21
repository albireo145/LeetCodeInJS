/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var helper = function(candidates, target, startpos){
        if(target == 0) return res.push(list.slice(0));
        if(target < 0) return;
        for(var i = startpos; i < candidates.length; i++){
            if(i > startpos && candidates[i] == candidates[i - 1]) continue;
            list.push(candidates[i]);
            arguments.callee(candidates, target - candidates[i], i + 1);
            list.pop();
        }
    }
    var list = [];
    var res = [];
    candidates.sort((a,b) => a-b);
    helper(candidates, target, 0);
    return res;
};