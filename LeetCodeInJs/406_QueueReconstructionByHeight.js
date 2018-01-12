/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b) => a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]);
    var res = [];
    people.forEach((el)=>{
        res.splice(el[1], 0, el);
    })
    return res;
};