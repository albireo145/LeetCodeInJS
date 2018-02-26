/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
// Space O(1)  time insert
var insert = function(intervals, newInterval) {
    var i = 0;
    while(i < intervals.length && intervals[i].end < newInterval.start) i++;
    while(i < intervals.length && intervals[i].start <= newInterval.end){
        newInterval.start = Math.min(intervals[i].start, newInterval.start);
        newInterval.end = Math.max(intervals[i].end, newInterval.end);
        intervals.splice(i, 1)
    }
    intervals.splice(i, 0, newInterval);
    return intervals;
};

// Space O(n) timae O(n)
var insert = function(intervals, newInterval) {
    var res = [];
    var i = 0;
    while(i < intervals.length && intervals[i].end < newInterval.start) res.push(intervals[i++]);
    while(i < intervals.length && intervals[i].start <= newInterval.end){
        newInterval.start = Math.min(intervals[i].start, newInterval.start);
        newInterval.end = Math.max(intervals[i].end, newInterval.end);
        i++;
    }
    res.push(newInterval);
    res.push(...intervals.splice(i));
    return res;
};