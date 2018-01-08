/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */



// using matrix memo; BSF indegree
var canFinish = function(numCourses, prerequisites) {
    var indegree = [];
    var matrix = [];
    indegree.length = numCourses;
    indegree.fill(0)
    matrix.length = numCourses;
    for(var i = 0; i < numCourses; i++){
        matrix[i] = indegree.slice(0);
    }
    for(var i = 0; i < prerequisites.length; i++){
        var pre = prerequisites[i][1];
        var next = prerequisites[i][0];
        if(matrix[pre][next] == 0) //cuz duplicate case 
            indegree[next]++;
        matrix[pre][next] = 1;
    }
    var queue = [];
    for(var i = 0; i < indegree.length; i++){
        if(indegree[i] == 0) queue.push(i);
    }
    var courses = 0
    while(queue.length > 0){
        courses++;
        var vertex = queue.shift();
        for(var i = 0; i < numCourses; i++){
            if(matrix[vertex][i] != 0){
                if(--indegree[i] == 0) queue.push(i);
            }
        }
    }
    return numCourses == courses;
};


// var canFinish = function(numCourses, prerequisites) {
//     var indegree = [];
//     indegree.length = numCourses;
//     indegree.fill(0)
//     for(var i = 0; i < prerequisites.length; i++){
//         indegree[prerequisites[i][0]]++; 
//     }
//     var queue = [];
//     for(var i = 0; i < indegree.length; i++){
//         if(indegree[i] == 0) queue.push(i);
//     }
//     var courses = 0
//     while(queue.length > 0){
//         courses++;
//         var vertex = queue.shift();
//         for(var pair of prerequisites){
//             if(pair[1] == vertex){
//                 indegree[pair[0]]--;
//                 if(indegree[pair[0]] == 0){
//                     queue.push(pair[0]);
//                 }
//             }
//         }
//     }
//     return numCourses == courses;
// };

// dfs outdegree
// var canFinish = function(numCourses, prerequisites) {
//     var outdegree = [];
//     var matrix = [];
//     outdegree.length = numCourses;
//     outdegree.fill(0)
//     matrix.length = numCourses;
//     for(var i = 0; i < numCourses; i++){
//         matrix[i] = outdegree.slice(0);
//     }
//     for(var i = 0; i < prerequisites.length; i++){
//         var pre = prerequisites[i][1];
//         var next = prerequisites[i][0];
//         if(matrix[pre][next] == 0) //cuz duplicate case 
//             outdegree[pre]++;
//         matrix[pre][next] = 1;
//     }
//     var stack = [];
//     for(var i = 0; i < outdegree.length; i++){
//         if(outdegree[i] == 0) stack.push(i);
//     }
//     var courses = 0
//     while(stack.length > 0){
//         courses++;
//         var vertex = stack.pop();
//         for(var i = 0; i < numCourses; i++){
//             if(matrix[i][vertex] != 0){
//                 if(--outdegree[i] == 0) stack.push(i);
//             }
//         }
//     }
//     return numCourses == courses;
// };