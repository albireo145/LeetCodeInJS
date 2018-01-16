/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function(tasks, n) {
    var map = new Array(26);
    map.fill(0);
    for(var i = 0; i < tasks.length; i++){
        map[tasks[i].codePointAt() - 65]++;
    }
    map.sort((a,b)=>(a-b));
    var max_val = map[25];
    var idle_slots = (max_val - 1) * n;
    for(var i = 24; i > -1; i--){
        if(map[i] == 0) break;
        else idle_slots -= Math.min(map[i], (max_val - 1));
    }
    return idle_slots > 0 ? idle_slots + tasks.length : tasks.length;
};

// var leastInterval = function(tasks, n) {
//     var map = new Array(26);
//     var times = 0;
//     map.fill(0);
//     for(var i = 0; i < tasks.length; i++){
//         map[tasks[i].codePointAt() - 65]++;
//     }
//     map.sort((a,b)=>(a-b));
//     while(map[25] > 0){
//         var i = 0;
//         while(i <= n){
//             if(map[25] == 0) break;
//             if(i < 26 && map[25 - i] > 0) map[25 - i]--;
//             times++;
//             i++;
//         } 
//         map.sort((a,b)=>(a-b));
//     }
//     return times;
// };