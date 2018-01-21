/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var indegree = new Array(numCourses);
    indegree.fill(0);
    for(var el of prerequisites){
        indegree[el[0]]++;
    }
    var queue = [];
    var res = [];
    for(var i = 0; i < numCourses; i++){
        if(indegree[i] == 0) queue.push(i);
    }
    while(queue.length > 0){
        var v = queue.shift();
        for(el of prerequisites){
            if(el[1] == v){
                if(--indegree[el[0]] == 0) queue.push(el[0]);
            }
        }
        res.push(v);
    }
    for(var i = 0; i < numCourses; i++){
        if(indegree[i] != 0) return [];
    }
    return res;
};