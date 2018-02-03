/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var res = [];
    var stk = [];
    var i = 0;
    while(i < temperatures.length){
        while(stk.length > 0 && stk[stk.length - 1][0] < temperatures[i]){
            var pair = stk.pop();
            res[pair[1]] = i - pair[1];
        }
        stk.push([temperatures[i],i++]);
    }
    while(stk.length > 0){
        var pair = stk.pop();
        res[pair[1]] = 0;
    }
    return res;
};