/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length == 0) return 0;
    points.sort((a,b)=> a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    var end = points[0][1];
    var arrows = 1;
    for(var i = 1, len = points.length; i < len; i++){
        if(points[i][0] <= end) end = Math.min(end,points[i][1]);
        else{
            arrows++;
            end = points[i][1];
        }
    }
    return arrows;
};