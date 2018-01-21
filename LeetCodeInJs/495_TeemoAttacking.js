/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0) return 0
    var count = duration;
    var end = timeSeries[0] + duration;
    for(var i = 1; i < timeSeries.length; i++){
        if(timeSeries[i] < end){
            count += timeSeries[i] - timeSeries[i - 1];
        }
        else{
            count += duration;
        }
        end = timeSeries[i] + duration;
    }
    return count;
};