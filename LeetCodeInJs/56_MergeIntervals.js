/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length == 0) return [];
    intervals.sort(function(x,y){
        return x.start - y.start;
    });
    var res = [];
    var inter = intervals[0];
    for(var i = 1;i < intervals.length;i++){
        if(inter.end >= intervals[i].start){
            var temp = new Interval(inter.start,Math.max(inter.end,intervals[i].end));
            inter = temp;
        }else{
            res.push(inter);
            inter = intervals[i];
        }
    }
    res.push(inter);
    return res;
};