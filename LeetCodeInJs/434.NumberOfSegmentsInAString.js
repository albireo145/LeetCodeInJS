/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var res = s.split(/\s+/g);
    for(el of res){
        if(el != '') count++;
    }
    return count;
};