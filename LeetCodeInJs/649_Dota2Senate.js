/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    var stack = [];
    var iterator = senate.split('');
    while(iterator.length > 0){
        var left = [];
        for(var person of iterator){
            if(stack.length == 0 || stack[stack.length - 1] == person) stack.push(person);
            else left.push(stack.pop());
        }
        iterator = left;
    }
    return stack.pop() == 'R' ? 'Radiant' : 'Dire';
};
// var predictPartyVictory = function(senate) {
//     var queue = [];
//     var people = [0,0];
//     var bans = [0,0];
//     for(var person of senate){
//         var x = person == 'R' ? 1 : 0;
//         people[x]++;
//         queue.push(x);
//     }
//     while(people[0] > 0 && people[1] > 0){
//         var x = queue.shift();
//         if(bans[x] > 0){
//             bans[x]--;
//             people[x]--;
//         }else{
//             bans[x^1]++;
//             queue.push(x);
//         }
//     }
//     return people[1] > 0 ? "Radiant" : "Dire";
// };