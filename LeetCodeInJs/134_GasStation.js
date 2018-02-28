/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var sum = 0, tank = 0, pos = 0;
    for(var i = 0; i < gas.length; i++){
        tank += gas[i] - cost[i];
        if(tank < 0){
            sum += tank;
            pos = i + 1;
            tank = 0;
        }
    }
    sum += tank;
    return sum < 0 ? -1 : pos;
};
// var canCompleteCircuit = function(gas, cost) {
//     var sum = 0, tank = 0, pos = 0;
//     for(var i = 0; i < gas.length; i++){
//         tank += gas[i] - cost[i];
//         sum += tank;
//         if(tank < 0){
//             pos = i + 1;
//             tank = 0;
//         }
//     }
//     return sum < 0 ? -1 : pos;
// };