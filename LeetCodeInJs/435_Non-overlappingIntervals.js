/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length == 0) return 0;
    intervals.sort((a,b) => a.end - b.end);
    var cur = 0, end = intervals[0].end;
    for(var i = 1; i < intervals.length; i++){
        if(end > intervals[i].start){
            cur++;
        }else{
            end = intervals[i].end;
        }
    }
    return cur;
};