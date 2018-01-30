/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var prev = 0; var next = cost[0];
    for(var i = 1; i < cost.length; i++){
        var curr = Math.min(prev, next);
        prev = next;
        next = curr + cost[i];
    }
    return Math.min(prev, next);
};