/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    var map = {};
    var min = wall.length;
    for(var i = 0; i < wall.length; i++){
        var sum = 0;
        for(var j = 0; j < wall[i].length - 1; j++){
            sum += wall[i][j];
            map[sum] = (map[sum] || 0) + 1;
        }
    }
    for(var key in map){
        min = Math.min(wall.length - map[key], min);
    }
    return min;
};
// var leastBricks = function(wall) {
//     var map = {};
//     var min = wall.length;
//     for(var i = 0; i < wall.length; i++){
//         var sum = 0;
//         for(var j = 0; j < wall[i].length - 1; j++){
//             sum += wall[i][j];
//             map[sum] = (map[sum] || 0) + 1;
//             min = Math.min(wall.length - map[sum], min);
//         }
//     }
//     return min;
// };