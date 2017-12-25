/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var map = new Map();
    var result = []
    for(var i = 0; i < list1.length; i++){
        map.set(list1[i],i);
    }
    var min = Infinity;
    for(var j = 0; j < list2.length; j++){
        var cur = map.get(list2[j]);
        if(cur != null){
            cur += j;
            if(min > cur){
                min = cur;
                result = [list2[j]];
            }else if(min == cur){
                result.push(list2[j]);
            }
        }
    }
    return result;
};