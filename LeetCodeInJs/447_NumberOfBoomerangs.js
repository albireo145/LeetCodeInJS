/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var res = 0;
    for(var i = 0; i < points.length; i++){
        var map = {};
        for(var j = 0; j < points.length; j++){
            if(i == j) continue;
            var xdiff = Math.pow(points[i][0] - points[j][0], 2);
            var ydiff = Math.pow(points[i][1] - points[j][1], 2);
            map[xdiff + ydiff] = (map[xdiff + ydiff] || 0) + 1;
        }
        for(var el in map){
            res += map[el] * (map[el] - 1);
        }
    }
    return res;
};