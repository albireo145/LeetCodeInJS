/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Infinity;
    var diff = 0;
    for(var i = 0; i < prices.length; i++){
        if(prices[i] > min) diff = Math.max(diff, prices[i] - min);
        else min = Math.min(min, prices[i]);
    }
    return diff;
};